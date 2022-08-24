import React, { useState } from "react";
import { Link } from "react-router-dom";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })

    const json = await response.json()

    console.log(json)
  }

  return (
    <section onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
