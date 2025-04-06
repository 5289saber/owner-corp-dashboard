"use client";

import type React from "react"
import Image from "next/image";
import { DownloadButton } from "@/components/ui/downloadButton";


export default function NoticePage() {

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
          <h2>INFORMATION</h2>
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

        <h1>Estate Insurance Policy</h1>
        <DownloadButton
          filePath="home-insurance-pds.pdf"
          label="Download Insurance"
        >
        </DownloadButton>
        <h1>Strata Schemes Management Act</h1>
        <a
            // committee button
            className="row-span-1 row-start-4 row-end-5 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-20 px-4 sm:px-5 w-full sm:w-auto md:w-[windowWidth/5]"
            href="/api/redirect?url=https://classic.austlii.edu.au/au/legis/nsw/consol_act/ssma2015242/"
            target="_blank"
            rel="noopener noreferrer"
          >  
          Go to website       
        </a>

        <h1>Rules & Regulations</h1>

        <h2>1. Noise & Conduct</h2>
        <h4>Quiet hours: 10:00 PM – 7:00 AM on weekdays, 11:00 PM – 8:00 AM on weekends.</h4>
        <h4>No excessive noise from music, TVs, or gatherings that disturb other residents.</h4>
        <h4>Parties must end by 11:00 PM, and guests should not loiter in common areas.</h4>

        <h2>2. Pets</h2>
        <h4>Only small pets (under 10 kg) are allowed, subject to prior approval from the Owners Corporation.</h4>
        <h4>Pets must be kept on a leash in common areas.</h4>
        <h4>Owners must clean up after their pets immediately.</h4>

        <h2>3. Parking</h2>
        <h4>Residents must park only in designated spaces.</h4>
        <h4>Visitor parking is limited to a maximum of 24 hours.</h4>
        <h4>No commercial vehicles, boats, or trailers are allowed in the parking lot.</h4>

        <h2>4. Waste Disposal</h2>
        <h4>Garbage must be placed in designated bins.</h4>
        <h4>Recycling must be separated from general waste.</h4>
        <h4>Bulky waste (furniture, appliances) must be arranged for special pickup.</h4>

        <h2>5. Common Areas & Facilities</h2>
        <h4>Gym and pool are open from 6:00 AM to 10:00 PM.</h4>
        <h4>BBQ and function rooms require booking at least 48 hours in advance.</h4>
        <h4>No smoking in common areas, including hallways, lobbies, and balconies.</h4>

        <h2>6. Security & Safety</h2>
        <h4>Residents must not let unknown persons enter the building.</h4>
        <h4>Any security issues should be reported to building management immediately.</h4>
        <h4>Fire exits must remain clear at all times.</h4>

        <h1>Fees & Costs</h1>

        <h2>1. Monthly Owners Corporation Fees</h2>
        <h4>Standard Apartment: $200 per month</h4>
        <h4>Penthouse or Large Units: $350 per month</h4>

        <h2>2. Facility Booking Fees</h2>
        <h4>Function Room: $50 per session (refundable deposit of $100 required)</h4>
        <h4>BBQ Area: Free, but requires booking</h4>

        <h2>3. Move-In & Move-Out Fees</h2>
        <h4>Lift reservation deposit: $150 (refundable if no damages occur)</h4>
        <h4>Moving fees: $50 for security coverage during moving hours</h4>

        <h2>4. Penalties & Fines</h2>
        <h4>Noise Violation: $100 per complaint after first warning</h4>
        <h4>Parking Violation: $50 per incident</h4>
        <h4>Unauthorized Pet: $200 fine and potential removal</h4>
        <h4>Improper Waste Disposal: $50 per violation</h4>
      </div>
    </div>
  );
}