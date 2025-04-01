import { Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Correct type definition for Next.js App Router page props
export default function BlockedPage({
  searchParams,
}: {
  params?: { slug?: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // Get the original URL and location info from query parameters
  const from = searchParams?.from || '/';
  const country = searchParams?.country || 'Unknown';
  const region = searchParams?.region || 'Unknown';
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-red-100">
            <Shield className="w-10 h-10 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Geographic Restriction
        </h1>
        
        <p className="text-center text-gray-600">
          We're sorry, but this content is only available to users in New South Wales, Australia.
        </p>
        
        <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-500">
          <p>Your location: {country}, {region}</p>
          <p className="mt-1">Requested page: {from}</p>
        </div>
        
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="https://www.australia.com/en/places/sydney-and-surrounds/guide-to-new-south-wales.html">
              Learn about NSW
            </Link>
          </Button>
        </div>
      </div>
      
      <p className="mt-8 text-sm text-gray-500">
        If you believe this is an error, please contact our support team.
      </p>
    </div>
  );
}