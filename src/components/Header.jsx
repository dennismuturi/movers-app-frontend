import { useContext, useState } from "react";
import UserContext from "./context/UserContext";
import ReactDatePicker from "react-datepicker";

export default function Header(){
  const [error,setError]= useState("")
  const {customer, movers} =useContext(UserContext);
  const [mover, setMover]= useState(null)
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [message, setMessage] = useState("");

  const [request, setRequest] = useState({
    pickup:'',
    destination: '',
    price_id: 1,
    customer_id: customer.id,
    mover_id:'',
    order_date: new Date(),
    
  })
  console.log(customer)
  console.log(request)
  console.log(movers)

  function handleSubmit(e) {
    e.preventDefault()
   
    fetch('http://localhost:3000/customer_orders',{
      method: 'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({...request, delivery_date: deliveryDate  })
  }).then((res)=> res.json())
  .then((data)=> setError("Your order has been successfull placed"))
  .catch((err)=> console.log(err))

  setError("")
    console.log(request)
  }
    return (
        <div className="bg-black 
        flex
        bg-[url('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2068,h_1163/v1586184518/assets/ef/95d634-7cb9-4b27-8de0-79c9680c7077/original/City-4_5.jpg')]
        p-24
        ">
<div className="container mx-auto px-6 ">
       

<div className="w-full max-w-xl h-max">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-max p-36">
    <div className="mb-4">
      <label class="block text-gray-700 font-bold mb-2 text-3xl py-12" for="customer">
        Request a Mover
      </label>
      {error ?
      <div className="p-6 bg-rose-200">{error}</div>
      : null }
      <input className="shadow appearance-none border 
      rounded w-full 
      py-2 px-3 text-gray-700 
      leading-tight focus:outline-none 
      focus:shadow-outline"
       id="pickup" 
       type="text" 
       placeholder="Enter PickUp Location"
       
       onChange={(e)=> setRequest({...request, pickup: e.target.value})}
       />

    </div>
    <div className="mb-6 ">
      <input className="shadow 
      appearance-none border 
      border-red-500 rounded 
      w-full py-2 px-3
       text-gray-700 mb-3 
       leading-tight focus:outline-none 
       focus:shadow-outline" id="password" 
       type="text" placeholder="Enter Destination Location"
       
       onChange={(e)=> setRequest({...request, destination: e.target.value})}
       />
    </div>

    {customer.email ?

    <div className="bg mb-6 flex flex-row">
    Pick a date to move : 
    <div className="bg-black mx-4">
     <ReactDatePicker  selected={deliveryDate} onChange={(date) => setDeliveryDate(date)} />
    </div>
    </div>
    : null }

{customer.email ?


    <div class="p-6 ">

      <ul  class=" overflow-y-auto h-32 max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {
          movers.map((mover)=> 
            (
              <li key={mover.id} className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4">
               <div className="flex-shrink-0">
               <input id={mover.id} type="radio" value={mover.id} name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                focus:ring-blue-500 dark:focus:ring-blue-600 
                dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 
                focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={(e)=>{setRequest({...request, mover_id: parseInt(e.target.value)})}}
                />

               </div>
               <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                     {mover.company_name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                     {mover.email}
                  </p>
               </div>
               <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {mover.is_available ? "Available" : "Not Available"}
               </div>
            </div>
             </li>
            
            )
          )
        }
      

      </ul>
    </div>

      : null }
    <div className="flex items-center justify-between">
      <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      
      type="button"
      onClick={(e)=> customer.email ? handleSubmit(e) : setError("Kindly Login to make a request")   }
      >
        Request Now
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
   
  </p>
</div>

</div>
{/* <Nav>
  <Navdropdown title="User name" >
    <Navdropdown.Item>Logout</Navdropdown.Item>
    </Navdropdown>
</Nav> */}
        
      </div>
    );
}