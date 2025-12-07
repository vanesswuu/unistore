const mockSizes = ["XS", "S", "M", "L", "XL"];

function ProductDetails() {
  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
      <div className="space-y-6">
        <div className="rounded-3xl bg-slate-100/80 p-6">
          <div className="aspect-square rounded-2xl bg-slate-200" />
        </div>
        <div className="flex gap-3">
          {[1, 2, 3].map((thumb) => (
            <div key={thumb} className="h-20 flex-1 rounded-2xl bg-slate-100" />
          ))}
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Hoodies</p>
          <h1 className="text-3xl font-semibold text-slate-900">Varsity Heritage Hoodie</h1>
          <p className="mt-2 text-2xl font-semibold text-indigo-600">₱1,190</p>
        </div>
        <p className="text-slate-600">
          Heavyweight fleece with embroidered university seal, structured hood, and front kangaroo pocket. Built for cool
          evening classes and game days.
        </p>

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-400">Available sizes</p>
          <div className="flex flex-wrap gap-3">
            {mockSizes.map((size) => (
              <button key={size} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium">
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-full border border-slate-200">
            <button className="px-4 py-2 text-lg">-</button>
            <span className="px-4 text-lg font-semibold">1</span>
            <button className="px-4 py-2 text-lg">+</button>
          </div>
          <button className="flex-1 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white">
            Add to Cart
          </button>
        </div>

        <div className="space-y-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
          <p>✅ Ships in 2-3 days</p>
          <p>✅ Pick up at UniStore office</p>
          <p>✅ Free size exchanges within 7 days</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
