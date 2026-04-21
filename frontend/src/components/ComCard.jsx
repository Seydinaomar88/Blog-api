// import React, { useEffect, useState } from "react";
// import apiClient from "../api/apiClient";

// const ComCard = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getPosts = async () => {
//       setLoading(true);
//       try {
//         const response = await apiClient.get("/posts/");
//         setData(response.data);
//         console.log(response.data);
//       } catch (error) {
//         setError(error);
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getPosts();
//   }, [data]);

//   if (loading) {
//     return <h1>Chargement en cours...</h1>;
//   }

//   if (error) {
//     return <h1>Une erreur est survenue</h1>;
//   }

//   return (
//     <div className="mx-auto mt-10 w-full max-w-md space-y-4">
//       {data?.map((post, index) => (
//         <div
//           key={index}
//           className="rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-lg"
//         >
//           <h4 className="mb-2 text-lg font-bold text-blue-400">{post.title}</h4>
//           <p className="leading-relaxed text-gray-300">{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ComCard;
