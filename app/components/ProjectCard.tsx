interface ProjectCardProps {
  title: string
  description: string
  status: 'Ongoing' | 'Completed'
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, status }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-primary-700">{title}</h2>
      <p className="text-secondary-600 mb-4">{description}</p>
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
        {status}
      </span>
    </div>
  )
}

export default ProjectCard

