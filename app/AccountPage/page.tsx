"use client";

import type React from "react"

import { useState,useEffect } from "react"
import Image from "next/image";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"




export default function AccountPage() {

  const [username, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [name, setName] = useState("")
  const [displayValue, setDisplayValue] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const addUser = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    });

    const data = await res.json();
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setDisplayValue(name) 
  }

  console.log("page 2")
  console.log(process.env.NEXT_PUBLIC_TEST_TWO)

  return (
    <div className="grid grid-rows-7 grid-cols-5 gap-4 grid-rows-[repeat(2,min-content)_1fr] mt-6">
          <div className="col-span-1 col-start-1 col-end-2 row-span-1 row-start-1 row-end-2 place-content-center justify-center justify-self-center">
            <Image
              //className="blue"
              src="/britishFlag.png"
              alt="british flag logo"
              width={300}
              height={80}
              priority
            />
          </div>
          <div className="col-span-3 col-start-2 col-end-5 row-span-1 row-start-1">
              <h1>STRATA</h1>
              <h2>User: {process.env.NEXT_PUBLIC_USERNAME}</h2>
          </div>
          <div className="col-span-1 col-start-5 row-span-1 row-start-1 row-end-2 place-items-center items-baseline place-content-center justify-center justify-self-center">
            <a
              className="border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-[155px] px-4 sm:px-5 w-full sm:w-auto md:w-[155px]"
              href="/.."
            >
              <Image
                src="/home.png"
                alt="Home icon"
                width={150}
                height={150}
              /> 
            </a>
          </div>
          
          <div className="row-span-7 row-start-2 col-span-1 col-start-1 col-end-2">
            
            <div className="grid grid-cols-1 grid-rows-9">
              <a
                className="row-span-1 row-start-1 row-end-2 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
                href="/NoticePage"
              >
                <h4>Notices</h4>
              </a>
              <a
                // test button
                className="row-span-1 row-start-2 row-end-3 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
                href="/FinancePage"
              >         
                <h4>Finances</h4>
              </a>
              <a
                // test button
                className="row-span-1 row-start-3 row-end-4 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-[windowWidth/5]"
                href="/InfoPage"
              >         
                <h4>Information</h4>
              </a>
              <a
                // test button
                className="row-span-1 row-start-4 row-end-5 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
                href="/CommitteePage"
              >         
                <h4>Committee</h4>
              </a>
              <a
                // test button
                className="row-span-1 row-start-5 row-end-6 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
                href="/AccountPage"
              >         
                <h4>{process.env.NEXT_PUBLIC_USERNAME}</h4>
              </a>
            </div>
          </div>
    
    
          <div className="row-span-12 row-start-2 col-span-4 col-start-2 place-items-start space-y-5">
            <h2>USER INFORMATION</h2>
              <div className="grid grid-cols-1 grid-rows-9">

                <div className="row-span-1 row-start-1 row-end-2">

                  <div className="mb-4">
                    <h2 className="text-2xl font-bold">Input Example</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label htmlFor="textInput">Enter value</Label>
                      <Input
                        id="textInput"
                        type="text"
                        placeholder="Type something..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1"
                      />
                      {process.env.NEXT_PUBLIC_USERNAME==name}
                    </div>
                    <Button type="submit" onClick={addUser}>Submit</Button>
                  </form>
                </div>
                <a
                  // test button
                  className="row-span-1 row-start-2 row-end-3 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-auto md:w-[40vw]"
                  href="/api/user"
                >         
                  <h4>Go to API</h4>
                </a>
              </div>
          </div>
      </div>
  );
}