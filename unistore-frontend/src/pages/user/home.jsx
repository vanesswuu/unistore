const featuredProducts = [
  { id: 1, name: "Classic Shirt", price: "₱650", category: "Shirts" },
  { id: 2, name: "Varsity Hoodie", price: "₱1,200", category: "Hoodies" },
  { id: 3, name: "Lightweight Jacket", price: "₱1,500", category: "Jackets" },
  { id: 4, name: "Campus Sticker Pack", price: "₱150", category: "Stickers" },
];

const announcements = [
  { id: 1, title: "New Hoodie Released", detail: "Now available in forest green." },
  {
    id: 2,
    title: "Limited Edition Varsity Jacket",
    detail: "Only 100 pieces. Pre-order closes Friday.",
  },
];

function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-16 text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.3em]">UniStore Online</p>
        <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
          Skip the Line. Shop University Merch Online.
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-purple-100">
          Order the latest campus apparel and accessories anytime, pay digitally, and
          pick up when it's ready.
        </p>
        <button className="rounded-full bg-white/90 px-6 py-3 text-indigo-700 shadow-lg transition hover:bg-white">
          Shop Now
        </button>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Featured</p>
            <h2 className="text-2xl font-semibold text-slate-900">Campus Favorites</h2>
          </div>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View All
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <div className="mb-3 h-40 rounded-xl bg-slate-100" />
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                {item.category}
              </p>
              <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
              <p className="text-indigo-600">{item.price}</p>
              <button className="mt-4 w-full rounded-xl bg-indigo-600 py-2 text-sm font-medium text-white">
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Announcements</p>
        <h2 className="text-2xl font-semibold text-slate-900">What's New in UniStore</h2>
        <div className="space-y-4">
          {announcements.map((item) => (
            <div key={item.id} className="rounded-xl bg-white px-6 py-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
