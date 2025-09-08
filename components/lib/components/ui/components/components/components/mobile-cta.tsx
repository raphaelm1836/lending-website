import Link from "next/link";
import { Button } from "./ui/button";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-3 md:hidden">
      <Link href="/apply" className="no-underline">
        <Button className="w-full" size="lg">Apply Now</Button>
      </Link>
    </div>
  );
}
