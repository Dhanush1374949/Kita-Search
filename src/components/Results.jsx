import React from "react";
import { useResultContext } from "../context/ResultContextProvider";
import { Loading } from "./Loading";
export const Results = () => {
const { result, isLoading } = useResultContext();

 


  if (isLoading) return <div className="text-center mt-10"><Loading/></div>

  if (!result || result.length === 0) return <div className="text-center mt-10">No results found.</div>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {result.map((item, index) => (
        <div key={index} className="border p-3 rounded shadow hover:shadow-lg transition">
          {item.image && <img src={item.image?.url} alt={item.title} className="w-full h-48 object-cover rounded" />}
          <a href={item.url} target="_blank" rel="noreferrer" className="text-green-600 cursor-pointer hover:underline">
            {item.title}
          </a>
          <p className="text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
