import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import People from "../../components/list/People";
import Header from "../../components/list/Header";
import { AppContext } from "../../context/AppContext";
import { SafeAreaView } from "react-native-safe-area-context";

const ListScreen = () => {
  return (
    <AppContext.Consumer>
      {(data) => (
        <SafeAreaView>
          <Header />
          <People data={data} />
        </SafeAreaView>
      )}
    </AppContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export default ListScreen;
