import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayPlayers = (props) => {
    const {allPlayers, setAllPlayers} = props;
    const handleDelete = (id) => {
        axios.delete("http://localhost:8000/api/players/" + id)
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <div className="flex justify-center my-5">
            <table className="table w-full md:w-1/2 border-2 border-neutral-100 border-separate border border-slate-500">
                <thead className="bg-neutral-100">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPlayers.map((player) => (
                            <tr key={player._id}>
                                <td className="border border-slate-500">{player.firstName} { player.lastName }</td>
                                <td className="capitalize border border-slate-500">{ player.position }</td>
                                <td className="border text-center border-slate-500"><button className="bg-red-500 rounded w-full text-white" onClick={()=>handleDelete(player._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
//         <table className="min-w-full divide-y divide-gray-200">
//   <thead className="bg-gray-50">
//     <tr>
//       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//         Name
//       </th>
//       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//         Title
//       </th>
//       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//         Status
//       </th>
//       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//         Role
//       </th>
//       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//         Email
//       </th>
//     </tr>
//   </thead>
//   <tbody className="bg-white divide-y divide-gray-200">
//     <tr>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="flex items-center">
//           <div className=" h-10 w-10">
//             <img className=" object-fit h-10 w-10 rounded-full" src="https://www.aceshowbiz.com/images/photo/john_goodman.jpg" alt="" />
//           </div>
//           <div className="ml-4">
//             <div className="text-sm font-medium text-gray-900">
//               John Goodman
//             </div>
//             <div className="text-sm text-gray-500">
//               email@example.com
//             </div>
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-900">Logistics Level II</div>
//         <div className="text-sm text-gray-500">Reach Operator</div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//           Clocked In
//         </span>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//         Emp
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//         email@example.com
//       </td>
//     </tr>
//     {/* Add more table rows here */}
//   </tbody>
// </table>
    )
}

export default DisplayPlayers