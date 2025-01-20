import DoctorantCard from '../components/DoctorantCard';

const doctorants = [
  {
    name: 'Zineb KAMAL IDRISSI',
    research: 'Blockchain and Artificial Intelligence in Transport and Logistics',
    specialty: 'Blockchain Technology',
    supervisor: 'Prof. Hamid HRIMECH',
    status: 'In Progress',
    year: 3
  },
  {
    name: 'Bader BENHIRT',
    research: 'Automatic Generation of Machine Learning Pipelines: Towards Complete Automation from Modeling to Deployment',
    specialty: 'Machine Learning Pipelines',
    supervisor: 'Prof. Rahhal ERRATTAHI',
    status: 'In Progress',
    year: 1
  },
  {
    name: 'Laila HAMZA',
    research: 'Automation of Software Development and DevOps',
    specialty: 'Generative AI for Code Generation and DevOps Processes',  
    supervisor: 'Prof. Rahhal ERRATTAHI',
    status: 'In Progress',
    year: 1
  },
  {
    name: 'Soukaina DADI',
    research: 'Using Deep Learning and AI for Analysis, Security, and Autonomous Navigation of Drones',
    specialty: 'Deep Learning and Autonomous Navigation',
    supervisor: 'Prof. Ali KARTIT',
    status: 'In Progress',
    year: 1
  }
];

export default function Doctorants() {
  return (
    <div className="px-6 lg:px-20 py-12 bg-gray-50 space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-primary-600 mb-8">Our Doctoral Students</h1>
        <p className="text-lg text-primary-700 max-w-4xl mx-auto leading-relaxed">
          Meet our dedicated doctoral students who are pushing the boundaries of research in advanced technologies and intelligent systems.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctorants.map((doctorant, index) => (
          <DoctorantCard key={index} {...doctorant} />
        ))}
      </div>
    </div>
  );
}
