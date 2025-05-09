"use client";

import type React from "react"
import Image from "next/image";
import {useEffect, useState} from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Loader2 } from "lucide-react"
import { queryPaymentsByUsername, type FinanceData } from "../actions/queryPayments"

export default function NoticePage() {

  type FinanceData = {
    id: number;
    amount: number;
    date: string;
    refNum: String;
  };

  const [financeData, setFinanceData] = useState<FinanceData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  const [formData, setFormData] = useState({ username: '' });

  var queryUsername = 'nick'; // Replace with your actual username variable

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  async function fetchData() {
      try {
        // Use the new API endpoint with the username parameter
        // Replace 'currentUsername' with the actual username variable or value
        const queryUsername = formData.username.trim();
        const response = await fetch(`/api/userPayments?username=${encodeURIComponent(queryUsername)}`);
        //const response = await fetch(`/api/userPayments?username=john`);
        //const response = await fetch('/api/transactions');
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error fetching data');
        }
        
        const data = await response.json();
        setFinanceData(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
  }

  /*
  useEffect(() => {
    
    
    fetchData();
  }, []);
    */
  
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("button pressed")
    
    /*
    if (!username.trim()) {
      setError("Please enter a username")
      return
    }
    */
    setLoading(true)
    setError("")
    

    try {
      queryUsername = username
      fetchData();
      //const result = await queryPaymentsByUsername(username)
      /*
      if (result.success && result.data) {
        setFinanceData(result.data)
      } else {
        setError(result.error || "Failed to fetch payment data")
        setFinanceData([])
      }
        */
    } catch (err) {
      console.error("Error querying payments:", err)
      setError("An unexpected error occurred")
      setFinanceData([])
    } finally {
      setLoading(false)
      setHasSearched(true)
    }
    //window.location.reload();
  }

          
        

  /*              
        
        {loading && (
          <div className="text-center py-4">
            <p>Loading payment data...</p>
          </div>
        )}
        
        {/* Render finance data only if it's an array and not loading *//*}
        {!loading && Array.isArray(financeData) && financeData.length > 0 ? (
          <div className="space-y-2">
            {financeData.map((item, index) => (
              <div 
                key={item.id || index} 
                className="row-span-1 space-x-10 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-15 px-4 sm:px-5 w-[70vw]"
              >
                <h6>${item.amount ?? 0}</h6>
                <h6>Due {item.date ?? 'N/A'}</h6>
                <h6>reference: {item.refNum ?? 'N/A'}</h6>
              </div>
            ))}
          </div>
        ) : (
          // Show "no data" message only if not loading and there's no error
          !loading && !error && (
            <div className="text-center py-4 text-gray-500">
              No payment records found.
            </div>
          )
        )}
        
        {/* Debug information (remove in production) *//*}
        <div className="mt-8 p-4 bg-gray-100 rounded text-xs">
          <p>Debug Info:</p>
          <p>financeData type: {typeof financeData}</p>
          <p>Is array: {Array.isArray(financeData) ? 'Yes' : 'No'}</p>
          <p>Length: {Array.isArray(financeData) ? financeData.length : 'N/A'}</p>
        </div>

*/
    



  return (
    <div className="grid grid-rows-7 grid-cols-5 gap-4 grid-rows-[repeat(2,min-content)_1fr] mt-6">
      <div className="col-span-1 col-start-1 col-end-2 row-span-1 row-start-1 row-end-2 place-content-center justify-center justify-self-center">
        <Image
          //className="blue"
          src="/britishFlag.png"
          alt="british flag logo"
          width={250}
          height={67}
          priority
        />
      </div>
      <div className="col-span-3 col-start-2 col-end-5 row-span-1 row-start-1">
          <h1>STRATA</h1>
          <h2>FINANCES</h2>
      </div>
      <div className="col-span-1 col-start-5 row-span-1 row-start-1 row-end-2 place-items-center items-baseline place-content-center justify-center justify-self-center">
        <a
          className="border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-[110px] px-4 sm:px-5 w-full sm:w-auto md:w-[110px]"
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
            // notices button
            className="row-span-1 row-start-1 row-end-2 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-20 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
            href="/NoticePage"
          >
            <h4>Notices</h4>
          </a>
          <a
            // finances button
            className="row-span-1 row-start-2 row-end-3 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-20 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
            href="/FinancePage"
          >         
            <h4>Finances</h4>
          </a>
          <a
            // information button
            className="row-span-1 row-start-3 row-end-4 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-20 px-4 sm:px-5 w-full sm:w-[windowWidth/5]"
            href="/InfoPage"
          >         
            <h4>Information</h4>
          </a>
          <a
            // committee button
            className="row-span-1 row-start-4 row-end-5 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-20 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
            href="/CommitteePage"
          >         
            <h4>Committee</h4>
          </a>
          <a
            // account button
            className="row-span-1 row-start-5 row-end-6 space-x-9 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-20 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
            href="/AccountPage"
          >
            <Image
              src="/user.png"
              alt="User profile picture"
              width={50}
              height={50}
            />    
            <h4>{process.env.NEXT_PUBLIC_USERNAME}</h4>
          </a>
        </div>
      </div>


      <div className="row-span-7 row-start-2 col-span-4 col-start-2 place-items-start space-y-5">
        <h2>FINANCES</h2>
        <h2>User selection: (input nick or john)</h2>

         <form onSubmit={handleSearch} className="space-y-4">
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Input username"
            className="border p-2 w-full"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      
        {/* Show error message if there is one */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        )}
        <h3>Upcoming</h3>
        {financeData.map(FinanceData => (
          <div className="row-span-1 space-x-10 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-15 px-4 sm:px-5 w-[70vw]">
            <h4>${FinanceData.amount ?? 0}</h4>
            <h4>Due {FinanceData.date ?? 0}</h4>
            <h4>reference: {FinanceData.refNum}</h4>
          </div>
        ))}

        <h3>Past Payments</h3>
        {financeData.map(FinanceData => (
          <div className="row-span-1 space-x-10 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-15 px-4 sm:px-5 w-[70vw]">
            <h6>${FinanceData.amount ?? 0}</h6>
            <h6>Due {FinanceData.date ?? 0}</h6>
            <h6>reference: {FinanceData.refNum}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}