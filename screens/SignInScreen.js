import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import {ImageBackground} from 'react-native';
import LoginWithIcon from '../components/LoginWithIcon';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});

  const getErrors = (email, password) => {
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

    return errors;
  };

  const handelRegister = () => {
    const errors = getErrors(email, password);

    if (Object.keys(errors).length > 0) {
      setShowError(true);
      setErrors(showError && errors);
      console.log(errors);
    } else {
      setErrors({});
      setShowError(false);
      console.log('Signed In');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
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
          Login
        </Text>
        <View
          style={{
            // width: '100%',
            marginHorizontal: 20,
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
            <View
              style={{
                width: '100%',
                borderRadius: 10,
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor={COLORS.gray50}
                secureTextEntry={hidePassword ? true : false}
                keyboardType="visible-password"
                value={password}
                onChangeText={e => setPassword(e)}
                maxLength={8}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  fontSize: 14,
                  flex: 1,
                  color: COLORS.black,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                }}
              />
              {password.length > 0 && (
                <TouchableOpacity
                  onPress={() => setHidePassword(!hidePassword)}
                  activeOpacity={0.9}
                  style={{
                    paddingHorizontal: 10,
                    paddingRight: 14,
                  }}>
                  <Ionicons
                    name={hidePassword ? 'eye-sharp' : 'eye-off-sharp'}
                    style={{
                      fontSize: 20,
                      color: COLORS.black,
                    }}
                  />
                </TouchableOpacity>
              )}
              {errors.password && (
                <Text style={{fontSize: 14, color: 'red', marginTop: 4}}>
                  {errors.password}
                </Text>
              )}
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('WalkthroughScreen')}
            activeOpacity={0.8}
            style={{
              width: '60%',
              paddingVertical: 14,
              paddingHorizontal: 20,
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              elevation: 8,
              backgroundColor: COLORS.primary,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 16,
              }}>
              Sign In
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
              Or login with
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
          onPress={() => navigation.navigate('SignUp')}
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, fontWeight: 400, color: COLORS.black}}>
            New User?
          </Text>
          <Text style={{color: COLORS.primary}}>Sign Up Now</Text>
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

export default SignInScreen;
