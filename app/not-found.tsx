import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell py-20">
      <h1 className="text-4xl font-semibold text-[#14251e]">Page not found</h1>
      <p className="mt-3 text-sm text-[#4b6658]">
        The page you are looking for may have moved. Use the links below to continue.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#102116]">
          Go Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#2f6036]"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
