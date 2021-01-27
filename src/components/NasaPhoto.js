import React from 'react';
import { useState, useEffect } from 'react'; 
import NavBar from "./Navbar";

 export default function Nasaphoto() {
     const [photoData, setPhotoData] = useState(null);

     useEffect(() => {
         fetchPhoto(); 

        async function fetchPhoto() {
            const res = await fetch(
                'your-NASA-API-key'
            );
            const data = await res.json();
            setPhotoData(data); 
            console.log(data); 
        }

     }, []);

     if (!photoData) return <div />;

    return (
        <>
        <NavBar />
        <div className="nasa-photo">
            <img src={photoData.url} alt={photoData.title} className="photo" />  
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p> 
                <p className="explanation">{photoData.explanation}</p>
            </div> 

        </div>
        
        </>  
    );
 }