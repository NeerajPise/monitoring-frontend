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

const DiskGraph = ({ diskStats }) => {
  const [newData, setNewData] = useState([
    {
      name: getTime(diskStats.timestamp),
      usage: diskStats.percent_disk_usage,
    },
  ]);

  useEffect(() => {
    const tempData = newData;
    if (tempData.length === 30) {
      tempData.pop();
      tempData.unshift({
        name: getTime(diskStats.timestamp),
        usage: diskStats.percent_disk_usage,
      });
      setNewData(tempData);
    } else {
      tempData.unshift({
        name: getTime(diskStats.timestamp),
        usage: diskStats.percent_disk_usage,
      });
      setNewData(tempData);
    }
  }, [newData, diskStats]);

  return (
    <Box height={"100%"}>
      <Box mt={2} height={"10%"}>
        <Text fontWeight={800} color={"white"}>
          {`Disk Usage (%)`}
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
              fontSize: "0.5rem",
              fontFamily: "Arial",
            }}
          />
          <YAxis
            domain={[0, 10]}
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

export default DiskGraph;
