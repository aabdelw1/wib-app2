import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import PersonCard from "./PersonCard";

const Container = styled.View`
  display: flex;
  margin: 15px 10px 0;  
`;

const People = (props) => {
  const { data } = props;
  const { flames } = data;
  return (
    <Container>
        {flames.map((i, key) => {
          return <PersonCard person={i} key={key}/>;
        })}
    </Container>
  );
};

export default People;
