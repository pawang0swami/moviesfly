import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// const baseURL = import.meta.env.VITE_API_URL;
const baseURL = "https://moviesflyback-1.onrender.com";


const Movie = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleAddComment = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput("");
    }
  };

const [d,setd]=useState("")

// console.log(d)

const p=useParams()
  
const abc=async()=>{
 const a= await axios.get(`${baseURL}/movie/`+p.id)
 setd(a.data)
}
  useEffect(()=>{
    abc()

  })
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Movie Section */}
      {/* { d.map((data,i)=>{return( */}
         <div  className="bg-black text-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{d.title}</h1>
        <p className="text-gray-300 mb-6">
{d.description} 

        </p>
{/* <iframe  className="w-full rounded-xl mb-6" src=title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
     <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
{/* <iframe width="100%" height="100%" src={d.movielink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

  <iframe
    width="100%"
    height="100%"
    src={d.movielink}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  ></iframe>


</div>

      </div>
               {/* ) })}  */}
      {/* Comment Section */}
      <div className="bg-white mt-6 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a comment..."
            className="flex-grow p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
          >
            Post
          </button>
        </div>

        <div className="space-y-2">
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 rounded-xl text-sm text-gray-700"
              >
                {comment}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie; // Save this file as Movie.js
