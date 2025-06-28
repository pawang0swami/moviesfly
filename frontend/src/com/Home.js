import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
const [da, setdata] = useState([]);
const nav=useNavigate()

  const getp = async () => {
    const res = await axios.get("http://localhost:4010/data");
    setdata(res.data);
  };


  const abc =(id)=>{
    nav("/movie/"+id)
  }

  const asd=(id)=>{
   nav("/edit/"+id)
  }

  useEffect(() => {
    getp();
  }, []);

  return (
    <div  className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🎬 Movie Zone</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {da.map((d, i) => {
          return (
            <div
           
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden w-full sm:w-[300px] hover:scale-105 transition-all"
            >
              <img
               onClick={() => abc(d._id)}
                src={d.imageUrl}
                alt={d.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{d.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{d.description}</p>
                <div className="flex justify-between">
                <button  onClick={() => abc(d._id)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                  Watch Now
                </button>
                 <button onClick={() => asd(d._id)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                  Edit 
                </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
