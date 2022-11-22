import { View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";
import { styles } from "../../styles";
import { Image } from "native-base";

const Details = ({ route, navigation }) => {
  const { details } = route.params;
  console.log(details);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Details of {details.name}</Text>
      </View>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <ImageBackground
            source={{ uri: details?.background_image }}
            resizeMode="cover"
            style={{ flex: 1 }}
          ></ImageBackground>
        </View>
        <View>
          <View style={styles.websiteDetails}>
            <Text>Website Oficial </Text>
            <Text>{details.website}</Text>
          </View>
          <View style={styles.descriptionGame}>
            <Text style={styles.description}>{details.description_raw}</Text>
            <Text style={styles.titleDescription}>Rating</Text>
            <Text style={styles.numberRating}>{details.rating}</Text>
            <Text style={styles.titleDescription}>Platforms</Text>
            <View style={styles.platformsDetails}>
              <Text>
                {details.parent_platforms
                  .map((p) => p.platform.name)
                  .join("   ")}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
