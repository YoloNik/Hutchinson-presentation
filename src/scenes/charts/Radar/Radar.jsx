import { Box } from "@mui/material";
import Header from "../../../components/Header";
import MyResponsiveRadar from "../../../components/Radar";

const Radar = () => {
  return (
    <Box m="20px">
      <Header title="Radar Chart" subtitle="Simple Radar Chart" />
      <Box height="75vh">
        <MyResponsiveRadar />
      </Box>
    </Box>
  );
};

export default Radar;