import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabs} from '@screens/navigator';
import {ChartList, TagList} from '@screens/single';

const Stack = createStackNavigator();

const StackList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ChartList" component={ChartList} />
      <Stack.Screen name="TagList" component={TagList} />
    </Stack.Navigator>
  );
};

export default StackList;
