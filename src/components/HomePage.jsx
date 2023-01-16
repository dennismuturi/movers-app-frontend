import Header from "./Header";
import CustomerMarketing from "./CustomerMarketing";
import MoversMarketing from "./MoversMarketing";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function HomePage(){
    return (
    <>
        <NavBar 
         logoTitle={"Movers App"}
         rightMenuItem1={"Company"}
         rightMenuItem2={"Safety"}
         rightMenuItem3={"Help"}

         loginMenuItem={"Log in"}
         signUpMenuItem={"Sign up"}
         />
        <Header/>
        <MoversMarketing/>
        <CustomerMarketing/>
        <Footer/>
       

        
      </>
    );
}