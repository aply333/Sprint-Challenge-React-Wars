import React, { useState } from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const CardContainer = styled.div`
    height: 85vh;
    width:85vw;
    display:flex;
    flex-flow: column wrap;
    margin:auto auto;
`;

const Characters = ({ swapiData }) => {
  console.log("insideChar", swapiData);
  return (
    <CardContainer>
      {swapiData.map(character => (
        <CharacterCard swapiData={character} />
      ))}
    </CardContainer>
  );
};

export default Characters;
