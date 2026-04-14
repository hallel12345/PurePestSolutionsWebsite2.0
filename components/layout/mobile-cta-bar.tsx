import Link from "next/link";
import { siteConfig } from "@/data/site-content";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#1f352b] bg-[#0f1714]/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="flex-1 rounded-full border border-white/20 px-3 py-2 text-center text-sm font-semibold text-white"
        >
          Call Now
        </a>
        <a
          href={`sms:${siteConfig.phoneHref}`}
          className="flex-1 rounded-full border border-[#6ec94f] px-3 py-2 text-center text-sm font-semibold text-[#9be384]"
        >
          Text Us
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full bg-[#6ec94f] px-3 py-2 text-center text-sm font-semibold text-[#0f1714]"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
