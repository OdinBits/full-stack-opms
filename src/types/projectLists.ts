// ProjectLists.ts
import { GridColDef } from '@mui/x-data-grid'; // or your specific Data Grid library

export const columns: GridColDef[] = [
  {
    field: 'ProjectTheme',
    headerName: 'Project Name',
    headerClassName: 'bg-blue-200',
    flex: 2.2,
    renderCell: (params) => (
      <div className="flex gap-4">
        <span>{params.row.ProjectTheme}</span>
        <span className="text-xs my-auto text-blue-400">
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
      <strong
        style={{
          color:
            params.value === 'Running'
              ? 'green'
              : params.value === 'Closed'
              ? 'gray'
              : 'red',
        }}
      >
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
          className="my-auto rounded-2xl h-6"
          onClick={() => handleStart(params.row.ProjectTheme)}
        >
          Start
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className="my-auto rounded-2xl h-6"
          onClick={() => handleClose(params.row.ProjectTheme)}
        >
          Close
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          className="my-auto rounded-2xl h-6"
          onClick={() => handleCancel(params.row.ProjectTheme)}
        >
          Cancel
        </Button>
      </div>
    ),
  },
];
