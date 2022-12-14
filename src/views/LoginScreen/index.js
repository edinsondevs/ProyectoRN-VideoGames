import { React, useState } from "react";
import { styles } from "../../styles";
import {
  Box, 
  Heading,
  VStack,
  FormControl,
  Link,
  Input,
  Button,
  Center,
} from "native-base";
import { Alert } from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/config";

const LoginScreen = ({ navigation }) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors ] = useState("");

  const handleUserTextChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleForgotPassword = (text) => {
    sendPasswordResetEmail(auth,email)
    .then(() =>
      Alert.alert("Email Sent....!","Password reset")
    )
    .catch((error) => {
      Alert.alert('Unable to send mail')
    })
  };


  const createUser = () => {
    if (validate()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert('User Created Success');
          navigation.navigate("HomeScreen");
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    }
    setEmail("");
    setPassword("");
  };

  const loginUser = () => {
    if (validate()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate("HomeScreen");
        })
        .catch((error) => {
          Alert.alert('Incorrect email or password');
        });
    }
    setEmail("");
    setPassword("");
  };

  const validate = () => {
    if (email.trim().length <= 0 || !email.includes('@') || !email.includes('.')) {
      setErrors("Email is required");
      Alert.alert("Invalid Email","Please enter a valid email address.");
      return false;
    }
    if (password.trim().length <= 5) {
      setErrors("Password is too short");
      Alert.alert("Password is too","Please enter a valid password longer than 6 characters.");
      return false;
    }
    return true;
  };

  return (
    <Center w="100%" style={styles.container}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Enter your email"
              onChangeText={handleUserTextChange}
              value={email}
              name="email"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder="Enter your password"
              onChangeText={handlePasswordChange}
              value={password}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
              onPress={handleForgotPassword}
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={loginUser}>
            Sign in
          </Button>

          <Button mt="2" colorScheme="green" onPress={createUser}>
            Sign Up
          </Button>
          {/* <Button mt="2" colorScheme="green" onPress={loginGoogle}>
            Google
          </Button> */}
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
