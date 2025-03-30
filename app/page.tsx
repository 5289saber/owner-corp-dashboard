import Image from "next/image";
import PageTwo from "./PageTwo/page";

export default function Home() {
  return (
    <div className="
     grid 
     grid-rows-None
     items-center 
     justify-items-center 
     min-h-screen 
     p-8 
     pb-20 
     gap-16 
     sm:p-20 
     font-[family-name:var(--font-geist-sans)]">
      <h1 className="row-start-0 text-5xl gap-[24px] tc-[#00ff00]">
          Page 1
      </h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          //className="blue"
          src="/britishFlag.png"
          alt="british flag logo"
          width={500}
          height={100}
          priority
        />
        
        <ol className="
         list-inside
         list-decimal
         text-5xl
         text-center 
         sm:text-left 
         font-[family-name:var(--font-geist-mono)]
         ">
          <li className="mb-2 tracking-[-.01em]">
            We are testing jackshit here{" "}
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
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#ff0000] text-foreground gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/PageThree"
          >
            <Image
              className="light:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            3rd Page
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#000000] dark:hover:bg-[#00ffff] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/PageTwo"
          >
            2nd page
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
