import { Box } from "@mui/material";
import Header from "../../components/Header";
import Radar from "../../components/Radar";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <Radar />
      </Box>
    </Box>
  );
};

export default Pie;