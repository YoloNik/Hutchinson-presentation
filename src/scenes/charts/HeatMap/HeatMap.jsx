import MyResponsiveHeatMap from "../../../components/HeatMap";
import { Box } from "@mui/material";
import Header from "../../../components/Header";


const HeatMap = () => {
  return (
    <Box m="20px">
      <Header title="Heat Map" subtitle="Simple Heat Map" />
      <Box height="75vh">
        <MyResponsiveHeatMap />
      </Box>
    </Box>
  );
};

export default HeatMap;
