import TeamMember from '../components/TeamMember'

const teamMembers = [
  { name: 'Dr. Jane Doe', role: 'Lead Researcher', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Prof. John Smith', role: 'Senior Scientist', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Dr. Emily Brown', role: 'Postdoctoral Researcher', image: '/placeholder.svg?height=100&width=100' },
]

export default function Team() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  )
}

