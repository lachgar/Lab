const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-secondary-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Research Team. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-300 transition duration-150 ease-in-out">Privacy Policy</a>
            <a href="#" className="hover:text-primary-300 transition duration-150 ease-in-out">Terms of Service</a>
            <a href="#" className="hover:text-primary-300 transition duration-150 ease-in-out">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

