export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary-800 mb-4">Welcome to Our Research Team</h1>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
          We are a dedicated group of researchers working on cutting-edge projects
          in various fields. Explore our website to learn more about our team,
          ongoing projects, publications, research subjects, and doctoral students.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-primary-700">Our Team</h2>
          <p className="text-secondary-600">Meet the brilliant minds behind our research.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-primary-700">Projects</h2>
          <p className="text-secondary-600">Discover our ongoing and completed research projects.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-primary-700">Publications</h2>
          <p className="text-secondary-600">Browse our latest scientific publications and articles.</p>
        </div>
      </div>
    </div>
  )
}

