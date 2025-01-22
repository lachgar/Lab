import TeamMember from '../components/TeamMember';

const teamMembers = [
  { name: 'Dr. Mohamed Lachgar', role: 'Lead Researcher', image: '/placeholder.svg?height=100&width=100', researchGate: 'https://www.researchgate.net/profile/Mohamed-Lachgar' },
  { name: 'Dr. My Driss Laannaoui', role: 'Lead Researcher', image: '/placeholder.svg?height=100&width=100',  researchGate: 'https://www.researchgate.net/profile/My-Driss-Laanaoui-2' },
  { name: 'Dr. Oumaima  Stitini', role: 'Senior Scientist', image: '/placeholder.svg?height=100&width=100', researchGate: 'https://www.researchgate.net/profile/Oumaima-Stitini' },
  { name: 'Dr. Youssef Nait Malek', role: 'Senior Scientist', image: '/placeholder.svg?height=100&width=100', researchGate: 'https://www.researchgate.net/profile/Youssef-Nait-Malek-2' },
];

const externalMembers = [
  { name: 'Dr. Hamid Hrimech', role: 'Lead Researcher', image: '/placeholder.svg?height=100&width=100', researchGate: 'https://www.researchgate.net/profile/Hamid-Hrimech-2' },
  { name: 'Dr. Rahhal Errattahi', role: 'Lead Researcher', image: '/placeholder.svg?height=100&width=100', researchGate: 'https://www.researchgate.net/profile/Rahhal-Errattahi' },
  { name: 'Dr. Zahid Noureddine', role: 'Senior Scientist', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Dr. Mustapha Aatila', role: 'Senior Scientist', image: '/placeholder.svg?height=100&width=100', researchGate: 'https://www.researchgate.net/profile/Mustapha-Aatila' },
];

export default function Team() {
  return (
    <div className="px-6 lg:px-20 py-12 bg-gray-50 space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-primary-600 mb-8">Our Team</h1>
        <p className="text-lg text-primary-700 max-w-4xl mx-auto leading-relaxed">
          Meet the dedicated researchers and scientists driving innovation and excellence in intelligent systems and advanced technologies.
        </p>
      </section>
      <div>
        <h2 className="text-3xl font-bold text-primary-600 mb-6">Core Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={`team-${index}`} {...member} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Associate members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {externalMembers.map((member, index) => (
            <TeamMember key={`external-${index}`} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
