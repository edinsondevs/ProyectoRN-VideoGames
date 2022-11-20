import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { useGet } from "../../Hooks";
import axios from "axios";
import Footer from "../Footer";
import { getApi } from "../../Functions";
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
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Search = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getApiPlatforms = async () => {
    const result = await axios.get(
      "https://api.rawg.io/api/platforms?key=2e821ff3e99346e6869e75fdd124b636"
    );
    const datos = result.data.results;
    setData(datos);
  };

  useEffect(() => {
    getApiPlatforms();
  }, []);

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
            <Image source={{ uri: item?.image_background }} alt="image" />
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
            {item?.name}
          </Center>
        </Box>
        <Stack p="4" spae={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {item.name}
            </Heading>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );

  function SearchBar() {
    return (
      <VStack
        my="1"
        w="100%"
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }
      >
        <VStack w="100%"  >
          <Input
            placeholder="Search for video game"
            width="280%"
            borderRadius="4"
            color="gray.400"
            fontSize="14"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="search" />}
              />
            }
            InputRightElement={
              <Icon
                m="2"
                mr="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="mic" />}
              />
            }
          />
        </VStack>
      </VStack>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headerContainer}>
        <View>
          <SearchBar />
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

export default Search;