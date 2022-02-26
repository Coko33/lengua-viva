import { useState } from "react";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    pasword: "",
  });

  return (
    <div>
      <form>
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
      </form>
    </div>
  );
}
