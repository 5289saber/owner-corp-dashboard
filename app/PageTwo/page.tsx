"use client";

import type React from "react"

import { useState } from "react"
import Image from "next/image";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"




export default function PageTwo() {

  const [value, setValue] = useState("")
  const [displayValue, setDisplayValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setDisplayValue(value)
  }


  return (
    <div className="place-content-center">
      <h1 className="row-start-0 text-sm gap-[24px] tc-[#00ff00]">
          Page 2
      </h1>
      <div className="w-full max-w-md mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Input Example</h2>
        <p className="text-muted-foreground">Enter a value in the textbox below.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Label htmlFor="textInput">Enter value</Label>
          <Input
            id="textInput"
            type="text"
            placeholder="Type something..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-1"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>

      {displayValue && (
        <div className="p-3 border rounded-md bg-muted mt-3">
          <p className="font-medium">Current value:</p>
          <p>{displayValue}</p>
        </div>
      )}
    </div>
      <main className="row-start-2">
        <div className="space-x-4 flex flex-row place-content-center">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/.."
          >
            Home
          </a>
          <a
            // test button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            Go to Gmail
          </a>
          
        </div>
      </main>
    </div>
  );
}