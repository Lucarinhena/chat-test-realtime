import React, { useRef } from "react";
import io from "socket.io-client";
import style from "./Join.module.css";
import { Input, Button } from "@mui/material";

export default function Join({ setChatVisibility, setSocket }) {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim()) return;
    const socket = await io.connect("http://localhost:3005");
    socket.emit("set_username", username);
    setSocket(socket);
    setChatVisibility(true);
  };

  return (
    <div>
        <img src="" alt="" />
      <h1>EnterNess Chat</h1>
      <div className={style["join-container"]}>
        <h2>Junte-se ao Bate-papo!!</h2>
        <Input inputRef={usernameRef} placeholder="Nome de usuário" />
        <Button
        className="btn-join"
          sx={{ mt: 2 }}
          onClick={() => handleSubmit()}
          variant="contained"
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}
