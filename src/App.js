import React, { useEffect } from 'react';
import './App.css';
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import dataUsers from "./data/usuarios.json";

function App() {
    useEffect(() => {
        //cargo por primera vez en el LocalStorage el json de usuarios.
        const localStorageItem = JSON.parse(localStorage.getItem("datosUsuarios"));
        //Valido que el objeto no se reinicie
        if(JSON.stringify(localStorageItem) === "null"){          
            localStorage.setItem("datosUsuarios", JSON.stringify(dataUsers));
        } 
    }, []);
    return (
        <div className="container_principal">
            <BrowserRouter>
                <main className="form-signin">
                    <Routes>
                        <Route path="/" exact element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/edit" element={<Update />} />
                        <Route path="/delete" element={<Delete />} />
                    </Routes>
                </main>

            </BrowserRouter>
        </div>
    );
}

export default App;
