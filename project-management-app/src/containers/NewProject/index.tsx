import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, Typography, Box, Snackbar, Alert, ThemeProvider } from '@mui/material';
import { Formik } from 'formik';
import { NewProjectState, initialNewProjectState } from '../../interfaces/NewProjectState';
import { addProjectThunk } from '../../api/addProjectData.service';
import { AppDispatch } from '../../store/configureStore';
import { useAppSelector } from '../../store';
import FeedBackWindow from '../../components/FeedBacks/CustomError';
import LoadingComponent from '../../components/FeedBacks/CustomLoading';
import CustomTextarea from '../../components/CustomeTextArea/Textarea';
import CustomTextField from '../../components/CustomeTextField/TextField';
import CustomSelect from '../../components/CustomeSelect/Select';
import { globalTheme } from '../../themes/globalTheme';
import { setFlag } from '../../store/flagSlice';
import { addProjectSchema } from '../../interfaces/YupSchema';
import { formFields } from '../../interfaces/DropDownsAndForm';
import { createProjectStyles } from './createProjectStyles';
import { setNavLink } from '../../store/navigationPersistanceSlice';

const CreateProject = () => {

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { email} = useAppSelector((state) => state.auth);

  const newEmail = email.split('@')[0];


  const handleCloseSnackbar = (event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const { isValid, name } = useAppSelector((state) => state.auth);

  const { loading, error, message } = useAppSelector((state) => state.projectSubmissionState);

  // if (loading) return <LoadingComponent message="Loading dashboard data..." />;
  // if (error) return <FeedBackWindow message={message} />;

  // console.log("Error message from createProject", message)


  return (
    <ThemeProvider theme={globalTheme} >
      <Formik
        initialValues={initialNewProjectState}
        validationSchema={addProjectSchema}
        onSubmit={async (values, actions) => {
          const res = dispatch(addProjectThunk(values));
          console.log("i am from fromik add ", res)
          if((await res).payload.status === 'error')
            {
              const message = (await res).payload.message
              alert(message);
              return;
            }
            else{
              actions.resetForm();
              dispatch(setNavLink(1));
              //handleSnackbarOpen();
              dispatch(setFlag(true));
            }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Box component="form" onSubmit={handleSubmit} sx={createProjectStyles.formStyles}>
            <Grid item className='fade-in-out' sx={createProjectStyles.mainGridContainer}>
              <Box sx={createProjectStyles.textAreaContainer}>
                <Box sx={createProjectStyles.innerTextAreaContainer}>
                  <CustomTextarea
                    id='projectInfo'
                    name='projectInfo'
                    value={values.projectInfo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Project Theme"
                    style={createProjectStyles.textArea}
                    error={Boolean(errors.projectInfo && touched.projectInfo)}
                    errorMessage={touched.projectInfo && errors.projectInfo}
                  />
                </Box>
                <Button type="submit" sx={createProjectStyles.defaultSaveButton}>
                  Save Project
                </Button>
              </Box>
              <Grid container spacing={{ xs: 1, sm: 1, md: 2, xl: 2, lg: 2 }} sx={createProjectStyles.dropDownAndDateContainer}>
                {formFields.map(({ name, label, options, placeHolder }) => (
                  <Grid item sx={createProjectStyles.dropDownAndDateOutliner} key={name}>
                    <Grid item sx={createProjectStyles.inputGrid}>
                      {name === 'startDate' || name === 'endDate' ? (
                        <CustomTextField
                          id={name}
                          name={name}
                          label={label}
                          type='date'
                          placeholder='D month,Yr'
                          value={values[name] || ''}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(errors[name] && touched[name])}
                          errorMessage={errors[name]}
                        />
                      ) : (
                        <CustomSelect
                          id={name}
                          name={name}
                          label={label}
                          value={values[name as keyof NewProjectState] || ''}
                          options={options}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={placeHolder}
                          error={Boolean(errors[name as keyof NewProjectState] && touched[name as keyof NewProjectState])}
                          errorMessage={typeof errors[name as keyof NewProjectState] === 'string' ? errors[name as keyof NewProjectState] : ''}
                        />
                      )}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Box sx={createProjectStyles.registerIndicatorContainer}>
                <Box sx={createProjectStyles.registerInnerContainer}>
                  <Typography sx={createProjectStyles.registerStatus}>Status:</Typography>
                  <Typography sx={createProjectStyles.registerValue}>{isValid ? "Registered" : "Unknown"}</Typography>
                </Box>
              </Box>
              <Box sx={createProjectStyles.mobileViewButtonContainer}>
                <Button type="submit" sx={createProjectStyles.mobileViewSaveButton}>
                  Save Project
                </Button>
              </Box>
            </Grid>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={7000}
              onClose={handleCloseSnackbar}
              sx={{ width: '80%' }}
            >
              <Alert
                elevation={5}
                variant="filled"
                severity="success"
                sx={createProjectStyles.alertStyle}
              >
                Project created!
              </Alert>
            </Snackbar>
          </Box >
        )}
      </Formik>
    </ThemeProvider>
  )
}
export default CreateProject;
