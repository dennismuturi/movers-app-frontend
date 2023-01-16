import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

export default function MoverPage () {
    const [mover,setMover] =useState({});

    let {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/movers/1`)
        .then((res) => res.json())
        .then(data=> setMover(data))
        .catch(err=> console.log(err))
    },[])

    console.log(mover)
    return (
        <>
        <NavBar
         logoTitle={"Movers App"}
         loginMenuItem={mover.company_name}
         dropdownmenu1={mover.email}
         dropdownmenu2={`Status: ${mover.is_available ? "Available" : "Not Available"}`}
         dropdownmenu3={` Vehicles : ${mover.vehicles.length}`}
        />
        </>
    );
}