export default function Register() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Create account</p>
        <h1 className="text-3xl font-semibold text-slate-900">Join UniStore</h1>
        <p className="text-sm text-slate-500">Checkout faster and track every order.</p>
      </header>

      <form className="grid gap-4 md:grid-cols-2">
        {[
          { label: "First name", placeholder: "Juan" },
          { label: "Last name", placeholder: "Dela Cruz" },
          { label: "Student ID", placeholder: "2021-12345" },
          { label: "Department", placeholder: "College of Engineering" },
          { label: "Email", placeholder: "you@school.edu" },
          { label: "Password", placeholder: "••••••••", type: "password" },
        ].map((field) => (
          <label key={field.label} className="text-sm text-slate-600">
            {field.label}
            <input
              type={field.type || "text"}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2"
              placeholder={field.placeholder}
            />
          </label>
        ))}
      </form>

      <button className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white">Create account</button>
    </div>
  );
}
