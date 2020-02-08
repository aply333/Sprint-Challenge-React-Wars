import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin: 10px;
  background-color: rgba(211, 222, 248, 0.75);
  width: 30%;
`;
const NameDiv = styled.div`
  width: 30%;
  background-color: rgba(85, 127, 226, 0.75);
`;

const FilmDiv = styled.div`
  width: 30%;
  background-color: rgba(226, 210, 85, 0.75);
  margin-left: 10px;
`;

const CharacterCard = ({ swapiData }) => {
  return (
    <>
      <NameDiv>
        <h1>{swapiData.name}</h1>
      </NameDiv>
      <Card>
        <p>Born:{swapiData.birth_year}</p>
        <p>Gender:{swapiData.gender}</p>
        <p>Height:{swapiData.height}cm</p>
      </Card>
      {/* <FilmDiv>
        <ul>
          {swapiData.films.map(film => (
            <li>{film}</li>
          ))}
        </ul>
      </FilmDiv> */}
    </>
  );
};

export default CharacterCard;
