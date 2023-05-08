import GaugeChart from "react-gauge-chart";
import {
  Box,
  Text,
  useDisclosure,
  ModalFooter,
  ModalBody,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

const CPUUsageSpeedo = ({ cpuStats }) => {
  var cpuPercent = cpuStats.avg_cpu_load / 100;

  const CPUInfoModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen} size={"sm"}>
          More Info
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>CPU Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Average CPU Load: {cpuStats.avg_cpu_load + "%"}</Text>
              <Text>CPU Count / Number of Cores: {cpuStats.cpu_count}</Text>
              {cpuStats.cpu_load_per_core?.map((item, index) => {
                return (
                  <Text key={index}>{`Core ${index + 1} load: ${item}`}</Text>
                );
              })}
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <Box height={"100%"}>
      <Box mt={2} mb={2} height={"20%"}>
        <Text fontWeight={800} color={"white"}>
          {"CPU Usage"}
        </Text>
      </Box>
      <Box mb={5}>
        <GaugeChart
          animate={false}
          id="gauge-chart3"
          nrOfLevels={3}
          percent={cpuPercent}
        />
      </Box>
      {CPUInfoModal()}
    </Box>
  );
};

export default CPUUsageSpeedo;
