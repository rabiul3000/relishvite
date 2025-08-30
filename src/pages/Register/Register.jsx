import React, { useContext } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { errorAlert } from "../../utils/alerts";
import { AuthContext } from "../../context/Contexts";

const Register = () => {
  const { registerUserWithEmail, setUser, user } = useContext(AuthContext);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    if (!name || !email || !password) {
      errorAlert("Field is empty");
      return;
    }

    try {
      const { userCredential } = await registerUserWithEmail(email, password);
      setUser(userCredential?.user);
    } catch (error) {
      error.code === 'auth/email-already-in-use' ? errorAlert('User already registered'):errorAlert(error.message)
    }

   
  };

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
      {/* Flowing tomato sauce triangle */}
      <div className="absolute inset-0 z-0">
        <div className="sauce-flow"></div>
      </div>

      {/* Header */}
      <header className="text-center mb-8 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Relish<span className="text-rose-600">Go</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium mt-2">Register</h2>
      </header>

      {/* Form */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8 relative z-10">
        <form className="flex flex-col gap-5" onSubmit={handleRegisterSubmit}>
          <input
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
            type="text"
            placeholder="Type your Name"
            name="name"
          />
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
            value="Register"
          />
          <button className=" flex justify-center items-center p-3 rounded text-white bg-blue-500 hover:bg-blue-700 cursor-pointer transition duration-200">
            <FcGoogle size={20} /> Register With Google
          </button>

          <p className="text-center text-sm text-gray-600">
            Already member?{" "}
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
