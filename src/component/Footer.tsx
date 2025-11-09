export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-20 pb-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-[34px] font-semibold tracking-tight mb-10">
          pals
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4 text-[14px] mb-10">
          <a className="cursor-pointer">Help Center</a>
          <a className="cursor-pointer">Trust & Safety</a>
          <a className="cursor-pointer">Our Fees</a>
          <a className="cursor-pointer">Why PALS</a>
          <a className="cursor-pointer">Contact Us</a>
        </div>

        <div className="border-t border-white/10 my-10"></div>

        <p className="text-[13px] leading-relaxed max-w-4xl">
          PALS is a financial experience platform. All features are subject to eligibility and approval.
          Rewards, memberships, privileges and offers may vary by user tier.
        </p>

        <p className="text-[13px] mt-4 leading-relaxed max-w-4xl">
          This platform does not provide financial, investment, legal or tax advice. Consult your advisors before making decisions.
          All trademarks belong to their respective owners.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 text-[13px] gap-3">
          <span>© {new Date().getFullYear()} PALS, Inc.</span>

          <div className="flex gap-6">
            <a className="cursor-pointer">Accessibility</a>
            <a className="cursor-pointer">Terms</a>
            <a className="cursor-pointer">Privacy</a>
            <a className="cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
