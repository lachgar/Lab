import SubjectCard from '../components/SubjectCard'

const subjects = [
  { name: 'Artificial Intelligence', description: 'Machine learning, neural networks, and AI applications.' },
  { name: 'Quantum Physics', description: 'Quantum mechanics, quantum computing, and quantum information theory.' },
  { name: 'Renewable Energy', description: 'Solar, wind, and other sustainable energy technologies.' },
]

export default function Subjects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Research Subjects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} {...subject} />
        ))}
      </div>
    </div>
  )
}

