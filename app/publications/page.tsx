'use client'

import { useState } from 'react'
import PublicationItem from '../components/PublicationItem'
import Pagination from '../components/Pagination'

const publications = [
  { title: 'Advances in Quantum Computing', authors: 'Smith, J., Doe, J.', journal: 'Nature Quantum', year: 2023 },
  { title: 'AI-driven Healthcare: A Comprehensive Review', authors: 'Brown, E., Johnson, L.', journal: 'Medical AI Journal', year: 2022 },
  { title: 'Sustainable Energy Storage Solutions', authors: 'Doe, J., Lee, S.', journal: 'Renewable Energy', year: 2023 },
  { title: 'Machine Learning in Climate Modeling', authors: 'Garcia, M., Wilson, K.', journal: 'Environmental Science & Technology', year: 2022 },
  { title: 'Neuroplasticity and Cognitive Enhancement', authors: 'Taylor, R., Anderson, P.', journal: 'Neuroscience Frontiers', year: 2023 },
  { title: 'Advancements in CRISPR Gene Editing', authors: 'Lopez, C., Chen, Y.', journal: 'Genetic Engineering Today', year: 2022 },
  // Add more publications as needed
]

const ITEMS_PER_PAGE = 3

export default function Publications() {
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
  const currentPublications = publications.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary-800">Our Publications</h1>
      <div className="space-y-4 mb-8">
        {currentPublications.map((publication, index) => (
          <PublicationItem key={index} {...publication} />
        ))}
      </div>
      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={publications.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

