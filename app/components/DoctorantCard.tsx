interface DoctorantCardProps {
  name: string
  research: string
  specialty : string
  year: number
}

const DoctorantCard: React.FC<DoctorantCardProps> = ({ name, research, specialty, year }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-primary-700">{name}</h2>
      <p className="text-secondary-700 mb-2">Research :  {research}</p>
      <p className="text-secondary-700 mb-2">Specialty : {specialty}</p>
      <p className="text-secondary-500">Year : {year}</p>
    </div>
  )
}

export default DoctorantCard

