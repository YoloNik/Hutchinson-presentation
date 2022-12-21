import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../../theme';
import { mockDataContacts } from '../../../data/mockData';
import Header from '../../../components/Header';
import { useTheme } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { getProdData } from '../../../redux/departmetn/departmentOperations';
import { useDispatch, useSelector } from 'react-redux';
import { allProdData } from '../../../redux/departmetn/departmentSelector';
import { useState } from 'react';
import { useMemo } from 'react';

const ProductInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const date = new Date().getHours();
  const date1 = new Date().getMinutes();
  const currenDate = new Date().toLocaleString();
  const day = currenDate.split('').slice(0, 10).join('');
  const time = currenDate.split('').slice(12).join('');

  const dispatch = useDispatch();
  const currentProdData = useSelector(allProdData);
  const [currentShift, setcurrentShift] = useState();
  const test = +time.replace(/:/g, '');

  useEffect(() => {
    dispatch(getProdData());
    switch (test) {
      case test >= 545 && test < 1345:
        setcurrentShift(1);
        break;
      case test >= 1345 && test < 2145:
        setcurrentShift(2);
        break;
      case test >= 2145 && test < 545:
        setcurrentShift(3);
        break;
      default:
        break;
    }
  }, [currentShift, dispatch, test]);

  const initialValues = {
    name: '',
    time: '',
    department: '',
    project: '',
    side: '',
    type: '',
    ok: '',
    nok: '',
    rework: '',

    //leaderComment: '',
    //operatorComment: '',
  };

  const columns = [
    {
      field: `name`,
      headerName: 'Name',
      flex: 0.5,
    },
    { field: `${currentShift}`, headerName: 'Shift' },
    {
      field: 'department',
      headerName: 'Department',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'project',
      headerName: 'Project',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'side',
      headerName: 'Side',
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Type',
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
      field: 'rework',
      headerName: 'Rework',
      flex: 1,
    },
  ];

  const dataForChart = [
    {
      id: 'test',
      district: 'test',
      workPlace: 'test',
      part: 'test',
      side: 'test',
      quantityProd: 'test',
      ok: 'test',
      nok: 'test',
      quantityIssue: 'test',
    },
  ];
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
          rows={currentProdData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ProductInfo;
