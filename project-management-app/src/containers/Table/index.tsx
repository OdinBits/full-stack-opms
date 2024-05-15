import React from "react";
import { Grid, Table as MuiTable, TableContainer, Stack, TableBody, FormControl, Box, Typography } from '@mui/material';
import { tableStyles } from "./tableStyles";
import { useAppDispatch, useAppSelector } from "../../store";
import { getPaginatedDataThunk } from "../../api/getPaginationData.service";
import { updateProjectStatus } from "../../api/updateProjectStatus.service";
import { useSearchPg } from "../../utils/SearchFunction";
import { TableRowComponent } from "../../components/TableRows/TableRowData";
import SearchInputComponent from "../../components/SearchComponent/TableSearchComponent";
import SortIconComponent from "../../components/SortComponent/TableMobileSortMenu";
import CustomTableHead from "../../components/TableHeads/TableHeads";
import CardView from "../../components/ProjectListCard/CardView";
import PaginatedComponent from "../../components/PaginationComponent";
import SortSelectDesktopComponent from "../../components/SortComponent/TableDesktopSortMenu";
import { Project } from "../../interfaces/ResponseData";
import fetchBarGraphData from "../../api/barGraph.service";

const Table = () => {
  const dispatch = useAppDispatch();
  const { result } = useAppSelector(state => state.pagination);
  const { currentPage } = useAppSelector(state => state.pagination);
  const { email, name} = useAppSelector((state) => state.auth);
  const [query, setQuery] = React.useState('');
  const [sortColumn, setSortColumn] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [inputChanged, setInputChanged] = React.useState(false);

  const tableData = useSearchPg({ e: result || [], sortColumn, sortOrder, query });

  const newEmail = email.split('@')[0];

  const handleRequestSort = (columnName: string) => {
    if (sortColumn === columnName) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortOrder('asc');
      setSortColumn(columnName);
    }
    setIsModalOpen(false);
  };

  const updateStatus = async (newStatus: string, id: string) => {
    try {
      await dispatch(updateProjectStatus({ newStatus, id }));
      await dispatch(getPaginatedDataThunk(currentPage));
      await dispatch(fetchBarGraphData());
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (result && inputChanged) {
      timeoutId = setTimeout(() => {
        setInputChanged(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, inputChanged, result]);

  const handleInputChange = (value: string) => {
    setQuery(value);
  };

  return (
    <>
      <Box sx={tableStyles.tableMainContainer}>
      <Box sx={{ height:'5vh', width:'100%',display:'flex',justifyContent:'right', alignItems:'right'}}>
        <Typography sx={{fontSize:'20px',background:'white', borderRadius:'10px', margin:'3px', padding:'2px', fontWeight:'bold', fontFamily:'Nunito Sans'}}>{name}</Typography>
      </Box>
        <FormControl sx={tableStyles.formControlContainer}>
          <Stack direction="row" sx={tableStyles.stackInputContainer}>
            <SearchInputComponent
              value={query}
              setQuery={handleInputChange}
              placeholder="Search"
            />
            <Grid sx={tableStyles.sortIconMobileStyle}>
              <SortIconComponent
                handleModalToggle={() => setIsModalOpen(true)}
                isModalOpen={isModalOpen}
                handleRequestSort={handleRequestSort}
              />
            </Grid>
            <Grid sx={tableStyles.sortIconDesktopStyle}>
              <SortSelectDesktopComponent
                handleRequestSort={handleRequestSort}
              />
            </Grid>
          </Stack>
        </FormControl>
        <Grid className="d-view-list">
          <TableContainer className="auth-inner table-responsive fade-in-out" sx={tableStyles.tableComponentContainer}>
            <MuiTable sx={tableStyles.muiTableComponent} className="table">
              <CustomTableHead handleRequestSort={handleRequestSort} />
              {tableData.map((countId: Project) => (
                <TableBody key={countId._id}>
                  <TableRowComponent key={countId._id} countId={countId} Update={updateStatus} />
                </TableBody>
              ))}
            </MuiTable>
            {tableData.map((countId: Project) => (
              <Box key={countId._id} sx={tableStyles.cardViewStyle}>
                <CardView key={countId._id} countId={countId} Update={updateStatus} />
              </Box>
            ))}
          </TableContainer>
        </Grid>
      </Box>
      <Grid sx={tableStyles.paginationContainer}>
        <PaginatedComponent />
      </Grid>
    </>
  )
};
export default Table;
