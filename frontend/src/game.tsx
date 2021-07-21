import React, { FC, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "./components";
import { AppState } from "./app_state";

const MSG_POLL_INTERVAL_MS = 2000;

export const Game: FC = () => {
  const { id } = useParams();
  const { currentGame, setCurrentGame, messages, setMessages } =
    useContext(AppState);

  const fetchMessages = () => {
    fetch(`/v1/games/${id}/messages`)
      .then((resp) => resp.json())
      .then(setMessages);
  };

  useEffect(() => {
    fetch(`/v1/games/${id}`)
      .then((resp) => resp.json())
      .then(setCurrentGame);
  }, []);

  useEffect(() => {
    const i = setInterval(fetchMessages, MSG_POLL_INTERVAL_MS);
    return () => clearInterval(i);
  }, []);

  return (
    <React.Fragment>
      <h2>Welcome to {currentGame.name}</h2>
      <Chat
        onMessageSent={fetchMessages}
        currentGame={currentGame}
        messages={messages}
      />
    </React.Fragment>
  );
};
