import TeamMember from '../components/TeamMember';

const teamMembers = [
  { name: 'Dr. Mohamed Lachgar', role: 'Lead Researcher', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Dr. My Driss Laannaoui', role: 'Lead Researcher', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Dr. Youssef Ait Malek', role: 'Senior Scientist', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Dr. Oumaima Setitini', role: 'Senior Scientist', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Dr. Zahid Noureddine', role: 'Senior Scientist', image: '/placeholder.svg?height=100&width=100' },
];

const externalMembers = [
  { name: 'Dr. Hamid Hrimech', role: 'Lead Researcher', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Dr. Rahhal Errattahi', role: 'Lead Researcher', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Dr. Mustapha Aatila', role: 'Senior Scientist', image: '/placeholder.svg?height=100&width=100' },
];

export default function Team() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember key={`team-${index}`} {...member} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">External Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {externalMembers.map((member, index) => (
          <TeamMember key={`external-${index}`} {...member} />
        ))}
      </div>
    </div>
  );
}
