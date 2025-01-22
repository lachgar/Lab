'use client';

import { useState } from 'react';
import PublicationItem from '../components/PublicationItem';
import Pagination from '../components/Pagination';

const publications = [
  {
    "title": "Combining IoMT and XAI for Enhanced Triage Optimization: An MQTT Broker Approach with Contextual Recommendations for Improved Patient Priority Management in Healthcare",
    "authors": "O. Stitini, F. Ouakasse, S. Rakrak, S. Kaloun, O. Bencharef",
    "journal": "International Journal of Online and Biomedical Engineering",
    "year": 2024,
    "volume": 20,
    "issue": 7,
    "pages": "145–162"
  },
  {
    "title": "An improved self-training model to detect fake news categories using multi-class classification of unlabeled data: fake news classification with unlabeled data",
    "authors": "O. Stitini, S. Kaloun, O. Bencharef, S. Qassimi",
    "journal": "International Journal of Systematic Innovation",
    "year": 2024,
    "volume": 8,
    "issue": 1,
    "pages": "11–26"
  },
  {
    "title": "Towards a robust solution to mitigate all content-based filtering draw-backs within a recommendation system",
    "authors": "O. Stitini, S. Kaloun, O. Bencharef",
    "journal": "International Journal of Systematic Innovation",
    "year": 2023,
    "volume": 7,
    "issue": 7,
    "pages": "89–111"
  },
  {
    "title": "Towards Ideal and Efficient Recommendation Systems Based on the Five Evaluation Concepts Promoting Serendipity",
    "authors": "O. Stitini, I. García-Magariño, S. Kaloun, O. Bencharef",
    "journal": "Journal of Advances in Information Technology",
    "year": 2023,
    "volume": 14,
    "issue": 4,
    "pages": "701–717"
  },
  {
    "title": "A Context-Aware Framework to Manage the Priority of Injured Persons Arriving at Emergencies",
    "authors": "F. Ouakasse, O. Stitini, S. Rakrak",
    "journal": "International Journal of Online and Biomedical Engineering",
    "year": 2023,
    "volume": 19,
    "issue": 8,
    "pages": "144–162"
  },
  {
    "title": "Towards the Detection of Fake News on Social Networks Contributing to the Improvement of Trust and Transparency in Recommendation Systems: Trends and Challenges",
    "authors": "O. Stitini, S. Kaloun, O. Bencharef",
    "journal": "Information (Switzerland)",
    "year": 2022,
    "volume": 13,
    "issue": 3,
    "pages": "128"
  },
  {
    "title": "An Improved Recommender System Solution to Mitigate the Over-Specialization Problem Using Genetic Algorithms",
    "authors": "O. Stitini, S. Kaloun, O. Bencharef",
    "journal": "Electronics (Switzerland)",
    "year": 2022,
    "volume": 11,
    "issue": 2,
    "pages": "242"
  },
  {
    "title": "How Can We Analyse Emotions on Twitter During an Epidemic Situation? A Features Engineering Approach to Evaluate People's Emotions During the COVID-19 Pandemic",
    "authors": "O. Stitini, S. Kaloun, O. Bencharef",
    "journal": "Journal of Tianjin University Science and Technology",
    "year": 2022
  },
  {
    "title": "Integrating contextual information into multi-class classification to improve the context-aware recommendation",
    "authors": "O. Stitini, S. Kaloun, O. Bencharef",
    "journal": "Procedia Computer Science",
    "year": 2021,
    "volume": 198,
    "pages": "311–316"
  },
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
  },
  {
    "title": "Enhancing OLSR Protocol by an Advanced Greedy Forwarding Mechanism for VANET in Smart Cities",
    "authors": "My Driss LAANAOUI, Said RAGHAY",
    "journal": "Smart Cities",
    "year": 2022,
    "volume": 5,
    "issue": 2,
    "pages": "650–667"
  },
  {
    "title": "Effect of Black Hole Attack in Different Mobility Models of MANET using OLSR Protocol",
    "authors": "My Driss LAANAOUI et al.",
    "journal": "International Journal of Information and Computer Security",
    "year": 2022,
    "volume": 18,
    "issue": "1–2",
    "pages": "219–235"
  },
  {
    "title": "Impact of Image Compression on the Performance of Steel Surface Defect Classification with a CNN",
    "authors": "My Driss LAANAOUI et al.",
    "journal": "Journal of Sensor and Actuator Networks",
    "year": 2021,
    "volume": 10,
    "issue": 4,
    "pages": "3"
  },
  {
    "title": "New MPR Computation for Securing OLSR Routing Protocol Against Single Black Hole Attack",
    "authors": "My Driss LAANAOUI et al.",
    "journal": "Wireless Personal Communications",
    "year": 2021,
    "volume": 117,
    "issue": 2,
    "pages": "525–544"
  },
  {
    "title": "Big Data Traffic Management in Vehicular Ad-Hoc Network",
    "authors": "My Driss LAANAOUI et al.",
    "journal": "International Journal of Electrical and Computer Engineering (IJECE)",
    "year": 2021,
    "volume": 11,
    "issue": 4,
    "pages": ""
  },
  {
    "title": "The Quality Factor for Detecting Node Isolation Attack in Mobile Ad Hoc Networks Using OLSR Protocol",
    "authors": "My Driss LAANAOUI et al.",
    "journal": "International Journal of Internet Protocol Technology",
    "year": 2021,
    "volume": 14,
    "issue": 4,
    "pages": "197–204"
  },
  {
    "title": "Evaluation of OLSR and AODV Routing Protocols Against Worm Hole Attack in Random Waypoint Mobility",
    "authors": "My Driss LAANAOUI et al.",
    "journal": "International Journal of Electrical, Electronics and Data Communication (IJEEDC)",
    "year": 2019,
    "volume": "",
    "issue": "",
    "pages": ""
  },
  {
    "title": "The Use of a Genetic Algorithm to Alleviate the Limited Content Issue in a Content-Based Recommendation System",
    "authors": "Stitini, O., Kaloun, S., Bencharef, O.",
    "journal": "Lecture Notes in Networks and Systems",
    "year": 2023,
    "volume": "635 LNNS",
    "issue": "",
    "pages": "776–782"
  },
  {
    "title": "INVESTIGATING DIFFERENT SIMILARITY METRICS USED IN VARIOUS RECOMMENDER SYSTEMS TYPES: SCENARIO CASES",
    "authors": "Stitini, O., Kaloun, S., Bencharef, O.",
    "journal": "International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences - ISPRS Archives",
    "year": 2022,
    "volume": "48(4/W3-2022)",
    "issue": "",
    "pages": "187–193"
  },
  {
    "title": "The Recommendation of a Practical Guide for Doctoral Students Using Recommendation System Algorithms in the Education Field",
    "authors": "Stitini, O., Kaloun, S., Bencharef, O.",
    "journal": "Lecture Notes in Networks and Systems",
    "year": 2021,
    "volume": "183",
    "issue": "",
    "pages": "",
    "doi": "10.1007/978-3-030-66840-2_19"
  },
  {
    "title": "Artificial Intelligence in Predicting the Spread of Coronavirus to Ensure Healthy Living for All Age Groups",
    "authors": "Oumaima, S., Soulaimane, K., Omar, B.",
    "journal": "Advances in Science, Technology & Innovation",
    "year": 2021,
    "volume": "",
    "issue": "",
    "pages": "",
    "doi": "10.1007/978-3-030-53440-0_2"
  },
  {
    "title": "Latest Trends in Recommender Systems applied in the medical domain: A Systematic Review",
    "authors": "Stitini Oumaima, Kaloun Soulaimane, Bencharef Omar",
    "journal": "Proceedings of the 3rd International Conference on Networking, Information Systems & Security (NISS '20)",
    "year": 2020,
    "volume": "",
    "issue": "",
    "pages": "Article 41, 1–12",
    "doi": "10.1145/3386723.3387860"
  }
];


