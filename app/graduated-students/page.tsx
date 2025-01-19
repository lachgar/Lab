import GraduatedStudentCard from '../components/GraduatedStudentCard'

const graduatedStudents = [
  { name: 'Dr. Emily Chen', thesis: 'Quantum Algorithms for Optimization Problems', year: 2022, currentPosition: 'Research Scientist at Quantum Labs' },
  { name: 'Dr. Michael Johnson', thesis: 'AI-driven Drug Discovery', year: 2021, currentPosition: 'Lead AI Researcher at Pharma Innovations' },
  { name: 'Dr. Sarah Thompson', thesis: 'Advanced Materials for Solar Energy Conversion', year: 2023, currentPosition: 'Postdoctoral Researcher at Green Energy Institute' },
]

export default function GraduatedStudents() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary-800">Our Graduated Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {graduatedStudents.map((student, index) => (
          <GraduatedStudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  )
}

