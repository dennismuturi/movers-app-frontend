export default function NavBar(){
    return (
<>
 <div className="bg-black text-white flex justify-between items-center">
  <div className="flex p-3 ">
    <a data-baseweb="link" 
    href="https://www.moversapp.com/" 
    target="_self" 
    aria-label="Go to moversapp.com" 
    data-tracking-name=""
     class=" mr-4 cc cd ce cf cg ch ci cj bn b5 ck cl cm cn co cp cq cr cs ct cu cv cw bt bf cb cx cy cz d0">Movers App</a>
    <h1 className="mr-4 text-sm">Company</h1>
    <h1 className="mr-4 text-sm">Safey</h1>
    <h1 className="mr-4 text-sm">Help</h1>
    <h1 className="mr-4 text-sm">COVID-19 resources</h1>
  </div>
  <div className="flex p-3">
    <h1 className="mr-4 py-1">Login</h1>
    <button className="text-black bg-white rounded-lg py-1 px-2">Sign up</button>
  </div>
</div>


</>
    );
}