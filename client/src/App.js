import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useUserContext } from "./context/user_context";
import { useEffect, useState } from "react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [id, setId] = useState("");

  const sendUserId = async () => {
    const { sub } = user;
    await axios
      .post("http://localhost:4000/user", { sub })
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    sendUserId();
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Logout />
      </div>
    );
  }

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
