import { Box, Text } from "@chakra-ui/react";
import { AreaChart, Area, YAxis, ResponsiveContainer } from "recharts";

const UnderChartDouble = ({ title }) => {
  const data = [
    {
      name: "Page A",
      uv: 40,
      pv: 24,
    },
    {
      name: "Page B",
      uv: 30,
      pv: 13,
    },
    {
      name: "Page C",
      uv: 20,
      pv: 98,
    },
    {
      name: "Page D",
      uv: 27,
      pv: 39,
    },
    {
      name: "Page E",
      uv: 18,
      pv: 48,
    },
    {
      name: "Page F",
      uv: 23,
      pv: 38,
    },
    {
      name: "Page G",
      uv: 34,
      pv: 43,
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
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
          <YAxis
            domain={[0, 150]}
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

export default UnderChartDouble;
