import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';
import LoginWithIcon from '../components/LoginWithIcon';
import {ImageBackground} from 'react-native';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});

  const getErrors = (email, password, confirmPassword) => {
    const errors = {};
    if (!email) {
      errors.email = 'Please enter Email';
    } else if (email.includes('@') || !email.includes('.com')) {
      errors.email = 'Please Valid Email';
    }

    if (!password) {
      errors.password = 'Enter Password';
    } else if (password.lenght < 8) {
      errors.password = 'Enter Password of 8 Characters';
    }

    if (!confirmPassword) {
      errors.password = 'Enter Password';
    } else if (password.length < 8) {
      errors.password = 'Enter correct Password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Password not matched';
    }

    return errors;
  };

  const handelRegister = () => {
    const errors = getErrors(email, password, confirmPassword);

    if (Object.keys(errors).length > 0) {
      setShowError(true);
      setErrors(showError && errors);
      console.log(errors);
    } else {
      setErrors({});
      setShowError(false);
      // console.log('Registered');
      handelSignIn(email, password);
    }
  };

  const handelSignIn = (email, password) => {
    navigation.navigate('SignIn');
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={{
          width: '100%',
          position: 'absolute',
          height: 300,
          top: 0,
          left: 0,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: 60,
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 20,
            fontSize: 30,
            marginBottom: 80,
            letterSpacing: 2,
            fontWeight: '500',
            color: COLORS.black,
          }}>
          Welcome
        </Text>
        <View
          style={{
            width: '100%',
          }}>
          <View
            style={{
              width: '100%',
              marginBottom: 20,
            }}>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor={COLORS.gray50}
              keyboardType="email-address"
              value={email}
              onChangeText={e => setEmail(e)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                fontSize: 14,
                color: COLORS.black,
                borderRadius: 10,
                backgroundColor: COLORS.white,
              }}
            />
            {errors.email && (
              <Text style={{fontSize: 14, color: 'red', marginTop: 4}}>
                {errors.email}
              </Text>
            )}
          </View>

          <View
            style={{
              width: '100%',
              marginBottom: 20,
            }}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={COLORS.gray50}
              keyboardType="visible-password"
              value={password}
              onChangeText={e => setPassword(e)}
              maxLength={8}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                fontSize: 14,
                color: COLORS.black,
                borderRadius: 10,
                backgroundColor: COLORS.white,
              }}
            />
            {errors.password && (
              <Text style={{fontSize: 14, color: 'red', marginTop: 4}}>
                {errors.password}
              </Text>
            )}
          </View>

          <View
            style={{
              width: '100%',
              marginBottom: 20,
            }}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={COLORS.gray50}
              keyboardType="visible-password"
              value={confirmPassword}
              onChangeText={e => setConfirmPassword(e)}
              maxLength={8}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                fontSize: 14,
                color: COLORS.black,
                borderRadius: 10,
                backgroundColor: COLORS.white,
              }}
            />
            {errors.confirmPassword && (
              <Text style={{fontSize: 14, color: 'red', marginTop: 4}}>
                {errors.confirmPassword}
              </Text>
            )}
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            activeOpacity={0.8}
            style={{
              width: '100%',
              paddingVertical: 14,
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              elevation: 8,
              backgroundColor: COLORS.primary,
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 16,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              paddingVertical: 14,
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: 16,
              }}>
              Or Continue with
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 10,
            marginBottom: 40,
          }}>
          <LoginWithIcon
            iconName="logo-google"
            onPress={() => console.log('google')}
            buttonTittle="Google"
          />
          <LoginWithIcon
            iconName="logo-facebook"
            onPress={() => console.log('facebook')}
            buttonTittle="Facebook"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SignIn')}
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, fontWeight: 400, color: COLORS.black}}>
            Already a User?
          </Text>
          <Text style={{color: COLORS.primary}}>Sign In Now</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: COLORS.transparent,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
