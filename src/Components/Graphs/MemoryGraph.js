import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  YAxis,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";
import { getTime } from "../../utils";

const MemoryGraph = ({ memStats }) => {
  const [newData, setNewData] = useState([
    {
      name: getTime(memStats.timestamp),
      uv: memStats.memory_usage_percent,
    },
  ]);

  useEffect(() => {
    const tempData = newData;
    if (tempData.length === 30) {
      tempData.pop();
      tempData.unshift({
        name: getTime(memStats.timestamp),
        usage: memStats.memory_usage_percent,
      });
      setNewData(tempData);
    } else {
      tempData.unshift({
        name: getTime(memStats.timestamp),
        usage: memStats.memory_usage_percent,
      });
      setNewData(tempData);
    }
  }, [newData, memStats]);

  return (
    <Box height={"100%"}>
      <Box mt={2} height={"10%"}>
        <Text fontWeight={800} color={"white"}>
          {`Memory Usage (%)`}
        </Text>
      </Box>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={newData}
          margin={{ top: 0, left: 0, bottom: -10, right: 5 }}
        >
          <Area
            type="monotone"
            dataKey="usage"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <XAxis
            dataKey={"name"}
            style={{
              marginBottom: "-20px",
              fontSize: "0.5rem",
              fontFamily: "Arial",
            }}
          />
          <YAxis
            domain={[0, 100]}
            width={25}
            style={{
              fontSize: "0.5rem",
              fontFamily: "Arial",
            }}
          />
          <Tooltip cursor={false} />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default MemoryGraph;
