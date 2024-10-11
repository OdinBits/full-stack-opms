import React from 'react';
import { Formik, FormikProps } from 'formik';
import { createNewProjectSchema } from '../validation/createNewProjectSchema';
import { useAppDispatch } from '../hooks';
import createProjectThunk from '../redux/thunks/createProjectThunk';
import { CreateProjectFields, initialCreateProject } from '../interfaces/IProjects';
import { formFields } from '../interfaces/INewProjectState';
import { TextFieldRewired } from '../components';
import { Button, CircularProgress } from '@mui/material';
import styles from '../styles/createProject.module.css';

const CreateProject = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = React.useState(false); // Manage loading state
    
    const handleSubmit = async (values: CreateProjectFields) => {
        setLoading(true);
        try {
            await dispatch(createProjectThunk(values));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Formik
            initialValues={initialCreateProject}
            validationSchema={createNewProjectSchema}
            onSubmit={async (values, actions) => {
                await handleSubmit(values);
                actions.resetForm(); // Reset form after submission
            }}
        >
            {(props: FormikProps<CreateProjectFields>) => (
                <form onSubmit={props.handleSubmit} className={styles.loginForm}>
                    {formFields.map((field) => (
                        <TextFieldRewired
                            key={field.id}
                            fields={{ ...field, disabled: loading }}
                            props={props}
                            sx={{ marginTop: '20px', marginBottom: '16px', color: 'black' }}
                        />
                    ))}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                    </Button>
                </form>
            )}
        </Formik>
    );
};

export default CreateProject;
