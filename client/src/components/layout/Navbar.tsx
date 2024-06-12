// import React from 'react'

import { useNavigate } from "react-router-dom";
import ProfileInfo from "../reusable/ProfileInfo";
import SearchBar from "../reusable/SearchBar";
import { useState } from "react";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const onLogout = () => {
        navigate("/login");
    }

    const handleSearch = () => {

    }

    const onClearSearch = () => {
        setSearchQuery("");
    }

    return (
        <div className="text-black flex justify-between bg-white border-b-[1px] shadow-sm w-screen overflow-x-hidden mb-2 px-2 sm:px-6 md:px-12 lg:px-20 items-center">
            <p className="text-xl font-bold py-5 dot ">Note</p>
            <SearchBar 
            onClearSearch={onClearSearch}
             handleSearch={handleSearch} 
             value={searchQuery} 
             onChange={(e) => setSearchQuery(e.target.value)} />
            <ProfileInfo onLogout={onLogout} />
        </div>
    )
}

export default Navbar