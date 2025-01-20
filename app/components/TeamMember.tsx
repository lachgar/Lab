import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  researchGate?: string; // Optional ResearchGate link
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, researchGate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${name} profile picture`}
        width={120}
        height={120}
        className="rounded-full mb-4 border-4 border-primary-200"
      />
      <h2 className="text-xl font-semibold text-primary-800">{name}</h2>
      <p className="text-secondary-600 mt-2">{role}</p>
      {researchGate && (
        <a
          href={researchGate}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center"
          aria-label={`${name}'s ResearchGate profile`}
        >
          <Image
            src="researchgate.png" // Update this path to the actual location of your PNG file
            alt="ResearchGate"
            width={24}
            height={24}
            className="mr-2"
          />
        </a>
      )}
    </div>
  );
};

export default TeamMember;
