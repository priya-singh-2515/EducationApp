import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../constants/theme';
const WalkthroughScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      <View
        style={{
          width: '100%',
          padding: 20,
          marginTop: 40,
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 45,
            color: 'black',
            fontWeight: '800',
            letterSpacing: 1,
            marginBottom: 20,
          }}>
          Explore Online Courses
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'gray',
            fontWeight: '800',
            letterSpacing: 1,
          }}>
          All types of educational & professional courses available Online.
        </Text>
      </View>

      <Image
        source={require('../assets/images/work.png')}
        style={{height: '50%', aspectRatio: 1 / 1}}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}
        style={{
          backgroundColor: COLORS.primary,
          height: 60,
          width: 120,
          borderRadius: 50,
          marginTop: 20,
          alignSelf: 'flex-end',
          marginRight: -25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WalkthroughScreen;
