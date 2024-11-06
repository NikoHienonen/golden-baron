import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  DrawerFooter,
  Button,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useSpellByIndex } from "hooks/useSpells";
import { RefObject } from "react";

interface Props {
  index: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: RefObject<any> | undefined;
  handleClose: () => void;
}

export const SpellDrawer = ({ ref, index, handleClose }: Props) => {
  const { data, error, isLoading } = useSpellByIndex(index);
  const isUserLoggedIn = false;
  const getDrawerContent = () => {
    if (isLoading) {
      return <Spinner />;
    }
    if (error || !data) {
      return <Text>Error loading spell data</Text>;
    }
    console.log(data);
    const {
      name,
      desc,
      level,
      casting_time,
      range,
      components,
      duration,
      school,
      dc,
    } = data;
    return (
      <>
        <DrawerCloseButton onClick={handleClose} />
        <DrawerHeader>Spell: {name}</DrawerHeader>

        <DrawerBody display={"flex"} flexDirection={"column"} gap={5}>
          <Grid gridTemplateColumns={"repeat(2, 1fr)"} gridGap={5}>
            <GridItem>
              <Text fontWeight={"bold"}>Level</Text>
              <Text>{level}</Text>
            </GridItem>
            <GridItem>
              <Text fontWeight={"bold"}>Casting Time</Text>
              <Text>{casting_time}</Text>
            </GridItem>
            <GridItem>
              <Text fontWeight={"bold"}>Range/Area</Text>
              <Text>{range}</Text>
            </GridItem>
            <GridItem>
              <Text fontWeight={"bold"}>Components</Text>
              <Text>
                {components.map((component) => (
                  <span>{component} </span>
                ))}
              </Text>
            </GridItem>
            <GridItem>
              <Text fontWeight={"bold"}>Duration</Text>
              <Text>{duration}</Text>
            </GridItem>
            <GridItem>
              <Text fontWeight={"bold"}>School</Text>
              <Text>{school.name}</Text>
            </GridItem>
            {dc && (
              <GridItem>
                <Text fontWeight={"bold"}>Attack/Save</Text>
                <Text>{dc.dc_type.name} save</Text>
              </GridItem>
            )}
          </Grid>
          <Text>{desc}</Text>
        </DrawerBody>

        <DrawerFooter>
          <Button backgroundColor={"green.main"} disabled={!isUserLoggedIn}>
            {isUserLoggedIn ? "Save" : "Favourites incoming"}
          </Button>
        </DrawerFooter>
      </>
    );
  };
  return (
    <Drawer isOpen placement="right" finalFocusRef={ref} onClose={handleClose}>
      <DrawerOverlay />
      <DrawerContent bg={"offWhite.main"}>{getDrawerContent()}</DrawerContent>
    </Drawer>
  );
};
