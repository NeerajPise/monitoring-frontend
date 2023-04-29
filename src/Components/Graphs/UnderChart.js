import { Box, Text } from "@chakra-ui/react";
import { AreaChart, Area, YAxis, ResponsiveContainer } from "recharts";

const UnderChart = ({ title }) => {
  const data = [
    {
      name: "Page A",
      uv: 30,
    },
    {
      name: "Page A",
      uv: 30,
    },
    {
      name: "Page A",
      uv: 30,
    },
    {
      name: "Page A",
      uv: 30,
    },
  ];

  return (
    <Box height={"100%"}>
      <Box mt={2} height={"10%"}>
        <Text fontWeight={800} color={"white"}>
          {title}
        </Text>
      </Box>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <YAxis
            domain={[0, 50]}
            interval={2}
            width={25}
            style={{
              fontSize: "0.5rem",
              fontFamily: "Arial",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default UnderChart;
