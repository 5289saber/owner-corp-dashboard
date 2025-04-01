"use client";

import type React from "react"
import Image from "next/image";


export default function NoticePage() {

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
          <h2>NOTICES</h2>
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
            // notices button
            className="row-span-1 row-start-1 row-end-2 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
            href="/NoticePage"
          >
            <h4>Notices</h4>
          </a>
          <a
            // finances button
            className="row-span-1 row-start-2 row-end-3 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
            href="/FinancePage"
          >         
            <h4>Finances</h4>
          </a>
          <a
            // information button
            className="row-span-1 row-start-3 row-end-4 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-[windowWidth/5]"
            href="/InfoPage"
          >         
            <h4>Information</h4>
          </a>
          <a
            // committee button
            className="row-span-1 row-start-4 row-end-5 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
            href="/CommitteePage"
          >         
            <h4>Committee</h4>
          </a>
          <a
            // account button
            className="row-span-1 row-start-7 row-end-8 space-x-9 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-40 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
            href="/AccountPage"
          >
            <Image
              src="/user.png"
              alt="User profile picture"
              width={100}
              height={100}
            />    
            <h4>{process.env.NEXT_PUBLIC_USERNAME}</h4>
          </a>
        </div>
      </div>


      <div className="row-span-7 row-start-2 col-span-4 col-start-2 place-items-start space-y-5">
        <h2>NOTICES</h2>
        <div className="grid grid-cols-1 grid-rows-4 space-y-5">
          <a
            className="row-span-1 row-start-1 row-end-2 col-start-1 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex flex-col hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base sm:h-70 px-4 sm:px-5 w-[76vw]"
          >
            <h4>Notice of Rent Increase</h4>
            <h4>   </h4>
            <h5>
              We hope this letter finds you well. We are writing to inform of an upcoming rent increase for all units. Effective 1/4/2025, the monthly rent for your unit will increase from $540 to $800.
            </h5>
            <h5>
              This adjustment is necessary due to rising maintenance costs and property expenses. We appreciate your tenancy and want to ensure you continue to have a comfortable living experience.
            </h5>
            <h5>
            If you have any questions or wish to discuss the matter, please contact us at 0412 345 678. Thank you for your understanding and cooperation.
            </h5>
            <h5>Sincerely,</h5>
            <h5>Nick</h5>
          </a>
          <a
            className="row-span-1 row-start-2 row-end-3 col-start-1 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex flex-col hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base sm:h-70 px-4 sm:px-5 w-[76vw]"
          >         
            <h4>Notice of Property Renovation</h4>
            <h4>   </h4>
            <h5>
              We would like to inform you that scheduled maintenance will take place on 1/4/2025 between 1am and 5am. The maintenance will involve plumbing repairs, electrical upgrades and pest control. To ensure the process runs smoothly, please ensure that you are asleep. We apologize for any inconvenience and appreciate your cooperation. If you have any questions or or require further clarification, please contact us at 0412 345 678. Thank you for your understanding and cooperation.
            </h5>
            <h5>Sincerely,</h5>
            <h5>Nick</h5>
          </a>
          <a
            className="row-span-1 row-start-3 row-end-4 col-start-1 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex flex-col hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base sm:h-70 px-4 sm:px-5 w-[76vw]"
          >         
            <h4>Notice of Rent Increase</h4>
            <h4>   </h4>
            <h5>
              We hope this letter finds you well. We are writing to inform of an upcoming rent increase for all units. Effective 1/4/2025, the monthly rent for your unit will increase from $540 to $800.
            </h5>
            <h5>
              This adjustment is necessary due to rising maintenance costs and property expenses. We appreciate your tenancy and want to ensure you continue to have a comfortable living experience.
            </h5>
            <h5>
            If you have any questions or wish to discuss the matter, please contact us at 0412 345 678. Thank you for your understanding and cooperation.
            </h5>
            <h5>Sincerely,</h5>
            <h5>Nick</h5>
          </a>
        </div>
      </div>
    </div>
  );
}