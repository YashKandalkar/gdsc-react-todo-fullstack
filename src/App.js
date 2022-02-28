import { Home, Authenticate, Navbar } from "./components";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const sessionStorageUserData = sessionStorage.getItem("userData");
    if (sessionStorageUserData) {
      setUserData(JSON.parse(sessionStorageUserData));
      setUserLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <>
        <Navbar
          userLoggedIn={userLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
        />
        {!userLoggedIn ? (
          <Authenticate
            userData={userData}
            setUserData={setUserData}
            setUserLoggedIn={setUserLoggedIn}
          />
        ) : (
          <Home userData={userData} />
        )}
      </>
    </div>
  );
}

export default App;
