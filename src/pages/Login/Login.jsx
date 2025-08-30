import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/Contexts";
import { errorAlert } from "../../utils/alerts";

const Login = () => {
  const { user, loginUSerWithEmail, setUser } = useContext(AuthContext);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const loginInfo = Object.fromEntries(formData.entries());

    try {
      const { user } = await loginUSerWithEmail(loginInfo);
      setUser(user);
    } catch (error) {
      errorAlert(error.message);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
      {/* Header */}
      <header className="text-center mb-8 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Relish<span className="text-rose-600">Go</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium mt-2">Login</h2>
      </header>

      {/* Form */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8 relative z-10">
        <form className="flex flex-col gap-5" onSubmit={handleLoginSubmit}>
          <input
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
            type="email"
            placeholder="Type your Email"
            name="email"
          />
          <input
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
            className="p-3 rounded text-white bg-rose-600 hover:bg-rose-700 cursor-pointer transition duration-200"
            type="submit"
            value="Login"
          />
          <p className="text-center text-sm text-gray-600">
            Not registered yet?{" "}
            <Link to="/auth/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
