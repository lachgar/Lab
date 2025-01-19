interface PublicationItemProps {
  title: string
  authors: string
  journal: string
  year: number
}

const PublicationItem: React.FC<PublicationItemProps> = ({ title, authors, journal, year }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-primary-700">{title}</h2>
      <p className="text-secondary-700 mb-1">{authors}</p>
      <p className="text-secondary-500">{journal}, {year}</p>
    </div>
  )
}

export default PublicationItem

