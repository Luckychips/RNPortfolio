import React from 'react';
import {FullScreen} from '@components/atoms';
import {Text, View} from 'react-native';

const ChartList = () => {
  return (
    <FullScreen hasNotch={false}>
      <View>
        <Text>chart list</Text>
      </View>
    </FullScreen>
  );
};

export default ChartList;