const ITEMS_PER_PAGE = 5;

export default function Publications() {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleYears, setVisibleYears] = useState<Record<number, boolean>>({});

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const groupedPublications = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, typeof publications>);

  const years = Object.keys(groupedPublications).sort((a, b) => Number(b) - Number(a));
  const currentPublications = years.slice(indexOfFirstItem, indexOfLastItem);

  const toggleYearVisibility = (year: number) => {
    setVisibleYears(prev => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="px-6 lg:px-20 py-12 bg-gray-50 space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-primary-600 mb-8">Our Publications</h1>
        <p className="text-lg text-primary-700 max-w-4xl mx-auto leading-relaxed">
          Discover our latest research contributions, spanning multiple disciplines and published in prestigious journals.
        </p>
      </section>
      <div className="space-y-8">
        {currentPublications.map(year => (
          <div key={year} className="bg-white p-6 rounded-lg shadow-md border border-primary-300">
            <h2
              onClick={() => toggleYearVisibility(Number(year))}
              className="text-2xl font-semibold mb-4 text-primary-600 cursor-pointer hover:underline"
            >
              {year}
            </h2>
            {visibleYears[Number(year)] && (
              <div className="space-y-4">
                {groupedPublications[Number(year)].map((publication, index) => (
                  <PublicationItem key={index} {...publication} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={years.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
