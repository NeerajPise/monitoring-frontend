import { Box, Grid, GridItem } from "@chakra-ui/react";
import CPUUsageSpeedo from "./Graphs/CPUUsageSpeedo";
import DiskUsageSpeedo from "./Graphs/DiskUsageSpeedo";
import MemoryUsageSpeedo from "./Graphs/MemoryUsageSpeedo";
import { useEffect, useState } from "react";
import LogInformationModule from "./Graphs/LogInformationModule";
import ProcessInformationModule from "./Graphs/ProcessInformationModule";
import NetworkInformationModule from "./Graphs/NetworkInformationModule";
import CPUGraph from "./Graphs/CPUGraph";
import axios from "axios";
import MemoryGraph from "./Graphs/MemoryGraph";
import DiskGraph from "./Graphs/DiskGraph";

const MainGrid = ({ currentServer }) => {
  const [allStats, setAllStats] = useState({
    cpuInfo: "",
    diskInfo: "",
    memInfo: "",
    netInfo: "",
    procInfo: "",
    logInfo: "",
  });

  const [loading, setLoading] = useState(true);

  const [initial, setInitial] = useState(0);

  const getData = () => {
    const URL = currentServer;
    const config = {
      headers: {
        "Bypass-Tunnel-Reminder": 520,
      },
    };
    axios
      .all([
        axios.get(`${URL}cpu_info`, config),
        axios.get(`${URL}mem_info`, config),
        axios.get(`${URL}disk_info`, config),
        axios.get(`${URL}network_info?hostname=google.com`, config),
        axios.get(`${URL}process_info`, config),
        axios.get(`${URL}logs_info?len=20`, config),
      ])
      .then((responseArr) => {
        setAllStats({
          cpuInfo: responseArr[0].data,
          memInfo: responseArr[1].data,
          diskInfo: responseArr[2].data,
          netInfo: responseArr[3].data,
          procInfo: responseArr[4].data,
          logInfo: responseArr[5].data,
        });
        setLoading(false);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (initial === 0) {
      getData();
      setInitial(1);
    }
    setInterval(getData, 10000);
  }, [currentServer]);

  return loading === false ? (
    <Box height={"98vh"} borderWidth={1} borderColor={"black"}>
      <Grid
        h={"100%"}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <CPUUsageSpeedo cpuStats={allStats.cpuInfo} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg="gray.800">
          <CPUGraph cpuStats={allStats.cpuInfo} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg="gray.800">
          <MemoryGraph memStats={allStats.memInfo} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg="gray.800">
          <DiskGraph diskStats={allStats.diskInfo} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <MemoryUsageSpeedo memStats={allStats.memInfo} />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg="gray.800">
          <NetworkInformationModule netStats={allStats.netInfo} />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg="gray.800">
          <ProcessInformationModule procStats={allStats.procInfo} />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg="gray.800">
          <LogInformationModule logStats={allStats.logInfo} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <DiskUsageSpeedo diskStats={allStats.diskInfo} />
        </GridItem>
      </Grid>
    </Box>
  ) : (
    <></>
  );
};

export default MainGrid;
