import DropDownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";

export default function NavBar({
    logoTitle,
    logoTitleLink,
    rightMenuItem1,
    rightMenuItem2,
    rightMenuItem3,
    rightMenuItem4,
    loginMenuItem,
    signUpMenuItem,


    dropdownmenu1,
    dropdownmenu2,
    dropdownmenu3,
    dropdownmenu4,

    dropmenu1Link,
    dropmenu2Link,
    dropmenu3Link,
    dropmenu4Link
})
{
    return (
<>
<div className="bg-black text-white">
<div className="container mx-auto px-6 py-2 flex justify-between items-center">
    <div className="flex p-3 ">
        <Link  to={logoTitleLink} data-baseweb="link"  
        target="_self" 
        aria-label="Go to moversapp.com" 
        data-tracking-name=""
        class=" mr-4 cc cd ce cf cg ch ci cj bn b5 ck cl cm cn co cp cq cr cs ct cu cv cw bt bf cb cx cy cz d0">
            {logoTitle}
            </Link>
        <h1 className="mr-4 text-sm">{rightMenuItem1}</h1>
        <h1 className="mr-4 text-sm">{rightMenuItem2}</h1>
        <h1 className="mr-4 text-sm">{rightMenuItem3}</h1>
        <h1 className="mr-4 text-sm">{rightMenuItem4}</h1>
        </div>
        <div className="flex p-3">
            <h1 className="mr-4 py-1">{loginMenuItem}
            
            </h1>
            
            <DropDownMenu
            
           
           dropdownmenu1={dropdownmenu1}
           dropdownmenu2= { dropdownmenu2}
           dropdownmenu3= {dropdownmenu3}
           dropdownmenu4 ={dropdownmenu4}
           dropmenu1Link={dropmenu1Link}
           dropmenu2Link={dropmenu2Link}
           dropmenu3Link={dropmenu3Link}
           dropmenu4Link={dropmenu4Link}
            />
            
            { signUpMenuItem  ? <button className="text-black bg-white rounded-lg py-1 px-2">{signUpMenuItem}</button> : null}
            </div>
            </div>
        </div>

</>
    );
}