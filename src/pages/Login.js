import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Navbar />
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded-md"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 rounded-md"
          />
          <Link
            className="block text-center w-full mt-4 text-gray-50 text-lg px-3 py-2 rounded-md bg-sky-600 hover:bg-sky-700"
            to="/"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
