import React from 'react';
import {FullScreen} from '@components/atoms';
import {Text, View} from 'react-native';

const TagList = () => {
  return (
    <FullScreen hasNotch={false}>
      <View>
        <Text>tag list</Text>
      </View>
    </FullScreen>
  );
};

export default TagList;
