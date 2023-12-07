import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Autocrausel from "../Pages/Autocrausel";
import Autocrausel2 from "../Pages/Autocrausal2";
import ImageCrausal3 from "../Pages/ImageCrausal3";
import ImageCrausal4 from "../Pages/ImageCrausal4";
import ImageCrausal from "../Pages/ImageCrausel";
import ImageCrausel2 from "../Pages/ImageCrausel2";
import Imagesslider from "../Pages/Imagesslider";
import Imagesslidershop from "../Pages/Imagesslider1";
import Prodcustom from "../Pages/Prodcustom";
import ProdItems from "../Pages/ProdItems";
import Singleslider from "../Pages/Singleslider";

const Home = () => {
  return (
    <Box>
      <Autocrausel />
      <Box>
        <Imagesslidershop url="https://kiwi-discovered-pyjama.glitch.me/imagesslider1_shop" />
      </Box>
      <Box>
        <ImageCrausal />
      </Box>
      <Box>
        <Text
          textAlign={"left"}
          ml={"40px"}
          fontSize={"25px"}
          fontWeight={"bold"}
        >
          Top Picks
        </Text>
        <ProdItems />
      </Box>
      <Box>
        <ImageCrausel2 />
      </Box>
      <Box>
        <ImageCrausal3 />
      </Box>
      <Box>
        <ImageCrausal4 />
      </Box>
    </Box>
  );
};

export default Home;
