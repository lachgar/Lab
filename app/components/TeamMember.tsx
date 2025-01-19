import Image from 'next/image'

interface TeamMemberProps {
  name: string
  role: string
  image: string
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg">
      <Image src={image || "/placeholder.svg"} alt={name} width={120} height={120} className="rounded-full mb-4 border-4 border-primary-200" />
      <h2 className="text-xl font-semibold text-primary-800">{name}</h2>
      <p className="text-secondary-600 mt-2">{role}</p>
    </div>
  )
}

export default TeamMember

