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

const DiskUsageSpeedo = ({ diskStats }) => {
  var diskPercent = diskStats.percent_disk_usage / 100;

  const DiskInfoModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen} size={"sm"}>
          More Info
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Disk Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Total Disk Usage: {diskStats.total_disk_usage}</Text>
              <Text>Used Disk Usage: {diskStats.used_disk_usage}</Text>
              <Text>Free Disk Usage: {diskStats.free_disk_usage}</Text>
              <Text>
                Disk Usage Percentage: {diskStats.percent_disk_usage + "%"}
              </Text>
              <Text>Number of Reads: {diskStats.disk_num_reads}</Text>
              <Text>Number of Reads: {diskStats.disk_num_writes}</Text>
              <Text>Read Bytes: {diskStats.disk_read_bytes}</Text>
              <Text>Write Bytes: {diskStats.disk_write_bytes}</Text>
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
          {"Disk Usage"}
        </Text>
      </Box>
      <Box mb={5}>
        <GaugeChart
          animate={false}
          id="gauge-chart3"
          nrOfLevels={3}
          percent={diskPercent}
        />
      </Box>
      {DiskInfoModal()}
    </Box>
  );
};

export default DiskUsageSpeedo;
