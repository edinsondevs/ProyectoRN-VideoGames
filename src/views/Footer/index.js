import { View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SegmentedButtons, BottomNavigation } from "react-native-paper";

const Footer = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState("");

  const onNavigateValue = (value) => {
    if (value === "Login") navigation.navigate("Login");
    if (value === "HomeScreen") navigation.navigate("HomeScreen");
    if (value === "Search") navigation.navigate("Search");
  };
  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView>
        <SegmentedButtons
          value={value}
          onValueChange={onNavigateValue}
          buttons={[
            {
              value: "Login",
              label: "Logout",
              icon: "logout",
            },
            {
              value: "HomeScreen",
              label: "All Games",
              icon: "nintendo-game-boy",
            },
            {
              value: "Search",
              label: "Search",
              icon: "magnify",
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default Footer;
