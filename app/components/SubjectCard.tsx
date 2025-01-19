interface SubjectCardProps {
  name: string
  description: string
}

const SubjectCard: React.FC<SubjectCardProps> = ({ name, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-primary-700">{name}</h2>
      <p className="text-secondary-600">{description}</p>
    </div>
  )
}

export default SubjectCard

