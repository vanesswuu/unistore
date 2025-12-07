const profileFields = [
  { label: "Full name", value: "Juan Dela Cruz" },
  { label: "Student ID", value: "2021-12345" },
  { label: "Email", value: "you@school.edu" },
  { label: "Department", value: "College of Engineering" },
];

function Profile() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Account</p>
        <h1 className="text-3xl font-semibold text-slate-900">Profile settings</h1>
      </header>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-lg font-semibold text-slate-900">Personal information</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {profileFields.map((field) => (
              <label key={field.label} className="text-sm text-slate-500">
                {field.label}
                <input
                  defaultValue={field.value}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2"
                />
              </label>
            ))}
          </div>
          <button className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white">Save changes</button>
        </div>

        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Membership</p>
            <p className="text-lg font-semibold text-slate-900">Student</p>
            <p>Joined Aug 2024</p>
          </div>
          <button className="w-full rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-900">
            Logout
          </button>
        </aside>
      </section>
    </div>
  );
}

export default Profile;
