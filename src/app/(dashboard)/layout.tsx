import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className = "h-screen flex">
      {/* LEFT */}
      {/* {children} */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] xl:w-[14%] bg-red-200 p-4">
        <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
          <Image src="/logo.png" alt="logo" width={32} height={32}/>
          <span className="hidden lg:block">School Management System</span>
        </Link>
      </div>

      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">r</div>

    </div>
  )
  
} 
