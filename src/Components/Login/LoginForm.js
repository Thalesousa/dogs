import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { useForm } from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) {
      getUser(token)
    }
  }, [])

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        localStorage.setItem("token", json.token);
        getUser(json.token);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <section onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form>
        <Input label="Usuário" type="text" name="username" {...username} />

        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
