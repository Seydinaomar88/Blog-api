import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "../api/apiClient";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      setError("Tous les champs sont obligatoires");
      return;
    }

    try {
      const response = await apiClient.post("/auth/login", userData);

      console.log("login : ", response.data);

      toast.success("Connexion réussie");

      localStorage.setItem("token", response.data.token);

      navigate("/Comment");
    } catch (error) {
      console.log(error);
      setError("Email ou mot de passe incorrect");
      toast.error("Erreur de connexion");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="mx-auto mt-20 max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
        Connexion
      </h2>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label>Email</label>
          <input
            placeholder="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            type="email"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label>Mot de passe</label>
          <input
            placeholder="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            type="password"
            className="mt-1 w-full rounded-md border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <h1 className="text-center text-red-600">{error}</h1>}

        <button type="submit" className="w-full bg-black p-3 text-white">
          Connexion
        </button>

        <p className="text-center" />

        <p className="mt-3 text-center">
          Pas de compte ?{" "}
          <Link to="/register" className="text-red-600">
            Inscrivez-vous
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
