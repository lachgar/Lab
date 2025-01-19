import ProjectCard from '../components/ProjectCard'

const projects = [
  { title: 'AI in Healthcare', description: 'Developing AI models for early disease detection.', status: 'Ongoing' },
  { title: 'Sustainable Energy', description: 'Researching new methods for efficient solar energy storage.', status: 'Completed' },
  { title: 'Quantum Computing', description: 'Exploring quantum algorithms for cryptography.', status: 'Ongoing' },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

