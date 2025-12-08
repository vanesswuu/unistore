export default function Login() {
  return (
    <div className="mx-auto max-w-md space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Student access</p>
        <h1 className="text-3xl font-semibold text-slate-900">Sign in to UniStore</h1>
        <p className="text-sm text-slate-500">Track orders and manage your profile.</p>
      </header>

      <form className="space-y-4 text-sm text-slate-600">
        <label className="block">
          Email address
          <input type="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2" placeholder="you@school.edu" />
        </label>
        <label className="block">
          Password
          <input type="password" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2" placeholder="••••••••" />
        </label>
        <button className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white">Sign in</button>
      </form>

      <p className="text-center text-sm text-slate-500">
        No account yet? <span className="text-indigo-600">Register now</span>
      </p>
    </div>
  );
}
