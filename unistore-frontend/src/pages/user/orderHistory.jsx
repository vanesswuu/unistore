const orders = [
  { id: "UN-24001", items: 3, total: "₱1,840", status: "Pending", pickup: "Awaiting" },
  { id: "UN-24000", items: 2, total: "₱1,200", status: "Ready for pickup", pickup: "Today" },
];

export default function OrderHistory() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Orders</p>
        <h1 className="text-3xl font-semibold text-slate-900">My orders</h1>
      </header>

      <div className="overflow-hidden rounded-3xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.3em] text-slate-500">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Items</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Pickup</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-100">
                <td className="px-6 py-4 font-semibold text-slate-900">{order.id}</td>
                <td className="px-6 py-4">{order.items}</td>
                <td className="px-6 py-4 text-indigo-600">{order.total}</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{order.status}</span>
                </td>
                <td className="px-6 py-4">{order.pickup}</td>
                <td className="px-6 py-4">
                  <button className="text-sm font-medium text-indigo-600">View receipt</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
