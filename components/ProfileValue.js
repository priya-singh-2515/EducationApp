import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import {COLORS, FONTS, SIZES, icons} from '../constants';

const ProfileValue = ({icon, label, value, onPress, appTheme}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        // justifyContent: 'space-between',
      }}
      omPress={onPress}>

      {/* Icon */}
      <View
        style={{
          // flexDirection: 'row',
          width: 40,
          height: 40,
          alignItems: 'center',
          // justifyContent: 'space-between',
          borderRadius: 20,
        //   backgroundColor: COLORS.black,
        backgroundColor: appTheme?.backgroundColor3
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
        // numberOfLines={1}
          style={{
            color: appTheme?.textColor,
            ...FONTS.h3,
            // color: COLORS.gray40,
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
          tintColor: appTheme?.tintColor
        }}
      />
    </TouchableOpacity>
  );
};


function mapStateToProps(state){
  return{
    appTheme: state.appTheme
  }
}

function mapDispatchToProps(dispatch){
  return {
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProfileValue);

