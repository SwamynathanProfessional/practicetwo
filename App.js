import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 1, backgroundColor: 'darkorange'}} />
      <View style={{flex: 1, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Flex;
