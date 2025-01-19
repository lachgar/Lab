import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-primary-400 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold mb-4 md:mb-0 text-black">
            INSIGHT Lab
          </Link>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-1 md:space-x-4">
              <li><Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-primary-300 hover:text-primary-800 transition duration-150 ease-in-out">Home</Link></li>
              <li><Link href="/team" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-primary-300 hover:text-primary-800 transition duration-150 ease-in-out">Team</Link></li>
              <li><Link href="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-primary-300 hover:text-primary-800 transition duration-150 ease-in-out">Projects</Link></li>
              <li><Link href="/publications" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-primary-300 hover:text-primary-800 transition duration-150 ease-in-out">Publications</Link></li>
              <li><Link href="/subjects" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-primary-300 hover:text-primary-800 transition duration-150 ease-in-out">Subjects</Link></li>
              <li><Link href="/doctorants" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-primary-300 hover:text-primary-800 transition duration-150 ease-in-out">Doctoral Students</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

