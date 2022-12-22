import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native'
// import { SafeAreaView } from 'react-native-safe-area-context';


const Title = styled.Text`
  fontWeight: 600;
  fontSize: 20px;
`

const Container = styled.View`
  margin: 15px 10px 0;  

`


const Header = () => {
  return (
      <Container>
          <Title>People</Title>
      </Container>
  )
}


export default Header