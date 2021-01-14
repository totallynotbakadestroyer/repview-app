import AppBarTab from './AppBarTab.jsx';
import React from 'react';
import {View} from 'react-native';
import SignOutTab from './SignOutTab.jsx';

const LoggedInTabs = () => {
  return (
    <View style={{flexDirection: "row"}}>
    <AppBarTab text={"Create a review"} link={"/create"} />
    <AppBarTab text={"My reviews"} link={"/my-reviews"} />
    <SignOutTab />
    </View>
  )
}

export default LoggedInTabs;
