import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function FloatingButtons() {
  return (
    <TooltipProvider>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild size="icon" className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg">
              <Link href="https://wa.me/1234567890" target="_blank" aria-label="Chat on WhatsApp">
                <MessageCircle className="w-7 h-7" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" align="center">
            <p>واتساب</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild size="icon" className="rounded-full w-14 h-14 shadow-lg">
              <Link href="tel:+1234567890" aria-label="Call us">
                <Phone className="w-7 h-7" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" align="center">
            <p>اتصل بنا</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
