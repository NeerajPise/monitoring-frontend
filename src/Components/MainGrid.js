import { Box, Grid, GridItem } from "@chakra-ui/react";
import Speedometer from "./Graphs/Speedometer";
import { graphConstants } from "../constants";
import UnderChart from "./Graphs/UnderChart";
import UnderChartTriple from "./Graphs/UnderChartTriple";
import UnderChartDouble from "./Graphs/UnderChartDouble";

const MainGrid = () => {
  return (
    <Box height={"97vh"} borderWidth={1} borderColor={"black"}>
      <Grid
        h={"100%"}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <Speedometer title={graphConstants.SPEEDO_ONE} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <UnderChart title={graphConstants.AREA_ONE} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <UnderChartDouble title={graphConstants.AREA_ONE} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <UnderChartDouble title={graphConstants.AREA_ONE} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <Speedometer title={graphConstants.SPEEDO_TWO} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <UnderChartDouble title={graphConstants.AREA_ONE} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <UnderChartDouble title={graphConstants.AREA_ONE} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <UnderChartDouble title={graphConstants.AREA_ONE} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="gray.800">
          <Speedometer title={graphConstants.SPEEDO_THREE} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} bg="gray.800">
          <UnderChartTriple title={graphConstants.AREA_ONE} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MainGrid;
