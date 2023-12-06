    import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "../Data/mockData";
import Header from "../Dashboard/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      fontSize : "20px  "
    },
    {
      field: "position",
      headerName: "Position",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "joindate",
      headerName: "Joined On",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Employees"
        subtitle="List of Employees who got selected"
      />
      <Box
        m="0 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize:"0.89rem"//font sz for entire table
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[200],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns} 
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;