import { FormEvent, useState } from "react";
// import { authService } from "fbase";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitAuth = (event: FormEvent) => {
    event.preventDefault();
  };
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }
  return (
    <div>
      <form onSubmit={submitAuth}>
        <input
          name="email"
          type="text"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
}

export default AuthForm;
