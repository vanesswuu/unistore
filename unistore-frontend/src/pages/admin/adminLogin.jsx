function AdminLogin() {
  return (
    <div className="mx-auto max-w-md space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-500">Admin access</p>
        <h1 className="text-3xl font-semibold text-slate-900">Sign in to dashboard</h1>
      </header>

      <form className="space-y-4 text-sm text-slate-600">
        <label className="block">
          Email
          <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2" placeholder="admin@unistore.edu" />
        </label>
        <label className="block">
          Password
          <input type="password" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2" placeholder="••••••••" />
        </label>
        <button className="w-full rounded-xl bg-rose-600 py-3 text-sm font-semibold text-white">Enter dashboard</button>
      </form>
    </div>
  );
}

export default AdminLogin;
