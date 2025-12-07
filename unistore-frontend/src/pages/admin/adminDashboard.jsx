const cards = [
  { label: "Total orders", value: "482", trend: "+8%" },
  { label: "Pending payments", value: "34", trend: "-3%" },
  { label: "Completed", value: "396", trend: "+5%" },
  { label: "Top item", value: "Varsity Hoodie", trend: "62 sold" },
];

function AdminDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-rose-500">Admin dashboard</p>
          <h1 className="text-3xl font-semibold text-slate-900">Overview</h1>
        </div>
        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold">Download report</button>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.label} className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{card.label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">{card.value}</p>
            <p className="text-sm text-rose-500">{card.trend}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Sales per day</h2>
          <div className="mt-4 h-64 rounded-2xl bg-slate-100" />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Most popular items</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex justify-between">
              <span>Varsity Hoodie</span>
              <span>62 orders</span>
            </li>
            <li className="flex justify-between">
              <span>Classic Shirt</span>
              <span>48 orders</span>
            </li>
            <li className="flex justify-between">
              <span>ID Lace Bundle</span>
              <span>33 orders</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
