import {
    View,
    SafeAreaView,
    FlatList,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { styles } from "../../styles";
  import { Ionicons } from "@expo/vector-icons";
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
  } from "native-base";
  
  
  
  const Platforms = ({navigation}) => {
    
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
      // <View style={styles.item}>
      //   <Text style={styles.textCardName}>{item?.name}</Text>
      //   {item?.image_background ? (
      //     <Image style={styles.image} source={{ uri: item?.image_background }} />
      //   ) : (
      //     <ActivityIndicator size={48} />
      //   )}
      //   <Text style={styles.textCard}>
      //     Genero: {item?.games.map((r) => r.name).join(" ")}
      //   </Text>
      // </View>
      <Box style={{marginBottom: 20}}>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.800"
        borderWidth="1"
      > 
        <Box>
          <AspectRatio w="100%" ratio={9 / 9}
          >
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
            flexDirection={'row'}
          >
            {item?.name}
          </Center>
        </Box>
        <Stack p="4" spae={3} >
          <Stack space={2} >
            <Heading size="md" ml="-1">
              {item.name}
            </Heading>
            
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
              <Text style={styles.title}>Platforms</Text>
              <FlatList
                data={data}
                renderItem={render}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
            </View>
          ) : (
            <ActivityIndicator size={48} />
          )}
        </View>
        <Footer />
      </SafeAreaView>
    );
  };
  
  export default Platforms;
  