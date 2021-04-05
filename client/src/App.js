import "./App.css";
import Login from "./components/Login";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <div className="App">
        <Login />
      </div>
    </Auth0Provider>
  );
}

export default App;
