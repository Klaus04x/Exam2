import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box = ({ backgroundColor, text }) => {
  return (
    <View style={[styles.box, { backgroundColor }]}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Box backgroundColor='rgb(142,220,199)' text="Hello, world" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 415,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default App;