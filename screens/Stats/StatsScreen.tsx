import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

const StatsSccreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Stats Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      />
    </View>


  )
}

export default StatsSccreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});