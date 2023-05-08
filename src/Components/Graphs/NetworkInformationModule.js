import { Box, Text, Tooltip, Stack, Code } from "@chakra-ui/react";
import { processNetStat } from "../../utils";

const NetworkInformationModule = ({ netStats }) => {
  const processedNetStat = processNetStat(netStats);
  return (
    <Box height={"100%"}>
      <Box mt={2} height={"10%"}>
        <Text fontWeight={800} color={"white"}>
          {"Network Information"}
        </Text>
      </Box>
      <Box width="100%" height="85%" overflow={"scroll"}>
        <Text textAlign={"left"} color={"white"} ml={5}>
          NIC Data:
        </Text>
        {netStats.nic_data.map((item, index) => {
          return (
            <Box key={index} mb={4}>
              <Tooltip
                color={"white"}
                label={
                  <Stack>
                    <Text>
                      address:{" "}
                      {item.address.map((item) => {
                        return item + "\n";
                      })}
                    </Text>
                    <Text>Bytes Sent: {item.bytes_sent}</Text>
                    <Text>Bytes Received: {item.bytes_recv}</Text>
                  </Stack>
                }
                closeDelay={200}
              >
                <Code colorScheme="green">{item.interface}</Code>
              </Tooltip>
            </Box>
          );
        })}
        <Text textAlign={"left"} color={"white"} ml={5} mt={10} mb={5}>
          Net Connections:
        </Text>
        {processedNetStat.map((item, index) => {
          return (
            <Box key={index} mb={4}>
              <Tooltip
                color={"white"}
                label={
                  <Stack>
                    <Text>IP: {item.ip}</Text>
                    <Text>PID: {item.pid}</Text>
                    <Text>Port: {item.port}</Text>
                    <Text>Status: {item.status}</Text>
                    <Text>Count: {item.count}</Text>
                  </Stack>
                }
                closeDelay={200}
              >
                <Code colorScheme="green">{item.process_name}</Code>
              </Tooltip>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default NetworkInformationModule;
