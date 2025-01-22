import React from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, examsData } from "@/lib/data";

type Exam = {
   id: number;
   subject: string;
   class: string;
   teacher: string;
   date: number;
};

const columns = [
   {
      header: "Subject name",
      accessor: "name",
      classname: "hidden md:table-cell",
   },
   {
      header: "Class",
      accessor: "class",
      //   classname: "hidden md:table-cell",
   },

   {
      header: "Teacher",
      accessor: "teacher",
      classname: "hidden md:table-cell",
   },
   {
      header: "Date",
      accessor: "date",
      classname: "hidden md:table-cell",
   },
   {
      header: "Actions",
      accessor: "actions",
   },
];

const ExamListPage = () => {
   const renderRow = (item: Exam) => (
      <tr
         key={item.id}
         className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-erdoPurpleLight'
      >
         <td className='flex items-center gap-4 p-4'>{item.subject}</td>
         <td>{item.class}</td>
         <td className='hidden md:table-cell'>{item.teacher}</td>
         <td className='hidden md:table-cell'>{item.date}</td>
         <td>
            <div className='flex items-center gap-2'>
               <Link href={`/list/Students/${item.id}`}>
                  <button className='w-7 h-7 flex items-center justify-center rounded-full bg-erdoSky'>
                     <Image src='/edit.png' alt='' width={16} height={16} />
                  </button>
               </Link>
               {role === "admin" && (
                  <button className='w-7 h-7 flex items-center justify-center rounded-full bg-erdoPurple'>
                     <Image src='/delete.png' alt='' width={16} height={16} />
                  </button>
               )}
            </div>
         </td>
      </tr>
   );

   return (
      <div className='container h-full bg-white p-4 rounded-md flex-1 m-4 mt-0'>
         {/* Students Pages */}
         {/* TOP */}
         <div className='flex items-center justify-between'>
            <h1 className='hidden md:block text-lg font-semibold'>All Exams</h1>
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
         <Table columns={columns} renderRow={renderRow} data={examsData} />

         {/* Pagination */}
         <Pagination />
      </div>
   );
};

export default ExamListPage;
