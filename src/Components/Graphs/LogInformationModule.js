import { Box, Text, Code } from "@chakra-ui/react";

const LogInformationModule = ({ logStats }) => {
  return (
    <Box height={"100%"}>
      <Box mt={2} mb={3} height={"5%"}>
        <Text fontWeight={800} color={"white"}>
          {"Log Information"}
        </Text>
      </Box>
      <Box width="100%" height="90%" overflow={"scroll"}>
        {logStats.config_paths.map((item, index) => {
          return (
            <Box key={index} mb={4} height="29%">
              <Code colorScheme="green" mb={2}>
                {item.log_name}
              </Code>
              <Box height={"80%"} overflow={"scroll"}>
                {item.log.map((line, index) => {
                  return (
                    <Text key={index} fontSize={12} color={"white"}>
                      {line}
                    </Text>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default LogInformationModule;
