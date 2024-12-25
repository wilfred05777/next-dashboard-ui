"use client";

import Image from 'next/image';
import React from 'react'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 4000,
    absent: 2400,
    amt: 2400,
  },
  {
    name: 'Tues',
    present: 3000,
    absent: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    present: 2000,
    absent: 9800,
    amt: 2290,
  },
  {
    name: 'Thur',
    present: 2780,
    absent: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    present: 1890,
    absent: 4800,
    amt: 2181,
  }
];

const AttedanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='' height={20} width={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} stroke='#ddd' tick={{fill:"#d1d5db"}} tickLine={false} />
            <YAxis axisLine={false} stroke='#ddd' tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
                  <Legend
                      align='left'
                      verticalAlign='top'
                      wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
                  />
                  <Bar
                      dataKey="present"
                      fill="#FAE27C"
                      legendType="circle"
                      radius={[10, 10 , 0, 0]}
                  />
                  <Bar
                      dataKey="absent"
                      fill="#C3EBFA"
                      legendType="circle"
                      radius={[10, 10 , 0, 0]}
                  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttedanceChart