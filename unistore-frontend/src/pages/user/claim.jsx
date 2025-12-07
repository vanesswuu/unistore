const steps = [
  "Present your student ID and this receipt at the UniStore office.",
  "Staff verifies payment proof and order contents.",
  "Sign the release form and receive your merch.",
];

function Claim() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Claim instructions</p>
        <h1 className="text-3xl font-semibold text-slate-900">How to pick up your order</h1>
      </header>

      <section className="rounded-3xl border border-slate-200 bg-white p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Pickup schedule</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>📍 UniStore Office, Student Center Ground Floor</li>
              <li>🕘 Monday-Friday · 9:00 AM – 5:00 PM</li>
              <li>📅 Bring a valid ID and the receipt QR</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Steps</h2>
            <ol className="space-y-3 text-sm text-slate-600">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="text-xs font-semibold text-indigo-500">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
          Need help? Email <a className="text-indigo-600" href="mailto:unistore@school.edu">unistore@school.edu</a>
          or visit the help desk.
        </div>
      </section>
    </div>
  );
}

export default Claim;
