import { useRef, useState } from "react";

const Authenticate = ({ setUserLoggedIn, setUserData, userData }) => {
  const [register, setRegister] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onAuthenticate = () => {
    if (register) {
      fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data === "User already exists") {
            return alert("User already exists");
          }
          if (data) {
            sessionStorage.setItem("userData", JSON.stringify(data));
            setUserData(data);
            setUserLoggedIn(true);
          }
        })
        .catch((err) => {
          if (err) {
            alert("Error: " + err);
          }
        });
    } else {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data === "invalid email") {
            return alert("invalid email");
          } else if (data === "invalid password") {
            return alert("invalid password");
          }
          if (data) {
            sessionStorage.setItem("userData", JSON.stringify(data));
            setUserData(data);
            setUserLoggedIn(true);
          }
        })
        .catch((err) => {
          if (err) {
            alert("Error: " + err);
          }
        });
    }
  };

  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="w-full max-w-sm rounded-md px-8 py-6 bg-slate-100">
          <h2
            className="text-2xl pb-2 mb-4"
            style={{ borderBottom: "1px #ddd solid" }}
          >
            Login
          </h2>
          {register && (
            <>
              <label htmlFor="displayName">Display Name</label>
              <input
                ref={nameRef}
                type="name"
                id="displayName"
                className="w-full px-3 py-2 rounded-md"
              />
            </>
          )}
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded-md"
          />
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="w-full px-3 py-2 rounded-md"
          />
          {register ? (
            <p
              className="text-sky-600 mt-4 cursor-pointer"
              onClick={() => setRegister(false)}
            >
              Already registered? Login instead!
            </p>
          ) : (
            <p
              className="text-sky-600 mt-4 cursor-pointer"
              onClick={() => setRegister(true)}
            >
              New here? Register Yourself
            </p>
          )}
          <button
            onClick={onAuthenticate}
            className="block text-center w-full mt-4 text-gray-50 text-lg px-3 py-2 rounded-md bg-sky-600 hover:bg-sky-700"
          >
            {register ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Authenticate;
