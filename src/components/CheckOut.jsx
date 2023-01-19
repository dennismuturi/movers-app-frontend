import React, { useState } from 'react'


const Checkout = () =>{
    const [order_date, setOrder_Date] = useState("")
    const [delivery_date, setDelivery_Date] = useState("")
    const [customer_id, SetCustomer_id] = useState("")
    const [mover_id, SetMover_id] = useState("")
    const [price_id, SetPrice_id] = useState("")

const handleSubmit = (e) =>{
e.preventDefault()
const customerData={
    order_date,
    delivery_date,
    customer_id,
    mover_id,
    price_id
}
fetch('/checkout',{
    method:'POST',
    header:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(customerData)
})
}
return (
  <>
  <br/>
  <br/>
  <br/>
    <form onSubmit={handleSubmit}>
    <h3>Confirm Order</h3>
    <label htmlFor="customer_order">Customer_order: </label>
    <input
      type="number"
      id="order_date"
      value={order_date}
      onChange={(e) => setOrder_Date(e.target.value)}
    />
     <input
      type="number"
      id="delivery_date"
      value={delivery_date}
      onChange={(e) =>setDelivery_Date(e.target.value)}
    />
     <input
      type="number"
      id="mover_id"
      value={mover_id}
      onChange={(e) => setOrder_Date(e.target.value)}
    />
    <input
      type="number"
      id="price_id"
      value={price_id}
      onChange={(e) => setOrder_Date(e.target.value)}
    />
    
    <button type="submit">Confirm_Order</button>
  </form>
  </>
);
}
  

export default Checkout