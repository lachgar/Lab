import DoctorantCard from '../components/DoctorantCard';

const doctorants = [
  {
    name: 'Zineb KAMAL IDRISSI',
    research: 'Blockchain and Artificial Intelligence in Transport and Logistics',
    specialty: 'Blockchain Technology',
    supervisor: 'Prof. Hamid HRIMECH',
    status: 'In Progress',
    year:3
  },
  {
    name: 'Bader BENHIRT',
    research: 'Automatic Generation of Machine Learning Pipelines: Towards Complete Automation from Modeling to Deployment',
    specialty: 'Machine Learning Pipelines',
    supervisor: 'Prof. Rahhal ERRATTAHI',
    status: 'In Progress',
    year:1
  },
  {
    name: 'Laila HAMZA',
    research: 'Automatic Generation of Machine Learning Pipelines: Towards Complete Automation from Modeling to Deployment',
    specialty: 'Machine Learning Pipelines',
    supervisor: 'Prof. Rahhal ERRATTAHI',
    status: 'In Progress',
    year:1
  },
  {
    name: 'Soukaina DADI',
    research: 'Using Deep Learning and AI for Analysis, Security, and Autonomous Navigation of Drones',
    specialty: 'Deep Learning and Autonomous Navigation',
    supervisor: 'Prof. Ali KARTIT',
    status: 'In Progress',
    year:1
  }
];

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
  );
}
