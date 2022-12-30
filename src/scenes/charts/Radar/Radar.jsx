import { Box } from '@mui/material';
import Header from '../../../components/Header';
import MyResponsiveRadar from '../../../components/Radar';
//import { timeRange } from '../data/mockData';
import { radar } from '../../../data/mockData';

const Radar = ({ data }) => {
  return (
    <Box m="20px">
      <Header title="Radar Chart" subtitle="Simple Radar Chart" />
      <Box height="75vh">
        <MyResponsiveRadar data={radar} />
      </Box>
    </Box>
  );
};

export default Radar;
