import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Pagination } from '@mui/material';
import { dummyProjects } from '../types/dummyProject';
import { SearchField } from '../components';
import styles from '../styles/projectList.module.css';
import gsap from 'gsap';

const ProjectLists = () => {
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 9; // Set number of rows per page to 10
    const [searchQuery, setSearchQuery] = React.useState(''); // State for search query
    const [paginatedRows, setPaginatedRows] = React.useState(dummyProjects.slice(0, rowsPerPage));
    const [loading, setLoading] = React.useState(false); // Loading state
    const [filteredProjects, setFilteredProjects] = React.useState(dummyProjects); // Filtered projects based on search query

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    React.useEffect(() => {
        const newRows = filteredProjects.slice((page - 1) * rowsPerPage, page * rowsPerPage);
        setPaginatedRows(newRows);

        // Animate the new rows when the page changes
        gsap.fromTo('.data-row', { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }, [page, filteredProjects]);

    // Debounce search input
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery) {
                const filtered = dummyProjects.filter(project =>
                    project.ProjectTheme.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setFilteredProjects(filtered);
                setPage(1); // Reset to the first page
            } else {
                setFilteredProjects(dummyProjects); // Reset to original projects if search is empty
            }
        }, 1000); // Wait for 1 second after the user stops typing

        return () => clearTimeout(timer); // Cleanup timeout on unmount or when searchQuery changes
    }, [searchQuery]);

    const formatDate = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).replace(/,/, '');
    };

    // Define the columns according to GridColDef type
    const columns: GridColDef[] = [
        {
            field: 'ProjectTheme',
            headerName: 'Project Name',
            headerClassName: 'bg-blue-200',
            flex: 2.2,
            renderCell: (params) => (
                <div className='flex gap-4'>
                    <span>{params.row.ProjectTheme}</span>
                    <span className='text-xs my-auto text-blue-400'>
                        {`${formatDate(params.row.StartDate)} - ${formatDate(params.row.EndDate)}`}
                    </span>
                </div>
            ),
        },
        { field: 'Reason', headerName: 'Reason', headerClassName: 'bg-blue-200', flex: 1 },
        { field: 'Type', headerName: 'Type', headerClassName: 'bg-blue-200', flex: 1 },
        { field: 'Division', headerName: 'Division', headerClassName: 'bg-blue-200', flex: 1 },
        { field: 'Category', headerName: 'Category', headerClassName: 'bg-blue-200', flex: 1 },
        { field: 'Priority', headerName: 'Priority', headerClassName: 'bg-blue-200', flex: 1 },
        { field: 'Department', headerName: 'Department', headerClassName: 'bg-blue-200', flex: 1 },
        { field: 'Location', headerName: 'Location', headerClassName: 'bg-blue-200', flex: 1 },
        {
            field: 'Status',
            headerName: 'Status',
            headerClassName: 'bg-blue-200',
            flex: 1,
            renderCell: (params) => (
                <strong style={{ color: params.value === 'Running' ? 'green' : params.value === 'Closed' ? 'gray' : 'red' }}>
                    {params.value}
                </strong>
            ),
        },
        {
            field: 'actions',
            headerName: '',
            sortable: false,
            filterable: false,
            headerClassName: 'bg-blue-200',
            flex: 1,
            minWidth: 250,
            renderCell: (params) => (
                <div className="flex h-full gap-2 w-full justify-center">
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className='my-auto rounded-2xl h-6'
                        onClick={() => handleStart(params.row.ProjectTheme)}
                    >
                        Start
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className='my-auto rounded-2xl h-6'
                        onClick={() => handleClose(params.row.ProjectTheme)}
                    >
                        Close
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        className='my-auto rounded-2xl h-6'
                        onClick={() => handleCancel(params.row.ProjectTheme)}
                    >
                        Cancel
                    </Button>
                </div>
            ),
        },
    ];

    const handleStart = (projectTheme: string) => {
        console.log(`Started: ${projectTheme}`);
    };

    const handleClose = (projectTheme: string) => {
        console.log(`Closed: ${projectTheme}`);
    };

    const handleCancel = (projectTheme: string) => {
        console.log(`Cancelled: ${projectTheme}`);
    };

    const handleInputChange = (value: string) => {
        setSearchQuery(value);
    };

    return (
        <div id='project-list' className={styles.projectList}>
            <div className='bg-white rounded-md shadow-custom-blue '>
                <SearchField value={searchQuery}
                    setQuery={handleInputChange}
                    placeholder="Search"
                />
                <DataGrid
                    className={styles.dataGrid}
                    sx={{
                        '& .MuiDataGrid-columnSeparator': {
                            color: 'red',
                        },
                        '& .MuiDataGrid-columnHeader:nth-child(10) .MuiDataGrid-columnSeparator': {
                            display: 'none',
                        },
                        '& .MuiDataGrid-columnHeader:nth-child(11) .MuiDataGrid-columnSeparator': {
                            display: 'none',
                        },
                    }}
                    rows={paginatedRows}
                    columns={columns}
                    hideFooter
                    loading={false}
                    disableColumnMenu
                    disableRowSelectionOnClick
                    disableMultipleRowSelection
                    disableColumnResize={true}
                    getRowClassName={() => 'data-row'} // Add class to rows for GSAP animation
                />
            </div>
            <Pagination
                className={styles.pagination}
                count={Math.ceil(filteredProjects.length / rowsPerPage)} // Calculate total number of pages based on filtered projects
                page={page}
                onChange={handlePageChange}
                shape="rounded"
                color="primary"
            />
        </div>
    );
};

export default ProjectLists;
