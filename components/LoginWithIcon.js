import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';

const LoginWithIcon = ({iconName, onPress, buttonTittle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: '40%',
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: COLORS.transparent,
        borderWidth: 2,
        borderColor: COLORS.white,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Ionicons
        name={iconName}
        style={{fontSize: 26, color: COLORS.black, marginBottom: 4}}
      />
      <Text style={{fontSize: 1, color: COLORS.black, opacity: 0.4}}>
        {buttonTittle}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginWithIcon;
