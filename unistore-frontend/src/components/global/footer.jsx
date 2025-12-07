function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} UniStore. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-indigo-600">
            Contact
          </a>
          <a href="#" className="hover:text-indigo-600">
            Policies
          </a>
          <a href="#" className="hover:text-indigo-600">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
