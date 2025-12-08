export default function Checkout() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Checkout</p>
        <h1 className="text-3xl font-semibold text-slate-900">Confirm your order</h1>
      </header>

      <div className="gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Student details</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                { label: "Full name", placeholder: "Juan Dela Cruz" },
                { label: "Email", placeholder: "you@school.edu" },
                { label: "Student ID", placeholder: "2021-12345" },
                { label: "Department", placeholder: "College of Engineering" },
              ].map((field) => (
                <label key={field.label} className="text-sm text-slate-600">
                  {field.label}
                  <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2" placeholder={field.placeholder} />
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">Payment</h2>
            <p className="text-sm text-slate-500">GCash · PayMaya · Credit/Debit</p>
            <div className="mt-4 space-y-3">
              {["GCash", "PayMaya", "Credit/Debit Card"].map((method) => (
                <label key={method} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                  <input type="radio" name="payment" />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">Upload payment proof</h2>
            <label className="mt-2 flex min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 text-center text-sm text-slate-500">
              <span>Drag & drop screenshot or click to browse</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </section>

        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Order summary</h2>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Items</span>
              <span>₱2,430</span>
            </div>
            <div className="flex justify-between">
              <span>Handling</span>
              <span>₱60</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Total</span>
              <span>₱2,490</span>
            </div>
          </div>
          <button className="w-full rounded-xl bg-green-600 py-3 text-sm font-semibold text-white">Submit & generate receipt</button>
        </aside>
      </div>
    </div>
  );
}
