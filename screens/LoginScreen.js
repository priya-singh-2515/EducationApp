import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
// import CheckBox from 'expo-checkbox';
import CheckBox from '@react-native-community/checkbox';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import {
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';

const LoginScreen = () => {
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>Description</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#4630EB' : undefined}
        />
        {/* <CheckBox value={agree} onChange={() => setAgree(!agree)} /> */}
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? '#4630EB' : 'grey',
          },
        ]}
        disabled={!agree}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    fontFamily: 'bold',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: 'regular',
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    // lineHeight: 5,
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18,
  },
  multiinStyle: {},
});

export default LoginScreen;
