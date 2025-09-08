import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-2 text-lg font-semibold">SunAnchor Capital</div>
            <p className="text-sm text-slate-600">Financing that moves your business forward.</p>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold uppercase text-slate-600">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/apply" className="hover:text-blue-800 no-underline">Apply</Link></li>
              <li><Link href="/products" className="hover:text-blue-800 no-underline">Products</Link></li>
              <li><Link href="/about" className="hover:text-blue-800 no-underline">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-800 no-underline">Contact</Link></li>
            </ul>
          </div>
          <div className="text-sm text-slate-600">
            123 Market St, Suite 500, New York, NY 10001<br />
            Mon–Fri 9:00am–6:00pm ET
          </div>
        </div>
        <div className="mt-8 space-y-2 text-xs text-slate-500">
          <p>SunAnchor Capital is not a bank. MCAs are purchase of receivables and not loans.</p>
          <p>© {new Date().getFullYear()} SunAnchor Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
