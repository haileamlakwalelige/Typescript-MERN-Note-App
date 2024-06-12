// import React from 'react'

import { useState } from "react"
import TagInput from "./TagInput"
import { MdClose } from "react-icons/md";

interface AddNotesProps {
    onClose: () => void;
    type: string;
    noteData: string | null;
}

const AddNotes = ({onClose, type, noteData}:AddNotesProps) => {
    const [tags, setTags] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [error, setError]=useState<string>("");


    //add notes
    const addNotes = async () => {}

    //edit notes
    const editNote = async () => {}

    const handleNotes =()=>{
        if(!title){
            setError("Please enter the title"!)
            return;
        }
    
        if(!content){
            setError("Please enter the content"!)
            return;
        }
    
        setError("");
    
        if(type === 'edit'){
            editNote();
        }else{
            addNotes()
        }
    }
   
    return (
        <div>
            <div className=" flex justify-end items-end text-end rounded-full ">
            <button
              onClick={onClose}
              className="ml-1 text-red-500 p-1 rounded-full border-2 border-red-600 hover:bg-red-500 hover:text-white"
            >
              <MdClose className="" size={20}/>
            </button>
            </div>
            <div className="flex flex-col justify-start items-start">
                <label className="text-white text-center my-2 rounded-md border-lime-300 px-5 py-1 bg-primary">Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Your title goes here." className="text-xl text-slate-950 w-full md:min-w-[350px] lg:min-w-[400px] max-w-[400px] outline-none border-primary border-[2px] rounded px-2 py-0.5" />
            </div>


            <div className="flex flex-col justify-start items-start border-t-[1px] border-gray-400 w-full my-3">
                <label className="text-white text-center my-2 rounded-md border-lime-300 px-5 py-1 bg-primary">Content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Your content goes here." className="text-xl text-slate-950 max-h-[200px] min-w-[250px] md:min-w-[350px] max-w-[400px] lg:min-w-[400px] w-fit outline-none border-primary border-[2px] rounded px-2 py-0.5" rows={10} />
            </div>

            <div>
                <label className="text-white text-center my-2 rounded-md border-lime-300 px-5 py-1 bg-primary">TAGS</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>

            {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

            <button onClick={handleNotes} type="button" className="bg-blue-600 font-medium mt-5 p-3 w-full text-white rounded-md">Add</button>
        </div>
    )
}

export default AddNotes