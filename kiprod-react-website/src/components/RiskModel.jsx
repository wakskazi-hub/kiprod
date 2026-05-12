import { Link } from 'react-router-dom'

export default function RiskModel() {
  const cards = [
    { title: 'Risk Identification', page: '/about' },
    { title: 'Risk Assessment', page: '/partnerships' },
    { title: 'Risk Monitoring', page: '/academy' },
    { title: 'Recovery & Resolution', page: '/contact' },
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-black">
          Integrated Credit Risk Lifecycle
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <Link
              key={card.title}
              to={card.page}
              className="rounded-3xl border bg-slate-50 p-8 shadow-lg transition hover:-translate-y-2"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-900 text-2xl font-black text-white">
                {index + 1}
              </div>

              <h3 className="mt-6 text-2xl font-black">{card.title}</h3>

              <div className="mt-6 text-cyan-600 font-semibold">
                Open Page →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
