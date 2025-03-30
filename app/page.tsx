import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="place-content-center">
      <h1 className="row-start-0 text-sm gap-[24px] tc-[#00ff00]">
          Page 1
      </h1>
      <main className="row-start-2 justify-items-center">
        <Image
          //className="blue"
          src="/britishFlag.png"
          alt="british flag logo"
          width={300}
          height={80}
          priority
        />
        
        <ol className="list-inside list-decimal text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            We are testing {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              mmmmmmmmmmmmmmmmmmmm
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-[#ffffff] text-foreground gap-2 hover:bg-[#ff0000] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/PageThree"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            3rd Page
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#00ffff] hover:bg-[#00ffff] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/PageTwo"
          >
            2nd page
          </a>
          <a
            // test button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#00ff00] dark:hover:bg-[#00ff00] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
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
