import Header from "./Header";
import CustomerMarketing from "./CustomerMarketing";
import MoversMarketing from "./MoversMarketing";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useContext } from "react";
import UserContext from "./context/UserContext";
export default function HomePage(){



  const {customer, setCustomer} = useContext(UserContext)

    return (
    <>
        <NavBar 
         logoTitle={"Movers App"}
         logoTitleLink={"/"}
         rightMenuItem1={"Company"}
         rightMenuItem2={"Safety"}
         rightMenuItem3={"Help"}

         loginMenuItem={customer.email ? customer.email : "Log in"}
         signUpMenuItem={customer.email ? null : "Sign Up"}
         />
        <Header/>
        <MoversMarketing/>
        <CustomerMarketing/>
        <Footer/>
       

        
      </>
    );
}