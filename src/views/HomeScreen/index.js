import {
  View,
  SafeAreaView,
  // Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
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
import { ActivityIndicator } from "react-native-paper";

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
    <Box style={{ marginBottom: 20 }}>
      <Box maxW="80" rounded="lg" overflow="hidden" borderWidth="1">
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
        <Stack p="4" space={3}>
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
    <View style={styles.container}>
      <SafeAreaView style={styles.headerContainer}>
        <View>
          <Text style={styles.title}>Video Gamers</Text>
        </View>
        <View>
          <Ionicons
            style={styles.iconInput}
            name="person-outline"
            size={42}
            color="#bababa"
          />
        </View>
      </SafeAreaView>
      {data.length ? (
        <View style={styles.content}>
          <FlatList
            data={data}
            renderItem={render}
            style={{ marginLeft: 10, marginRight: 10 }}
          />
        </View>
      ) : (
        // <ActivityIndicator size={64} animating={true} />
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="lg">
            Loading
          </Heading>
        </HStack>
      )}
      <Footer />
    </View>
  );
};

export default HomeScreen;
