import DoctorantCard from '../components/DoctorantCard';

const researchSubjects = [
  {
    title: 'AI-Driven IoT for Multi-Objective Recommender Systems',
    description: 'The development of a personalized, context-aware recommendation system using AI and IoT to address multiple objectives and enhance user experience.'
  },
  {
    title: 'Blockchain and Artificial Intelligence in Transport and Logistics',
    description: 'Exploring the integration of blockchain technology and AI to enhance efficiency and transparency in transportation and logistics systems.'
  },
  {
    title: 'Automatic Generation of Machine Learning Pipelines',
    description: 'Developing automated solutions for end-to-end machine learning workflows, from modeling to deployment, to simplify complex processes.'
  },
  {
    title: 'Deep Learning for Drone Navigation and Security',
    description: 'Using deep learning and AI to improve autonomous drone navigation, enhance security, and enable advanced analysis capabilities.'
  },
  {
    title: 'AI-Powered Intelligent Irrigation Systems',
    description: 'Designing IoT-enabled irrigation systems powered by AI to optimize water usage and improve agricultural productivity.'
  },
  {
    title: 'Blockchain-Based Logistics Traceability',
    description: 'Implementing blockchain solutions to ensure traceability, security, and transparency in supply chain operations.'
  },
  {
    title: 'AI-Driven Blended Learning Platforms',
    description: 'Creating innovative educational platforms that leverage AI for optimized scheduling and enhanced user-centric design.'
  },
  {
    title: 'Security of MANET Routing Protocols',
    description: 'Analysis and enforcement of the security of MANET routing protocols to protect against various network attacks.'
  },
  {
    title: 'Optimization of Routing in VANETs and UAV Networks',
    description: 'Development of optimized routing strategies for Vehicle Ad-Hoc Networks (VANETs) and Unmanned Aerial Vehicle (UAV) networks.'
  },
  {
    title: 'Big Data Utilization for Data Optimization and Performance Enhancement in VANETs',
    description: 'Leveraging Big Data to optimize data handling and improve performance in VANETs, including accident prediction, traffic forecasting, and more.'
  }  
];

export default function ResearchSubjects() {
  return (
    <div className="px-6 lg:px-20 py-12 bg-gray-50 space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-primary-600 mb-8">Research Subjects</h1>
        <p className="text-lg text-primary-700 max-w-4xl mx-auto leading-relaxed">
          Discover the key research areas our team focuses on, addressing real-world challenges with advanced technologies and innovative solutions.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchSubjects.map((subject, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-primary-300">
            <h2 className="text-2xl font-semibold text-primary-600 mb-4">{subject.title}</h2>
            <p className="text-primary-700 leading-relaxed">{subject.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
