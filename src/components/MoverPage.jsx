import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import MoverDashboard from "./MoverDashboard";
import Vehicle from "./Vehicle";
import "./moverpage.css"
import MoverSetting from "./MoverSetting";
import MoverCustomers from "./MoverCustomers";

export default function MoverPage () {
    const [mover,setMover] =useState({});
    const [moverId, setMoverId] =useState(null)

    let {id} = useParams();

   

    useEffect(()=>{

        fetch(`http://localhost:3000/movers/${id}`)
        .then((res) => res.json())
        .then(data=> setMover(data))
        .catch(err=> console.log(err))
    },[])

    console.log(mover)
    return (
        <>
        <NavBar
         logoTitle={"Movers App - Dashboard"}
         logoTitleLink={`/mover/${id}`}
         loginMenuItem={mover.company_name}
         
         dropdownmenu1={mover.email}
         dropdownmenu2={`Status: ${mover.is_available ? "Available" : "Not Available"}`}
         dropdownmenu3={"add Vehicles"}
         dropmenu3Link={"vehicle"}

         dropdownmenu4={"Setting"}
         dropmenu4Link={"settings"}
        />
    <Routes>
    <Route path="/" element={<MoverDashboard mover={mover}/>}/>
    <Route path="vehicle" element={<Vehicle/>} />
    <Route path="settings" element={<MoverSetting/>} />
    <Route path="customers" element={<MoverCustomers mover={mover}/>} />
    </Routes>
           
        
        </>
    );
}