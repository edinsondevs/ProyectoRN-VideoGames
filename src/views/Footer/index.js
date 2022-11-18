import {
  View,
  ScrollView,
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
    if(value === 'Footer') navigation.navigate('Footer');
    
  }
  return (
    <View>
      <ScrollView>

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
        icon: { uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }
      },
      {
         value: 'Platforms',
         label: 'Platforms',
       },
      {
         value: 'Footer',
         label: 'Footer',
       },
     ]}
     />
      </ScrollView>
    </View>
  );
};

export default Footer;
