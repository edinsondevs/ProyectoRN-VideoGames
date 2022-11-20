// const [brand, setBrand] = useState([]);

// const getBrands = async () => {
//   const result = await axios.get(
//     "https://api.rawg.io/api/platforms/lists/parents?key=2e821ff3e99346e6869e75fdd124b636"
//   );
//   const datos = result.data.results;
//   const brands = datos.map((e) => {
//     return { key: e.name, title: e.name };
//   });
//   setBrand(brands);
// };

// useEffect(() => {
//   getBrands();
// }, []);

import {
  View,
  Alert,
  SafeAreaView,
  // Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Footer from "../Footer";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Spinner,
  Menu,
  Divider,
  HamburgerIcon,
  Pressable,
  NativeBaseProvider,
} from "native-base";

const Footer2 = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getApiAll = async () => {
    const result = await axios.get(
      "https://api.rawg.io/api/platforms/lists/parents?key=2e821ff3e99346e6869e75fdd124b636"
    );
    const datos = result.data.results;
    const brands = datos.map((e) => {
      return { key: e.name, title: e.name };
    });
    console.log(brands);
  };

  useEffect(() => {
    getApiAll();
  }, []);

  function Example() {
    return (
      <Box w="90%" alignItems="center">
        <Menu
          w="190"
          trigger={(triggerProps) => {
            return (
              <Pressable {...triggerProps}>
                <HamburgerIcon />
              </Pressable>
            );
          }}
        >

          <Menu.Group title="Platforms">            
            <Menu.Item>PC</Menu.Item>
            <Menu.Item onPress={() => Alert.alert('Free')}>PlayStation</Menu.Item>
            <Menu.Item>iOs</Menu.Item>
            <Menu.Item>Android</Menu.Item>
            <Menu.Item>Apple Macintosh</Menu.Item>
            <Menu.Item>Linux</Menu.Item>
            <Menu.Item>Nintendo</Menu.Item>
            <Menu.Item>Atari</Menu.Item>
            <Menu.Item>Comodore / Amiga</Menu.Item>
            <Menu.Item>Sega</Menu.Item>
            <Menu.Item>3DO</Menu.Item>
            <Menu.Item>Neo Geo</Menu.Item>
            <Menu.Item>Web</Menu.Item>
          </Menu.Group>
        </Menu>
      </Box>
    );
  }

  const render = ({ item }) => (
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
            <Image source={{ uri: item?.background_image }} alt="image" />
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
            {item?.platforms.map((el) => el.platform.name).join(" / ")}
          </Center>
        </Box>
        <Stack p="4" spae={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {item.name}
            </Heading>
            <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
              {item.genres.map((el) => el.name).join(" / ")}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );

  return (
    // <SafeAreaView style={styles.container}>
    //    <View style={styles.headerContainer}>
    //     <Ionicons
    //       style={styles.iconInput}
    //       name="person-outline"
    //       size={42}
    //       color="#bababa"
    //     />
    //   </View>
    //   <View style={styles.content}>
    //     {data.length ? (
    //       <View style={styles.content}>
    //         <Text style={styles.title}>Platforms</Text>
    //         <FlatList
    //           data={data}
    //           renderItem={render}
    //           style={{ marginLeft: 10, marginRight: 10 }}
    //         />
    //       </View>
    //     ) : (
    //       // <ActivityIndicator size={48} />
    //       <HStack space={2} justifyContent="center">
    //         <Spinner accessibilityLabel="Loading posts" />
    //         <Heading color="primary.500" fontSize="lg">
    //           Loading....
    //         </Heading>
    //       </HStack>
    //     )}
    //   </View>
    //      </SafeAreaView>
    // <NativeBaseProvider>

    // <Center flex={1} px="3">
    <View style={styles.content}>
      <View></View>
      <View>
        <Example />
      </View>
    </View>

    // <Footer />
    // </Center>
    // </NativeBaseProvider>
  );
};

export default Footer2;
