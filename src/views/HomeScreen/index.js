import {
  View,
  SafeAreaView,
  // Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import { useGet } from "../../Hooks";
import axios from "axios";
import Footer from "../Footer";
// import { API } from "../../API";
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
} from "native-base";

const HomeScreen = ({ navigation }) => {

  const [data, setData] = useState([]);

  const getApiAll = async () => {
    const result = await axios.get(
      "https://api.rawg.io/api/games?key=2e821ff3e99346e6869e75fdd124b636&page=1"
    );
    const datos = result.data.results;
    setData(datos);
  };

  useEffect(() => {
    getApiAll();
  }, []);

  const render = ({ item }) => (
    // <View style={styles.item}>
    //   <Text style={styles.textCardName}>{item?.name}</Text>
    //   {item?.background_image ? (
    //     <Image style={styles.image} source={{ uri: item?.background_image }} />
    //   ) : (
    //     <ActivityIndicator size={48} />
    //   )}
    //   <Text style={styles.textCard}>Ratin: {item?.rating}</Text>
    //   <Text style={styles.textCard}>
    //     Genero: {item?.genres.map((r) => r.name).join(" ")}
    //   </Text>
    // </View>

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
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          style={styles.iconInput}
          name="person-outline"
          size={42}
          color="#bababa"
        />
      </View>
      <View style={styles.content}>
        {data.length ? (
          <View style={styles.content}>
            <Text style={styles.title}>Video Gamers</Text>
            <FlatList
              data={data}
              renderItem={render}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          </View>
        ) : (
          // <ActivityIndicator size={48} />
          <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="lg">
              Loading....
            </Heading>
          </HStack>
        )}
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreen;
