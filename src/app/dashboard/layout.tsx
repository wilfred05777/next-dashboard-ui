export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return 
  <div className = "h-screen flex">
    {/* LEFT */}
    {/* {children} */}
    <div className="w-1/6">l</div>

    {/* right */}
    <div className="w-5/6">r</div>

  </div>
  
} 
