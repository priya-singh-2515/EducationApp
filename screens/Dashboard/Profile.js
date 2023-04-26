import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {toggleTheme} from '../../stores/themeActions';

import {
  IconButton,
  TextButton,
  LineDivider,
  ProgressBar,
  ProfileValue,
  ProfileRadioButton,
} from '../../components';
import {COLORS, FONTS, SIZES, icons, images} from '../../constants';
// import appTheme from '../../constants/theme';

const Profile = ({appTheme, toggleTheme}) => {
  const [newCourseNotification, setNewCourseNotification] =
    React.useState(false);
  const [studyReminder, setStudyReminder] = React.useState(false);

  // Handler

  function toggleThemeHandler() {
    if (appTheme?.name === 'light') {
      toggleTheme('dark');
    } else {
      toggleTheme('light');
    }
  }

  // Render

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: appTheme?.textColor,
            ...FONTS.h1,
            // color: COLORS.black,
          }}>
          Profile
        </Text>

        <IconButton
          icon={icons.sun}
          iconStyle={{
            // tintColor: COLORS.black,
            tintColor: appTheme?.tintColor,
          }}
          onPress={() => toggleThemeHandler()}
        />
      </View>
    );
  }

  function renderProfileCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 20,
          borderRadius: SIZES.radius,
          // backgroundColor: COLORS.primary3,
          backgroundColor: appTheme?.backgroundColor2,
        }}>
        {/* Profile Image */}
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
          }}>
          <Image
            source={images.profile}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 40,
              borderWidth: 1,
              borderColor: COLORS.white,
            }}
          />

          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                marginBottom: -15,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                backgroundColor: COLORS.primary,
              }}>
              <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Details */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}>
            Priya Singh
          </Text>

          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body4,
            }}>
            Software Developer
          </Text>

          <ProgressBar
            progress={58}
            containerStyle={{
              marginTop: SIZES.radius,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                flex: 1,
                color: COLORS.white,
                ...FONTS.body4,
              }}>
              Overall Progress
            </Text>

            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4,
              }}>
              {' '}
              60%{' '}
            </Text>
          </View>

          {/* Member */}
          <TextButton
            label="+ Become Member"
            contentContainerStyle={{
              height: 35,
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.radius,
              borderRadius: 20,
              // backgroundColor: COLORS.white,
              backgroundColor: appTheme?.backgroundColor4,
            }}
            labelStyle={{
              // color: COLORS.primary,
              color: appTheme?.textColor2,
            }}
          />
        </View>
      </View>
    );
  }

  function renderProfileSection1() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue icon={icons.profile} label="Name" value="Priya Singh" />

        <LineDivider />

        <ProfileValue
          icon={icons.email}
          label="Email"
          value="Priyasingh20011511@gmail.com"
          style={{
            color: COLORS.black,
          }}
        />

        <LineDivider />

        <ProfileValue
          icon={icons.password}
          label="Password"
          value="Updated 1 month ago"
        />

        <LineDivider />

        <ProfileValue
          icon={icons.call}
          label="Contact Number"
          value="8601404015"
        />
      </View>
    );
  }

  function renderProfileSection2() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue icon={icons.star_1} value="Pages" />

        <LineDivider />

        <ProfileRadioButton
          icon={icons.new_icon}
          label="New Course Notifications"
          isSelected={newCourseNotification}
          onPress={() => {
            setNewCourseNotification(!newCourseNotification);
          }}
        />

        <LineDivider />

        <ProfileRadioButton
          icon={icons.reminder}
          label="Study Reminder"
          isSelected={studyReminder}
          onPress={() => {
            setStudyReminder(!studyReminder);
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: COLORS.white,
        backgroundColor: appTheme?.backgroundColor1,
      }}>
      {/* Header */}
      {renderHeader()}

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 150,
        }}>
        {/* Profile Card  */}
        {renderProfileCard()}

        {/* Profile Section 1  */}
        {renderProfileSection1()}

        {/* Profile Section 2  */}
        {renderProfileSection2()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSectionContainer: {
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray20,
  },
});

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: themeType => {
      return dispatch(toggleTheme(themeType));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
