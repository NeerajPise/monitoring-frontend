import GaugeChart from "react-gauge-chart";
import { Box, Text } from "@chakra-ui/react";

const Speedometer = ({ title }) => {
  return (
    <Box height={"100%"}>
      <Box mt={2} height={"20%"}>
        <Text fontWeight={800} color={"white"}>
          {title}
        </Text>
      </Box>
      <GaugeChart id="gauge-chart3" nrOfLevels={3} percent={0.86} />
    </Box>
  );
};

export default Speedometer;
