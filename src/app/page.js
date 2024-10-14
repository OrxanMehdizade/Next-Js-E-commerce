"use client";

import Input from "@/components/Input";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({});
  const authenticated=false;

  useEffect(()=>{
    authenticated && redirect("/home");
  },[])
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="shadow-[0_0_10px_5px] shadow-zinc-300 rounded-lg flex flex-col justify-center w-[400px] h-[300px] p-12 gap-4">
        
        <h1 className="text-3xl text-center">Login</h1>
        <Input name="email" setFormData={setFormData}/>
        
        <Input name="password" setFormData={setFormData}/>
        
        <button className="bg-blue-500 text-white py-2 rounded-md">Submit</button>
      </div>
    </div>
  );
}
