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
    title: 'Intelligent System for Managing COVID-19 Treatment Protocols',
    description: 'A project to develop an AI-powered system that unifies and optimizes COVID-19 treatment protocols using insights extracted from hospital EventLogs.',
    status: 'Completed'
  },
  
  {
    title: 'SkinHealthMate',
    description: 'An AI-driven platform for diagnosing skin diseases, integrating advanced machine learning techniques with a user-friendly web and mobile application. It supports dermatologists and patients by providing accurate diagnostic tools, treatment management, and secure access to medical records.',
    status: 'Ongoing'
  }
  ,  
  { 
    title: 'SmartBlendEd', 
    description: 'An AI-driven platform for enhancing blended learning through optimized scheduling and user-centric design.', 
    status: 'Completed' 
  },
  { 
    title: 'BlockSupply', 
    description: 'A blockchain-based logistics traceability solution to enhance transparency, security, and efficiency in supply chains.', 
    status: 'Ongoing' 
  }
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
