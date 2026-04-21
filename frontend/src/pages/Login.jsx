import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
        Connexion
      </h2>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ton@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <input
            type="password"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <div>
          <h1 className="text-center font-medium text-red-600"></h1>
        </div>

        <Link to={"/comment"}>
          <button
            type="submit"
            className="mt-3 w-full cursor-pointer rounded-md bg-gray-900 py-3 font-bold text-white transition-colors hover:bg-black"
          >
            Connexion
          </button>
        </Link>
        <p className="mt-3 text-center">
          Pas de compte ?{" "}
          <Link to={"/register"}>
            <span className="cursor-pointer font-medium text-red-600">
              Inscrirez-vous
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
