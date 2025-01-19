const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">INSIGHT Lab</h3>
            <p className="text-sm text-primary-100">Intelligent Systems and Global High-Tech Laboratory</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-200 transition duration-150 ease-in-out">Privacy Policy</a>
            <a href="#" className="hover:text-primary-200 transition duration-150 ease-in-out">Terms of Service</a>
            <a href="#" className="hover:text-primary-200 transition duration-150 ease-in-out">Contact</a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-primary-500 text-sm text-primary-200">
          <p>&copy; {new Date().getFullYear()} INSIGHT Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

