import React, { useState } from 'react'
import axios from 'axios'

const Add = () => {

    const [title,settitle]=useState()
    const [imageUrl,setimageUrl]=useState()
    const [description,setdescription]=useState()
    const [movielink,setmovielink]=useState()

  const add=async()=>{
    console.log (title)
     await axios.post('http://localhost:4010/data', {title,imageUrl,description,movielink});
  }

  return (
    <div> <div>
      <div className="bg-slate-900 h-screen">
        <form className="max-w-sm mx-auto pt-2 pb-7 ">
          <h1 className="dark:text-white mb-20 text-center text-3xl ">
            Add Movie
          </h1>

          <div className="mb-5">
            <label
              for="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Movie name
            </label>
            <input
              type="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter movie name"
              required
              onChange={(e) => settitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="mb-5">
            <label
              for="imageUrl"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                 imageUrl
            </label>
            <input
              type="imageUrl"
              id="imageUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter movie imageUrl"
              required
              onChange={(e) => setimageUrl(e.target.value)}
              value={imageUrl}
            />
          </div>
          <div className="mb-5">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
description
            </label>
            <input
              type="description"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter movie description (50 words)"
              required
              onChange={(e) => setdescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="mb-5">
            <label
              for="movie link"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              movie link
            </label>
            <input
              type="movie link"
              id="movie link"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" (youtube <iframe> src link only)"
              required
              onChange={(e) => setmovielink(e.target.value)}
              value={movielink}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            onClick={add}
          >
            Submit
          </button>
        </form>
      </div>
    </div></div>
  )
}

export default Add
