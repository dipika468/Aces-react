import axios from "axios";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function Single(){
    const data = useParams()
    const [blog,setBlog] = useState({})
    async function fetchSingleBlog(){
        const response =   await axios.get("https://687af378abb83744b7ee487b.mockapi.io/Blogss/" + data.id)
        if(response.status == 200){
            setBlog(response.data)
        }else{
            alert("Something went wrong")
        }
    }
    useEffect(()=>{
        fetchSingleBlog()
    },[])
    const navigate = useNavigate()
    async function deleteBlog(){
        const response = await axios.delete("https://687af378abb83744b7ee487b.mockapi.io/Blogss/"+data.id)
        console.log(response);
        if(response.status == 200){
            navigate("/")
        }else{
            alert("something went wrong ")
        }
    }
    return(
        <>
        <Navbar />
        <div>
            <img src={blog.image} alt="" />
            <h1>{blog.title} </h1>
            <h3>{blog.subtitle}</h3>
            <p>{blog.description}</p>
            <Link to={'/edit/' + blog.id}> <button className="bg-blue-500 text-white">Edit Me </button></Link>
            <button onClick={deleteBlog} className="bg-red-500 text-white">Delete Me </button>
        </div>
        </>
    
    )
}


export default Single