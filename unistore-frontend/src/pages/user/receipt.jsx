function Receipt() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Order receipt</p>
        <h1 className="text-3xl font-semibold text-slate-900">Order #UNISTORE-24001</h1>
        <p className="text-slate-500">Issued to: Juan Dela Cruz</p>
      </header>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Pickup status</p>
            <p className="text-lg font-semibold text-amber-600">Pending verification</p>
            <p className="text-sm text-slate-500">Bring this receipt to the UniStore office.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Payment proof</p>
            <div className="mt-2 rounded-2xl bg-slate-100 p-4 text-sm text-slate-500">Screenshot uploaded • Awaiting review</div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Items purchased</h2>
          <div className="mt-3 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Classic Shirt (Medium)</span>
              <span>₱650</span>
            </div>
            <div className="flex justify-between">
              <span>Varsity Hoodie (Large)</span>
              <span>₱1,190</span>
            </div>
            <div className="flex justify-between border-t border-dashed border-slate-200 pt-3 font-semibold text-slate-900">
              <span>Total</span>
              <span>₱1,840</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-indigo-50 p-4 text-sm text-indigo-900">
          Show this receipt at the UniStore office to claim your merch. Staff will verify your payment and release the
          items.
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium">Back to shop</button>
          <button className="rounded-xl bg-indigo-600 px-6 py-2 text-sm font-semibold text-white">Download PDF</button>
        </div>
      </section>
    </div>
  );
}

export default Receipt;
