export default function Home() {
  return (
    <div className="space-y-16 px-6 lg:px-20 py-12 bg-gray-50">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-primary-600 mb-6">INSIGHT Lab</h1>
        <h2 className="text-3xl font-light text-primary-400 mb-4">Intelligent Systems and Global High-Tech Research Team</h2>
        <h3 className="text-xl text-primary-500 mb-8">Higher Normal School, Marrakech</h3>
        <p className="text-lg text-primary-700 max-w-4xl mx-auto leading-relaxed">
        <strong>INSIGHT Lab</strong> is a leading research team at the <strong>Higher Normal School</strong>, part of the <strong>University Cadi Ayyad</strong>. This team is associated with the <strong>Laboratoire d'Ingénierie Informatique et Systèmes (L2IS)</strong>, focusing on intelligent systems and advanced technologies to address global challenges through innovation and scientific excellence.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 border border-primary-300">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Intelligent Systems</h2>
          <p className="text-primary-700 leading-relaxed">Developing cutting-edge AI and machine learning solutions for complex problems.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 border border-primary-300">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Global Tech Innovation</h2>
          <p className="text-primary-700 leading-relaxed">Creating advanced technological solutions with worldwide impact.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 border border-primary-300">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Research Excellence</h2>
          <p className="text-primary-700 leading-relaxed">Publishing groundbreaking research in top-tier scientific journals.</p>
        </div>
      </div>
    </div>
  );
}
