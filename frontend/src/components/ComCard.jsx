import React from "react";

const ComCard = () => {
  return (
    <div className="mx-auto mt-10 w-full max-w-md space-y-4">
      <div className="rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-lg">
        <h4 className="mb-2 text-lg font-bold text-blue-400">
          Question technique
        </h4>
        <p className="leading-relaxed text-gray-300">
          Est-ce que tu as utilisé Tailwind CSS pour tout le design ou il y a du
          CSS perso ?
        </p>
      </div>

      <div className="rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-lg">
        <h4 className="mb-2 text-lg font-bold text-blue-400">
          Excellent travail
        </h4>
        <p className="leading-relaxed text-gray-300">
          Le rendu final est top. Les contrastes sont bien gérés, c'est très
          lisible.
        </p>
      </div>
      <div className="rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-lg">
        <h4 className="mb-2 text-lg font-bold text-blue-400">
          Excellent travail
        </h4>
        <p className="leading-relaxed text-gray-300">
          Le rendu final est top. Les contrastes sont bien gérés, c'est très
          lisible.
        </p>
      </div>
    </div>
  );
};

export default ComCard;
