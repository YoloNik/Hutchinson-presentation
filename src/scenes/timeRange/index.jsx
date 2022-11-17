import MyResponsiveTimeRange from "../../components/TimeRange";
import { Box } from "@mui/material";
import Header from "../../components/Header";


const TimeRange = () => {
  return (
    <Box m="20px">
      <Header title="Time Range" subtitle="Simple Time Range" />
      <Box height="75vh">
        <MyResponsiveTimeRange />
      </Box>
    </Box>
  );
};

export default TimeRange;
