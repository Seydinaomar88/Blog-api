import React, { useState } from "react";
import toast from "react-hot-toast";
import apiClient from "../api/apiClient";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const FormComment = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);
  const { data, loading, error } = useFetch("/posts/", refresh);
  const [userData, setUserData] = useState({ title: "", content: "" });

  const handleComment = async (e) => {
    e.preventDefault();

    if (!userData.title || !userData.content) {
      toast.error("Tous les champs sont obligatoires");
      return;
    }

    try {
      const response = await apiClient.post("/posts/", userData);
      console.log("ddd", response.data);
      setRefresh((prev) => prev + 1);
      setUserData({ title: "", content: "" });
      toast.success("post ajouté avec succès !");
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandle = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) {
    return <h1>Chargement en cours...</h1>;
  }

  if (error) {
    return <h1>Une erreur est survenue</h1>;
  }

  return (
    <>
      <div className="mx-auto max-w-4xl rounded-2xl p-8 shadow-2xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Ajouter un commentaire
          </h2>
          <LogOut onClick={logoutHandle} />
        </div>

        <form onSubmit={handleComment}>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              value={userData.title}
              onChange={(e) =>
                setUserData({ ...userData, title: e.target.value })
              }
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Titre du commentaire"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <textarea
              value={userData.comment}
              onChange={(e) =>
                setUserData({ ...userData, content: e.target.value })
              }
              placeholder="Titre du commentaire"
              rows="4"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-3 w-full cursor-pointer rounded-md bg-gray-900 py-3 font-bold text-white transition-colors hover:bg-black"
          >
            Ajouter
          </button>
        </form>
      </div>
      <div className="mx-auto mt-10 w-full max-w-md space-y-4">
        {data?.map((post, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-lg"
          >
            <h4 className="mb-2 text-lg font-bold text-blue-400">
              {post.title}
            </h4>
            <p className="leading-relaxed text-gray-300">{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FormComment;
