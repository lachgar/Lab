'use client'

import { useState } from 'react'
import PublicationItem from '../components/PublicationItem'
import Pagination from '../components/Pagination'

const publications = [
  {
    title: 'decideXpert: Collaborative system using AHP-TOPSIS and fuzzy techniques for multicriteria group decision-making',
    authors: 'Saoud, A., Lachgar, M., Hanine, M., El Dhimni, R., El Azizi, K., & Machmoum, H.',
    journal: 'SoftwareX',
    year: 2025,
    volume: 29,
    pages: '102026'
  },
  {
    title: 'Hybrid Model with Wavelet Decomposition and EfficientNet for Accurate Skin Cancer Classification',
    authors: 'Aboulmira, A., Hrimech, H., Lachgar, M., Hanine, M., Garcia, C. O., Mezquita, G. M., & Ashraf, I.',
    journal: 'Journal of Cancer',
    year: 2025,
    volume: 16,
    issue: 2,
    pages: '506'
  },
  {
    title: 'SkinHealthMate app: An AI-powered digital platform for skin disease diagnosis',
    authors: 'Aboulmira, A., Lachgar, M., Hrimech, H., Camara, A., Elbahja, C., Elmansouri, A., & Hassini, Y.',
    journal: 'Systems and Soft Computing',
    year: 2024,
    volume: 6,
    pages: '200166'
  },
  {
    title: 'Enterprise Architecture Framework Selection for Collaborative Freight Transportation Digitalization: A Hybrid FAHP-FTOPSIS Approach',
    authors: 'Saoud, A., Bellabdaoui, A., Lachgar, M., Hanine, M., & Ashraf, I.',
    journal: 'International Journal of Advanced Computer Science & Applications',
    year: 2024,
    volume: 15,
    issue: 11
  },
  {
    title: 'Skin Diseases Classification with Machine Learning and Deep Learning Techniques: A Systematic Review',
    authors: 'Aboulmira, A., Hrimech, H., & Lachgar, M.',
    journal: 'International Journal of Advanced Computer Science & Applications',
    year: 2024,
    volume: 15,
    issue: 10
  },
  {
    title: 'Blockchain, IoT and AI in logistics and transportation: A systematic review',
    authors: 'Idrissi, Z. K., Lachgar, M., & Hrimech, H.',
    journal: 'Transport Economics and Management',
    year: 2024
  },
  {
    title: 'Holistic approach for selecting chatbot development tools: combining AHP and TOPSIS methodologies',
    authors: 'Lachgar, M., Hrimech, H., Ommane, Y., & Laannaoui, M. D.',
    journal: 'Journal of Business Analytics',
    year: 2024,
    pages: '1-23'
  },
  {
    title: 'SmartBlendEd: Enhancing blended learning through AI-optimized scheduling and user-centric design',
    authors: 'L. A., Ounejjar, M., Lachgar, O., Ouhayou, M. D., Laanaoui, E., Refki, R., Makaoui, & A. Saoud',
    journal: 'SoftwareX',
    year: 2024,
    volume: 27,
    pages: '101891'
  },
  {
    title: 'BlockSupply: Blockchain-based logistics traceability solution',
    authors: 'Z. Kamal. Idrissi, M. Lachgar, H. Hrimech, M. Yousfi, G. Layoune, & H. Hanim',
    journal: 'Software Impacts',
    year: 2024,
    pages: '100666'
  },
  {
    title: 'Zynerator: Bridging Model-Driven Architecture and Microservices for Enhanced Software Development',
    authors: 'Y. Zouani, M. Lachgar.',
    journal: 'Electronics',
    year: 2024,
    volume: 13,
    issue: 12,
    pages: '2237'
  },
  {
    title: 'Version [1.1.0]-[DLDiagnosis: A mobile and web application for diseases classification using Deep Learning]',
    authors: 'M. D. Laanaoui, M. Aatila, M. Lachgar, H. Hrimech, N. Okacha, and R. Assouma.',
    journal: 'SoftwareX',
    year: 2024,
    volume: 26,
    pages: '101745'
  },
  {
    title: 'Enhancing Urban Traffic Management Through Real-Time Anomaly Detection and Load Balancing',
    authors: 'M. D. Laanaoui, M. Lachgar, M. Hanine, H. Hrimech, G. V. Santos, and A. Imran.',
    journal: 'IEEE Access',
    year: 2024
  }
];


const ITEMS_PER_PAGE = 5

export default function Publications() {
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
  
  const groupedPublications = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = []
    }
    acc[pub.year].push(pub)
    return acc
  }, {} as Record<number, typeof publications>)

  const years = Object.keys(groupedPublications).sort((a, b) => Number(b) - Number(a))
  const currentPublications = years.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-primary-800">Our Publications</h1>
      {currentPublications.map(year => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">{year}</h2>
          <div className="space-y-4">
            {groupedPublications[Number(year)].map((publication, index) => (
              <PublicationItem key={index} {...publication} />
            ))}
          </div>
        </div>
      ))}
      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={years.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

