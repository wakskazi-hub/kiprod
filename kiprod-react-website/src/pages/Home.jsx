import RiskModel from '../components/RiskModel'

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-950 to-cyan-700 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-6xl font-black leading-tight">
            Strengthening Credit Risk Management
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-slate-200">
            Structured frameworks for monitoring and institutional strengthening.
          </p>
        </div>
      </section>

      <RiskModel />
    </div>
  )
}
