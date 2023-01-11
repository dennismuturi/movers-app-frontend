export default function MoversMarketing() {
    const gradientStyle ={
        background:  "linear-gradient(to right, #434343 0%, black 100%)"
    }
    return (

        <div class="py-20 bg-black" style={gradientStyle}
        >
        <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white">
           Movers App for Companies
        </h2>
        <h3 class="text-2xl mb-8 text-gray-200">
         Improve your business, Get more Customers
        </h3>

        <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Sign Up
        </button>
      </div>
      </div>
    );
}