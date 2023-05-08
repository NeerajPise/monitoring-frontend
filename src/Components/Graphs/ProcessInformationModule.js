import { Box, Text, Tooltip, Stack, Code } from "@chakra-ui/react";

const ProcessInformationModule = ({ procStats }) => {
  return (
    <Box height={"100%"}>
      <Box mt={2} height={"10%"}>
        <Text fontWeight={800} color={"white"}>
          {"Process Information"}
        </Text>
      </Box>
      <Box width="100%" height="85%" overflow={"scroll"}>
        {procStats.process_list.map((item, index) => {
          return (
            <Box key={index} mb={4}>
              <Tooltip
                color={"white"}
                label={
                  <Stack>
                    <Text>username: {item.username}</Text>
                    <Text>status: {item.status}</Text>
                    <Text>pid: {item.pid}</Text>
                    <Text>vms: {item.vms}</Text>
                    <Text>cpu_time: {item.cpu_time}</Text>
                  </Stack>
                }
                closeDelay={200}
              >
                <Code colorScheme="green">{item.name}</Code>
              </Tooltip>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProcessInformationModule;
