import GaugeChart from "react-gauge-chart";
import {
  Box,
  Text,
  ModalFooter,
  ModalBody,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const MemoryUsageSpeedo = ({ memStats }) => {
  var memPercent = memStats.memory_usage_percent / 100;

  const MemoryInfoModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen} size={"sm"}>
          More Info
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Memory Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Current Free Memory: {memStats.current_memory_free}</Text>
              <Text>Current Used Memory: {memStats.current_memory_used}</Text>
              <Text>
                Memory Usage Percentage: {memStats.memory_usage_percent + "%"}
              </Text>
              <Text>
                Total Available Memory: {memStats.total_available_memory}
              </Text>
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
          {"Memory Usage"}
        </Text>
      </Box>
      <Box mb={5}>
        <GaugeChart
          animate={false}
          id="gauge-chart3"
          nrOfLevels={3}
          percent={memPercent}
        />
      </Box>
      {MemoryInfoModal()}
    </Box>
  );
};

export default MemoryUsageSpeedo;
