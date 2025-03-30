import type React from "react"

export default function PageThree() {
  return (
    <div className="place-content-center">
      <h1 className="row-start-0 text-sm gap-[24px] tc-[#00ff00]">
          Page 3
      </h1>
      
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
            href="/../PageTwo"
          >         
            Page 2
          </a>
          
        </div>
      </main>
    </div>
  );
}