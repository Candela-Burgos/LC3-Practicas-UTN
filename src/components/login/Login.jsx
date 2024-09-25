import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useRef } from "react";

const Login = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handlerInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.includes("o") || inputValue.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
    setInput(inputValue);
  };

  const submitHandler = () => {
    if (input == "" || input.includes("o") || input.includes("O")) {
      alert("Usuario inválido para registrarse");
      inputRef.current.focus();
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <>
      <h1>Registrese:</h1>
      <Form>
        <Form.Label>Nombre:</Form.Label>
        <Form.Control
          ref={inputRef}
          onChange={handlerInputChange}
          type="text"
          value={input}
          placeholder="Nombre"
        />
        <Button className="mt-3" variant="primary" onClick={submitHandler}>
          Registrarse
        </Button>{" "}
      </Form>
      <p>Valor del input: {input}</p>
    </>
  );
};

export default Login;
