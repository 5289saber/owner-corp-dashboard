import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import { ReactNode } from 'react';

interface DownloadButtonProps {
  filePath: string;
  label: string;
  children?: ReactNode; // Add this line to accept children
}

export function DownloadButton({ filePath, label, children }: DownloadButtonProps) {
  // Extract filename from path for the download attribute
  const fileName = filePath.split('/').pop();
  
  return (
    <Button asChild className="flex items-center gap-2 light:invert">
      <a href={filePath} download={fileName}>
        <Download size={16} />
        {label}
        {children} {/* Render children if provided */}
      </a>
    </Button>
  );
}