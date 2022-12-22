import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { useGetAgeDifference } from "./hooks/useGetAgeDifference";

const Container = styled.View`
  display: flex;
  /* margin: 0px 10px 15px 0 ;   */
  borderBottomWidth: 1px;
  padding: 10px;
`;

const Avatar = styled.View`
	img {
		vertical-align: middle;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	margin-right:10px;
`

const Name = styled.Text`
  font-size: 18px;
  font-weight:500;
  /* line-height:30px; */
  /* color:${(props: { color: any; }) => props.color}; */
`

const SubText = styled.Text`
  font-size: 13px;
  line-height: 20px;
  color: #757575;
  /* color:${(props: { color: any; }) => props.color}; */
`


const PersonCard = (props: { person: any; }) => {
  const { person } = props;
  const { name, meetingOrigin, talkingTime, physicalAltercations, timeLine } = person;

  const calculateLength = () => {
    return useGetAgeDifference(timeLine && timeLine[0])
  }    

  const firstName = name.split(" ")[0]
  return (
    <Container>
      {/* <Avatar>	 */}
						{/* <Image source={require(`../../assets/navIcons/profile.png`)} name={name}/> */}
			{/* </Avatar> */}
      <Name>{name}</Name>
      <SubText>{calculateLength()}</SubText>
    </Container>
  );
};

export default PersonCard;
