import React, { useState } from "react";
import toast from "react-hot-toast";
import apiClient from "../api/apiClient";
import { Eye, LogOut, SquarePen, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const FormComment = () => {
  const [dataPost, setDataPost] = useState(null);
  const [input, setInput] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const [update, setUpdate] = useState(null);
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

  const handleDelete = async (id) => {
    try {
      const response = await apiClient.delete(`/posts/${id}`);
      console.log("delete handler", response.data);
      toast.success("post supprimé");
      setRefresh((prev) => prev + 1);
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        toast.error("vous êtes pas autorisé a supprimé ce post");
      }
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await apiClient.put(`/posts/${id}/`, input);
      setUpdate(null);
      toast.success("modifié avec succès !");
      console.log(response.data);
      setRefresh((prev) => prev + 1);
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_BAD_REQUEST") {
        toast.error("vous êtes pas autorisé a modifié ce post");
      }
    }
  };

  const getById = async (id) => {
    document.getElementById("my_modal_1").showModal();
    try {
      const response = await apiClient.get(`/posts/${id}`);
      console.log("qweee : ", response.data);
      setDataPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
              value={userData.content}
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
          <>
            {update !== post._id ? (
              <div
                key={index}
                className="flex items-center justify-between rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-lg"
              >
                <div>
                  <h4 className="mb-2 text-lg font-bold text-blue-400">
                    {post.title}
                  </h4>
                  <p className="leading-relaxed text-gray-300">
                    {post.content}
                  </p>
                </div>
                <div className="flex gap-4 text-white">
                  <Eye
                    onClick={() => getById(post._id)}
                    size={27}
                    color="blue"
                    className="cursor-pointer"
                  />
                  <SquarePen
                    onClick={() => setUpdate(post._id)}
                    color="yellow"
                    className="cursor-pointer"
                  />
                  <Trash
                    color="red"
                    onClick={() => handleDelete(post._id)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex items-center justify-between rounded-2xl border border-gray-700 bg-gray-800 p-2 shadow-lg"
              >
                <div className="space-y-3">
                  <input
                    value={input.title}
                    onChange={(e) =>
                      setInput({ ...input, title: e.target.value })
                    }
                    type="text"
                    placeholder="title"
                    className="rounded-2xl border border-gray-600 p-1 pl-2 text-white outline-none"
                  />
                  <input
                    placeholder="content"
                    value={input.content}
                    onChange={(e) =>
                      setInput({ ...input, content: e.target.value })
                    }
                    type="text"
                    className="rounded-2xl border border-gray-600 p-1 pl-2 text-white outline-none"
                  />
                </div>
                <div className="flex gap-4 text-white">
                  <button
                    onClick={() => handleUpdate(post._id)}
                    className="cursor-pointer rounded-md bg-white p-1 text-black"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => setUpdate(null)}
                    className="cursor-pointer rounded-md bg-gray-400 p-1 text-white"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{dataPost?.author.name} !</h3>
          <p className="py-4">title : {dataPost?.title}</p>
          <p className="py-4">Content : {dataPost?.content}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default FormComment;
