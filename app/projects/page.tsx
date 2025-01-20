import ProjectCard from '../components/ProjectCard';

const projects = [
  { 
    title: 'EduGame', 
    description: 'A gamified mobile application for enhancing secondary education using AI-driven content generation and gamification.', 
    status: 'Ongoing' 
  },
  { 
    title: 'DecideXpert', 
    description: 'A collaborative platform for multicriteria decision-making integrating AHP-TOPSIS and fuzzy techniques.', 
    status: 'Completed' 
  },
  { 
    title: 'AIDSII', 
    description: 'An AI-powered digital system for intelligent irrigation using IoT and machine learning models.', 
    status: 'Ongoing' 
  },
  { 
    title: 'DLDiagnosis', 
    description: 'A mobile and web application for disease classification leveraging deep learning algorithms.', 
    status: 'Ongoing' 
  },
  { 
    title: 'BlockSupply', 
    description: 'A blockchain-based logistics traceability solution to enhance transparency, security, and efficiency in supply chains.', 
    status: 'Ongoing' 
  },
  { 
    title: 'SmartBlendEd', 
    description: 'An AI-driven platform for enhancing blended learning through optimized scheduling and user-centric design.', 
    status: 'Completed' 
  },
];

export default function Projects() {
  return (
    <div className="px-6 lg:px-20 py-12 bg-gray-50 space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-primary-600 mb-8">Our Projects</h1>
        <p className="text-lg text-primary-700 max-w-4xl mx-auto leading-relaxed">
          Explore our diverse portfolio of innovative projects that leverage advanced technologies and intelligent systems to solve real-world challenges.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
