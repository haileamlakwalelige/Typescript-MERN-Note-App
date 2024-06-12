import React from 'react';
import { Link } from "react-router-dom";
import PasswordInput from "../../components/reusable/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!name){
      setError("Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if(!password){
      setError("Please enter a password.");
      return;
    }

    // Add additional logic to handle the login process, e.g., send data to the server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    setError("");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      
      <form onSubmit={handleLogin} className="flex flex-col border-[2px] border-gray-300 bg-white px-10 py-10 rounded">
        <h1 className="dot font-medium text-xl">Sign Up</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="input-box text-lg w-full bg-transparent border-[1.5px] px-5 py-3 rounded my-4 min-w-[300px] outline-none"
        />
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="input-box text-lg w-full bg-transparent border-[1.5px] px-5 py-3 rounded my-4 min-w-[300px] outline-none"
      />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {error && (
        <div className="text-red-600 text-xs mb-4">{error}</div>
      )}
        <button
          type="submit"
          className="btn-primary text-sm bg-primary w-full text-white p-2 rounded my-1 hover:bg-blue-600 mb-4"
        >
          Create an account.
        </button>
        <div className="flex gap-4 justify-center items-center">
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue-500 underline font-medium">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;