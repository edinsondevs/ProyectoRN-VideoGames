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
    // if(value === 'Platforms') navigation.navigate('Platforms');
    if(value === 'HomeScreen') navigation.navigate('HomeScreen');
    if(value === 'Search') navigation.navigate('Search');
    
  }
  return (
    <View style={{alignItems: 'center'  }}>
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
        label: 'All Games',
        icon: { uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }
      },
      // {
      //    value: 'Platforms',
      //    label: 'Platforms',
      //  },
      {
         value: 'Search',
         label: 'Search',
       },
     ]}
     />
      </ScrollView>
    </View>
  );
};

export default Footer;
