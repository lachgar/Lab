export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-primary-600 mb-4">INSIGHT Lab</h1>
        <h2 className="text-2xl text-primary-400 mb-2">Intelligent Systems and Global High-Tech Laboratory</h2>
        <h3 className="text-xl text-primary-500 mb-6">Higher Normal School, Marrakech</h3>
        <p className="text-xl text-primary-700 max-w-3xl mx-auto">
          Pioneering research in intelligent systems and advanced technologies to address global challenges through innovation and scientific excellence.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-primary-200">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Intelligent Systems</h2>
          <p className="text-primary-700">Developing cutting-edge AI and machine learning solutions for complex problems.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-primary-200">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Global Tech Innovation</h2>
          <p className="text-primary-700">Creating advanced technological solutions with worldwide impact.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-primary-200">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Research Excellence</h2>
          <p className="text-primary-700">Publishing groundbreaking research in top-tier scientific journals.</p>
        </div>
      </div>
    </div>
  )
}

