import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AnimatedLottie, ResizeLottie} from '@screens/single';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Lottie1" component={AnimatedLottie} />
      <Tab.Screen name="Lottie2" component={ResizeLottie} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
