const mockProducts = Array.from({ length: 9 }).map((_, index) => ({
  id: index + 1,
  title: ["Shirt", "Hoodie", "Jacket", "Sticker", "ID Lace"][index % 5],
  price: `₱${(index + 1) * 150}`,
  stock: index % 2 === 0 ? "In stock" : "Low stock",
}));

export default function Shop() {
  return (
    <div className="gap-8 lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
        <form className="mt-6 space-y-6 text-sm text-slate-600">
          <fieldset>
            <legend className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-400">Categories</legend>
            <div className="space-y-2">
              {["Shirts", "Jackets", "ID Lace", "Hoodies", "Stickers"].map((category) => (
                <label key={category} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-slate-300" />
                  {category}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-400">Price Range</legend>
            <div className="grid grid-cols-2 gap-2">
              <input type="number" placeholder="Min" className="rounded-xl border border-slate-200 px-3 py-2" />
              <input type="number" placeholder="Max" className="rounded-xl border border-slate-200 px-3 py-2" />
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-400">Sizes</legend>
            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button type="button" key={size} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium">
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-400">Colors</legend>
            <div className="flex flex-wrap gap-3">
              {["#4c1d95", "#0f172a", "#64748b", "#f97316"].map((color) => (
                <button key={color} type="button" className="h-8 w-8 rounded-full border border-slate-300" style={{ backgroundColor: color }} />
              ))}
            </div>
          </fieldset>
        </form>
      </aside>

      <section className="space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Shop</p>
            <h1 className="text-3xl font-semibold text-slate-900">All University Merch</h1>
          </div>
          <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockProducts.map((product) => (
            <article key={product.id} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="h-48 rounded-xl bg-slate-100" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.stock}</p>
                <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
                <p className="text-indigo-600">{product.price}</p>
              </div>
              <button className="w-full rounded-xl bg-indigo-600 py-2 text-sm font-medium text-white">Add to Cart</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
