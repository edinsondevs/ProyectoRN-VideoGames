import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { SegmentedButtons, BottomNavigation } from 'react-native-paper';


const Footer = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('');

  const onNavigateValue = (value) => {
    if(value === 'Login') navigation.navigate('Login')
    if(value === 'Platforms') navigation.navigate('Platforms');
    if(value === 'HomeScreen') navigation.navigate('HomeScreen');
    
  }
  return (
    <View>
      <ScrollView>
    {/* //   <BottomNavigation
    //   navigationState={{ index, routes }}
    //   onIndexChange={setIndex}
    //   renderScene={renderScene}
    // /> */}
    <SegmentedButtons
     value={value}
     onValueChange={onNavigateValue}
     buttons={[
      {
        value: 'Login',
        label: 'Login',
      },
      {
        value: 'HomeScreen',
        label: 'HomeScreen',
      },
      {
         value: 'Platforms',
         label: 'Platforms',
       },
     ]}
     />
     {/* <Text>{value}</Text>
        <View style={styles.footer}>
          <TouchableHighlight
            style={styles.bottomButtons}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.footerText}>All Gamers</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.bottomButtons}
            onPress={() => navigation.navigate('Platforms')}
          >
            <Text style={styles.footerText}>Platforms</Text>
          </TouchableHighlight>
        </View>  */}
      </ScrollView>
    </View>
  );
};

export default Footer;
