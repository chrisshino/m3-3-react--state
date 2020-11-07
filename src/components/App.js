import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
import Deadman from "./DeadMan";
import DeadLetters from "./DeadLetters";
import TheWord from "./TheWord";
import Keyboard from "./Keyboard";
import words from "../data/words.json";
import GameOverModal from "./GameOverModal";

import { colors, contentWidth } from "./GlobalStyles";

const initialGameState = { started: false, over: false, win: false };
const App = () => {
  const [game, setGame] = useState(initialGameState);
  const [word, setWord] = useState({ str: "" });
  const handleStart = () => {
    setGame({ ...game, started: !game.started });
    {
      !word.str && getNewWord();
    }
  };
  const getNewWord = () => {
    const randomWord = Math.floor(Math.random() * words.length);
    setWord({ str: words[randomWord] });
  };
  let buttonText = "Start";
  if (game.over || game.win === true) {
    buttonText = "Clear";
  } else if (game.started === true) {
    buttonText = "Continue";
  }
  return (
    <Wrapper>
      {/* <GameOverModal /> */}
      <Header />
      <Nav>
        <Button onClickFunc={handleStart}>{buttonText}</Button>
        <Button>btn 2</Button>
      </Nav>
      {game.started && (
        <>
          <Container>
            <Deadman />
            <RightColumn>
              <DeadLetters />
              <TheWord />
            </RightColumn>
          </Container>
          <Keyboard />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  padding: 0 0 64px 0;
`;
const Nav = styled.div`
  max-width: ${contentWidth};
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${contentWidth};
  min-width: 320px;
  position: relative;
  padding: 20px 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default App;
