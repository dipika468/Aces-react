import { useState } from "react"
import axios from "axios"
import NavBar from "./NavBar"
import { useNavigate } from "react-router-dom"

function Form(){
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [subtitle,setSubtitle] = useState("")
    const [Description,setDescription] = useState("")
    const [image, setImage] = useState("")

    


    async function sentDataToBackend(e){
        e.preventDefault()
    const response =  await axios.post("https://687af378abb83744b7ee487b.mockapi.io/Blogss",{
            title : title, 
            subtitle : subtitle, 
            description : Description, 
            image : image
        })
    if(response.status == 201){
        navigate("/")
    }else{
        alert("Something went wrong")
    }
    }
    return(
       <>
       <NavBar />
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold">Blog Creation</div>
  <div className="mt-3 text-center text-4xl font-bold">Create a Blog</div>
  <form onSubmit={sentDataToBackend} className="p-8">
    <div className="flex gap-4">
      <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter a title" onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter a subtitle" onChange={(e)=>setSubtitle(e.target.value)} />
    </div>
    <input type="text" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter a image URL" onChange={(e)=>setImage(e.target.value)} />
    <div className>
      <textarea onChange={(e)=>setDescription(e.target.value)} name="description" id="text" cols={30} rows={10} className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" defaultValue={"Enter Description"} />
    </div>
    <div className="text-center">
      <button type="submit" className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Create Blog</button>
    </div>
  </form>
</div>

       </>

    )
}

export default Form