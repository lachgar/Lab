import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-primary-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-center space-x-1 md:space-x-4">
          <li><Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-500 hover:text-white transition duration-150 ease-in-out">Home</Link></li>
          <li><Link href="/team" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-500 hover:text-white transition duration-150 ease-in-out">Team</Link></li>
          <li><Link href="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-500 hover:text-white transition duration-150 ease-in-out">Projects</Link></li>
          <li><Link href="/publications" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-500 hover:text-white transition duration-150 ease-in-out">Publications</Link></li>
          <li><Link href="/subjects" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-500 hover:text-white transition duration-150 ease-in-out">Subjects</Link></li>
          <li><Link href="/doctorants" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-500 hover:text-white transition duration-150 ease-in-out">Doctoral Students</Link></li>
          <li><Link href="/graduated-students" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-500 hover:text-white transition duration-150 ease-in-out">Graduated Students</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

