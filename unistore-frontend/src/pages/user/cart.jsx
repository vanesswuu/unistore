const cartItems = [
  { id: 1, name: "Classic Shirt", variant: "White / Medium", price: 650, qty: 1 },
  { id: 2, name: "Varsity Hoodie", variant: "Navy / Large", price: 1190, qty: 2 },
];

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

function Cart() {
  return (
    <div className="gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_360px]">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">Shopping Cart</h1>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <article key={item.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 lg:flex-row">
              <div className="h-32 w-full rounded-xl bg-slate-100 lg:w-32" />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">{item.name}</h2>
                  <p className="text-sm text-slate-500">{item.variant}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="rounded-full border border-slate-200">
                    <button className="px-3 py-1">-</button>
                    <span className="px-4 text-sm font-semibold">{item.qty}</span>
                    <button className="px-3 py-1">+</button>
                  </div>
                  <p className="text-lg font-semibold text-slate-900">₱{item.price * item.qty}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>
        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₱{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Handling</span>
            <span>₱60</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-900">
            <span>Total</span>
            <span>₱{subtotal + 60}</span>
          </div>
        </div>
        <button className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white">
          Proceed to Checkout
        </button>
      </aside>
    </div>
  );
}

export default Cart;
