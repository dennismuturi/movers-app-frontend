export function CustomerMarketing (){
    return (
        <>
        <section className="container mx-auto px-6 p-10">
        <h2  className="text-4xl font-bold text-left text-gray-800 mb-8">
          Focussed on making moving easy
        </h2>
        <div className="container grid grid-cols-2 gap-4 content-evenly">
        <div  className=" items-center flex-wrap mb-20">
      
          <div  className="w-full md:w-1/2">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" alt="Monitoring" />
          </div>
          <div  className="w-full md:w-1/2">
            <h4  className="text-xl text-gray-800 font-bold mb-3">Committed</h4>
            <p  className="text-gray-600 mb-8 text-2xl">
               Our Movers are there to ensure you safely get to your new home without 
              any problems.<br/>
              Guided by our principle of keeping you first, we are committed to ensure you get 
              the best services
              <br/><br/> 
              <a href="#">Learn More</a> 

                
                </p>
          </div>
        </div>

        <div  className="items-center flex-wrap mb-20">
         <div  className="w-full md:w-1/2">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" alt="Monitoring" />
          </div>
          <div  className="w-full md:w-1/2">
            <h4  className="text-xl text-gray-800 font-bold mb-3"> Support</h4>
            <p  className="text-gray-600 mb-8 text-2xl">
               We are there to assit you in finding the best people, transportation to move
               without 
               <br/><br/> 
              <a href="#">Learn More</a> 
                
                </p>
          </div>
        </div>
        </div>
      </section>
      <section  className="bg-gray-100">
        <div  className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Testimonials
          </h2>
          <div  className="flex flex-wrap">
            <div  className="w-full md:w-1/3 px-2 mb-4">
              <div  className="bg-white rounded shadow py-2">
                <p  className="text-gray-800 text-base px-6 mb-5">Monitoring and tracking my health vitals anywhere I go and on any platform I use has never been easier.</p>
                <p  className="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
              </div>
            </div>
            <div  className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p  className="text-gray-800 text-base px-6 mb-5">As an Athlete, this is the perfect product for me. I wear my Smart Health Monitoring Wristwatch everywhere I go, even in the bathroom since it's waterproof.</p>
                <p className="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p  className="text-gray-800 text-base px-6 mb-5">I don't regret buying this wearble gadget. One of the best gadgets I own!.</p>
                <p  className="text-gray-500 text-xs md:text-sm px-6">James Doe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
}