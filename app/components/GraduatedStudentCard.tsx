interface GraduatedStudentCardProps {
  name: string
  thesis: string
  year: number
  currentPosition: string
}

const GraduatedStudentCard: React.FC<GraduatedStudentCardProps> = ({ name, thesis, year, currentPosition }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-lg border border-secondary-200">
      <h2 className="text-xl font-semibold mb-2 text-primary-700">{name}</h2>
      <p className="text-secondary-700 mb-2"><span className="font-medium">Thesis:</span> {thesis}</p>
      <p className="text-secondary-600 mb-2"><span className="font-medium">Graduation Year:</span> {year}</p>
      <p className="text-secondary-600"><span className="font-medium">Current Position:</span> {currentPosition}</p>
    </div>
  )
}

export default GraduatedStudentCard

