import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../../theme';
import { mockDataContacts } from '../../../data/mockData';
import Header from '../../../components/Header';
import { useTheme } from '@mui/material';
//import { useEffect, useMemo } from 'react';
//import axios from 'axios';
//import { getProdData } from '../../../redux/departmetn/departmentOperations';
//import { useDispatch } from 'react-redux';

const ProductInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //const dispatch = useDispatch;

  //dispatch(getProdData());

  //useEffect(() => {}, [dispatch]);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'district', headerName: 'District' },
    {
      field: 'workPlace',
      headerName: 'Work Place',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'part',
      headerName: 'Type',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'side',
      headerName: 'Side',
      flex: 1,
    },
    {
      field: 'quantityProd',
      headerName: 'Quantity of products',
      flex: 1,
    },
    {
      field: 'ok',
      headerName: 'Ok',
      flex: 1,
    },
    {
      field: 'nok',
      headerName: 'Nok',
      flex: 1,
    },
    {
      field: 'quantityIssue',
      headerName: 'Quantity issue',
      flex: 1,
    },
  ];

  //const dataForChart = useMemo(() => {
  //  return [
  //    {
  //      id: 'test',
  //      district: 'test',
  //      workPlace: 'test',
  //      part: 'test',
  //      side: 'test',
  //      quantityProd: 'test',
  //      ok: 'test',
  //      nok: 'test',
  //      quantityIssue: 'test',
  //    },
  //  ];
  //}, []);

  return (
    <Box m="20px">
      <Header title="DATA" subtitle="List of Data" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ProductInfo;
