import DoctorantCard from '../components/DoctorantCard'

const doctorants = [
  { name: 'Alice Johnson', research: 'AI Ethics in Healthcare', year: 3 },
  { name: 'Bob Williams', research: 'Quantum Cryptography Protocols', year: 2 },
  { name: 'Carol Martinez', research: 'Efficient Solar Cell Materials', year: 4 },
]

export default function Doctorants() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Doctoral Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorants.map((doctorant, index) => (
          <DoctorantCard key={index} {...doctorant} />
        ))}
      </div>
    </div>
  )
}

