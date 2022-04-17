import { useState } from "react";
import { AuthUser } from "../../types/User.types";

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Trung",
      email: "trung170324@gmail.com",
    });
  };

  const handleLogout = () => {
    // setUser({});
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogin}>Logout</button>
      <div>User name is {user.name}</div>
      <div>Email is {user.email}</div>
    </div>
  );
};
