import React from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, parentsData } from "@/lib/data";

type Parent = {
   id: number;
   name: string;
   email?: string;
   students: string[]; // string[] array kay example: multiple students may naa sa parents lists
   photo?: string;
   phone?: string;
   address: string;
};

const columns = [
   {
      header: "Info",
      accessor: "info",
      // classname: "hidden md:table-cell"
   },
   {
      header: "Student Names",
      accessor: "students",
      classname: "hidden md:table-cell",
   },
   {
      header: "Phone",
      accessor: "phone",
      classname: "hidden lg:table-cell",
   },
   {
      header: "Address",
      accessor: "address",
      classname: "hidden lg:table-cell",
   },
   {
      header: "Actions",
      accessor: "actions",
      // classname: "hidden lg:table-cell"
   },
];

const ParentListPage = () => {
   const renderRow = (item: Parent) => (
      <tr
         key={item.id}
         className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-erdoPurpleLight'
      >
         <td className='flex items-center gap-4 p-4'>
            {/* <Image
               src={item.photo}
               alt=''
               width={40}
               height={40}
               className='md:hidden xl:block w-10 h-10 rounded-full object-cover'
            /> */}
            <div className='flex flex-col gap-1'>
               <h3 className='font-semibold'>{item.name}</h3>
               <p className='text-xs text-gray-500'>{item?.email}</p>
            </div>
         </td>
         <td className='hidden md:table-cell'>{item.students.join(",")}</td>
         <td className='hidden md:table-cell'>{item.phone}</td>
         <td className='hidden md:table-cell'>{item.address}</td>
         <td>
            <div className='flex items-center gap-2'>
               {/* naa koy mali diri ang <Link></Link>*/}
               {/* <Link href={`/list/Students/${item.id}`}> */}
               <Link href={`/list/Students/${item.id}`}>
                  <button className='w-7 h-7 flex items-center justify-center rounded-full bg-erdoSky'>
                     <Image src='/edit.png' alt='' width={16} height={16} />
                  </button>
                  {/* resolves the issue of the two button display flex column instead of row display */}
               </Link>
               {role === "admin" && (
                  <button className='w-7 h-7 flex items-center justify-center rounded-full bg-erdoPurple'>
                     <Image src='/delete.png' alt='' width={16} height={16} />
                  </button>
               )}
               {/* </Link> */}
               {/* Wrong end of the </Link> naa abot diri ang end which causes the two button display flex column instead of row display */}
            </div>
         </td>
      </tr>
   );

   return (
      <div className='container h-full bg-white p-4 rounded-md flex-1 m-4 mt-0'>
         {/* Students Pages */}
         {/* TOP */}
         <div className='flex items-center justify-between'>
            <h1 className='hidden md:block text-lg font-semibold'>
               All Parents
            </h1>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
               <TableSearch />
               <div className='flex'>
                  <button>
                     <Image src='/filter.png' alt='' width={14} height={14} />
                  </button>
               </div>
            </div>
         </div>

         {/* LIST */}
         <Table columns={columns} renderRow={renderRow} data={parentsData} />

         {/* Pagination */}
         <Pagination />
      </div>
   );
};

export default ParentListPage;
