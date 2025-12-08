const footerLinks = [
  { title: "Support", items: ["Contact", "FAQ", "Policies"] },
  { title: "Follow", items: ["Facebook", "Instagram", "Twitter"] },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-500 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-indigo-600">UniStore</h3>
          <p>Official campus merchandise and ordering portal.</p>
          <p>© {new Date().getFullYear()} UniStore. All rights reserved.</p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{section.title}</p>
            <ul className="mt-3 space-y-2">
              {section.items.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
