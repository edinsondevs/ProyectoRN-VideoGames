import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
} from "react-native";
import { React, useState } from "react";
import { styles } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [ newUser, setNewUser ] = useState(false)

  const handleSignPress = () => {
    if(user.trim().length <= 0){
      Alert.alert('Error','Please enter your username')
    }
    else if(password.trim().length <= 0){
      Alert.alert('Error','Please enter your password')
    }
    else {
      setUser()
      setPassword()
      Alert.alert('Success', 'Mandar la data a Firebase')
      navigation.navigate("HomeScreen")
    }
  };



  const handleUserTextChange = (text) => {
    setUser(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignUpPress = () => {
    setNewUser(!newUser)
  }

  return (
    <ScrollView>
      <View style={styles.contentLogin}>
        <View style={styles.viewTitleLogin}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View>
          <View style={styles.viewFormLogin}>
            <Text style={styles.titleFormLogin}>Username</Text>
            <View style={styles.titleForm}>
              <Ionicons
                style={styles.iconInput}
                name="person-outline"
                size={24}
                color="#bababa"
                />
              <TextInput
                style={styles.textInput}
                placeholder="Type your username"
                onChangeText={handleUserTextChange}
                value={user}
                />
            </View>
          </View>

          <View style={styles.viewFormLogin}>
            <Text style={styles.titleFormLogin}>Password</Text>
            <View style={styles.titleForm}>
              <AntDesign
                name="lock"
                style={styles.iconInput}
                size={32}
                color="#bababa"
                />
              <TextInput
                style={styles.textInput}
                secureTextEntry
                placeholder="Type your password"
                placeholderTextColor="#bababa"
                onChangeText={handlePasswordChange}
                value={password}
                ></TextInput>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert("Forgot Password")}>
            <Text style={styles.buttonForgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={handleSignPress} title="Login">
            {
            newUser ? <Text style={styles.textButton}>Login</Text> 
            :
            <Text style={styles.textButton}>Register</Text> 
            }
          </TouchableOpacity>
        </View>
        <Text style={styles.textOtherLogin}>Or Login With</Text>
        
                
        <View style={styles.textFooter}>
        <TouchableOpacity onPress={handleSignUpPress} >
          <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
