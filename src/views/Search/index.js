import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import axios from "axios";
import Footer from "../Footer";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  Stack,
  HStack,
  VStack,
  Spinner,
  Divider,
  Input,
  Icon,
  FormControl,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Platforms from './../Platforms/index';

const Search = () => {
  const [game, setGame] = useState();
  const [data, setData] = useState();

  const handleTextChange = (text) => {
    setGame(text);
  };

  const handleOnPress = async (params) => {
    // const handleOnPress = async (data) => {
    const result = await axios.get(
      // `https://api.rawg.io/api/games/hitman?key=2e821ff3e99346e6869e75fdd124b636`
      `https://api.rawg.io/api/games/${params}?key=2e821ff3e99346e6869e75fdd124b636`
    );
    const datos = result.data;
    // console.log(datos.platforms.map(e => e.platform.name));
    setData(datos);
    setGame('')
  };

  // useEffect(() => {
  //   getApiPlatforms();
  // }, []);

  // const handleOnPress = async (data) => {
  //   const searchData = await axios.get(
  //     // `https://api.rawg.io/api/games/hitman?key=2e821ff3e99346e6869e75fdd124b636`
  //     `https://api.rawg.io/api/games/${data}?key=2e821ff3e99346e6869e75fdd124b636`
  //   );
  //   const result = searchData.data;
  //   setGame();
  //   setGame("");
  // };

  // const render = ({ item }) => (
  //   <Box style={{ marginBottom: 20 }}>
  //     <Box
  //       maxW="80"
  //       rounded="lg"
  //       overflow="hidden"
  //       borderColor="coolGray.800"
  //       borderWidth="1"
  //     >
  //       <Box>
  //         <AspectRatio w="100%" ratio={9 / 9}>
  //           <Image source={{ uri: item?.image_background }} alt="image" />
  //         </AspectRatio>
  //         <Center
  //           bg="dark.200"
  //           _text={{
  //             color: "warmGray.50",
  //             fontWeight: "700",
  //             fontSize: "xs",
  //           }}
  //           position="absolute"
  //           bottom="0"
  //           px="3"
  //           py="1.5"
  //           flexDirection={"row"}
  //         >
  //           {item?.name}
  //         </Center>
  //       </Box>
  //       <Stack p="4" spae={3}>
  //         <Stack space={2}>
  //           <Heading size="md" ml="-1">
  //             {item.name}
  //           </Heading>
  //         </Stack>
  //       </Stack>
  //     </Box>
  //   </Box>
  // );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Input
            placeholder="Search for video game"
            width="450%"
            borderRadius="4"
            color="gray.400"
            fontSize="14"
            value={game}
            name="game"
            onChangeText={handleTextChange}
            InputLeftElement={
              <Icon
                onPress={() => handleOnPress(game)}
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="search" />}
              />
            }
          />
        </View>
        <View>
          <Ionicons
            style={styles.iconInput}
            name="person-outline"
            size={42}
            color="#bababa"
          />
        </View>
      </View>
      {data ? (
        <View style={styles.content}>
          <View>
            <Text>{data.name}</Text>
          </View>
          <View>
            <Box style={{ marginBottom: 20 }}>
              <Box
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.800"
                borderWidth="1"
              >
                <Box>
                  <AspectRatio w="100%" ratio={9 / 9}>
                    <Image
                      source={{ uri: data?.background_image }}
                      alt="image"
                    />
                  </AspectRatio>
                  <Center
                    bg="dark.200"
                    _text={{
                      color: "warmGray.50",
                      fontWeight: "700",
                      fontSize: "xs",
                    }}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                    flexDirection={"row"}
                  >
                    {data.platforms.map(e => e.platform.name).join("  ")} 
                  </Center>
                </Box>
                <Stack p="4" spae={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      {data.name}
                    </Heading>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </View>
        </View>
      ) : (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="lg">
            Loading...
          </Heading>
        </HStack>
      )}
      <Footer />
    </View>
  );
};

export default Search;
