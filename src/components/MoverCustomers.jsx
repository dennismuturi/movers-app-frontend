import {Link} from 'react-router-dom'
export default function MoverCustomers (){
    return (

<div className="mt-15 px-6  text-gray-300  MoverPage">

<div className="py-20 " >
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">

      
       </h2>
           <div className="flex flex-col gap-4">

        

<div  className="flex flex-col p-12 text-2xl font-bold " >
  My Orders : 


        <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                  Order ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Order Date
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Delivery Date
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    <Link to="cusomers" > Customer Names </Link>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Customer Emails
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          
                       
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                                   
                                </td>
                                <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                                   
                                </td>
                                <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                                
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <Link to=""
                                        className="text-green-500 hover:text-green-700"
                                      
                                    >
                                     
                                    </Link>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <Link to=""
                                        className="text-red-500 hover:text-red-700"
                                        
                                    >
                                        
                                    </Link>
                                </td>
                            </tr>
                         
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
    );
}