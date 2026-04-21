import React, { useState } from "react";
import toast from "react-hot-toast";
import apiClient from "../api/apiClient";

const FormComment = () => {
  const [userData, setUserData] = useState({ title: "", comment: "" });

  const handleComment = async (e) => {
    e.preventDefault();

    if (!userData.title || !userData.comment) {
      toast.error("Tous les champs sont obligatoires");
      return;
    }

    try {
      const response = await apiClient.post("/posts/");
      console.log("ddd", response.data);
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-4xl rounded-2xl p-8 shadow-2xl">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
        Ajouter un commentaire
      </h2>

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
              setUserData({ ...userData, comment: e.target.value })
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
  );
};

export default FormComment;
