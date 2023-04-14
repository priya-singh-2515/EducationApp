import React from "react";
import {
    TouchableOpacity,
    Text,
    View,
    ImageBackground,
    Image,
    StyleSheet
} from 'react-native';
import { SharedElement } from "react-navigation-shared-element";

import {COLORS,FONTS,SIZES} from "../constants";

const CategoryCard=({category,containerStyle, onPress, sharedElementPrefix })=>{
    return(
        <TouchableOpacity
        style={{
            height: 150,
            width: 200,
            ...containerStyle
        }}
          onPress={onPress}
        >

        {/* Image background  */}
            <SharedElement
                id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
                style={[StyleSheet.absoluteFillObject]}
            >
                <Image
                  source={category?.thumbnail}
                  resizeMode="cover"
                  style={{
                    width:"100%",
                    height:"100%",
                    borderRadius:SIZES.radius
                  }}
                />
            </SharedElement>

            {/* <ImageBackground
                source={category?.thumbnail}
                resizeMode="cover"
                style={{
                    height: 150,
                    width: 200,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    justifyContent: 'flex-end',
                    ...containerStyle
                }}
                imageStyle={{
                    borderRadius:SIZES.radius
                }}>
                    <Text
                        style={{
                            color:COLORS.white,
                            ...FONTS.h2
                        }}
                    >
                        {category?.title}
                    
                    </Text>

            </ImageBackground> */}

            {/* Title */}

            <View
             style={{
                position: "absolute",
                bottom: 50,
                left: 5
             }}
             >
                <SharedElement
                  id={`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
                  style={[StyleSheet.absoluteFillObject]}
                >
                <Text
                   style={{
                    position:'absolute',
                    color:COLORS.white,
                    ...FONTS.h2
                   }}
                  >
                    {category?.title}
                </Text>
</SharedElement>
            </View>
        </TouchableOpacity>

    )
}

export default CategoryCard;