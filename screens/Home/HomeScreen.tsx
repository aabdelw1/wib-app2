import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
import ListScreen from "./ListScreen";
import { AppContext } from "../../context/AppContext";

export default function HomeScreen() {
  return (
    <AppContext.Consumer>
      {
        ({
          email,
          password,
          firstName,
          lastName,
          gender,
          doa,
          groups,
          flames,
        }) => (
          // <SafeAreaView>
          <ListScreen flames={flames} />
        )
        // </SafeAreaView>
      }
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
