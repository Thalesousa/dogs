import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { useForm } from "../../Hooks/useForm";
import { UserContext } from "../../Context/UserContext";

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
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
