import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../constants';

const ProfileValue = ({icon, label, value, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      omPress={onPress}>
      {/* Icon */}
      <View
        style={{
          flexDirection: 'row',
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 20,
        //   backgroundColor: COLORS.black,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.primary,
          }}
        />
      </View>
      {/* Label & Value */}

      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
        }}>
        {label !== '' && (
          <Text
            style={{
              color: COLORS.gray30,
              ...FONTS.body3,
            }}>
            {label}
          </Text>
        )}

        <Text
        numberOfLines={1}
          style={{
            ...FONTS.h3,
            color: COLORS.gray40,
          }}>
          {value}
        </Text>
      </View>
      {/* Icon */}
      <Image
        source={icons.right_arrow}
        style={{
          width: 15,
          height: 15,
        }}
      />
    </TouchableOpacity>
  );
};

export default ProfileValue;
