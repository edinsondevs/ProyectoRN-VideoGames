import {
    View,
    Text,
    SafeAreaView,
    Image,
    FlatList,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { styles } from "../../styles";
  import { Ionicons } from "@expo/vector-icons";
  import axios from "axios";
  import Footer from "../Footer";

  
  const Home = ({navigation}) => {
    const [ep, setEp] = useState();

  
    
    const [data, setData] = useState([]);
  
    const getApiAll = async () => {
      const result = await axios.get(
        "https://api.rawg.io/api/Home?key=2e821ff3e99346e6869e75fdd124b636"
      );
      const datos = result.data.results;
      console.log(datos);
      setData(datos);
    };
  
    const HetApihome = async () => {};
  
    useEffect(() => {
      getApiAll();
    }, []);
  
    const render = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.textCardName}>{item?.name}</Text>
        {item?.image_background ? (
          <Image style={styles.image} source={{ uri: item?.image_background }} />
        ) : (
          <ActivityIndicator size={48} />
        )}
        <Text style={styles.textCard}>
          Genero: {item?.games.map((r) => r.name).join(" ")}
        </Text>
      </View>
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
              <Text style={styles.title}>Bienvenido</Text>
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
        {/* <View style={styles.footer}>
          <Button title="Bienvenido" onPress={() => getApiAll()}></Button>
          <Button title="Prueba" onPress={() => HetApihome()}></Button>
          <Button title="TodoList" onPress={() => navigation.navigate('TodoList')}></Button>
        </View> */}
        <Footer />
      </SafeAreaView>
    );
  };
  
  export default Home;
  