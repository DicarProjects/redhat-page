interface MembersProps {
  name: string;
  position: string;
  imageSrc: string;
}

export const MemberCard = ({ name, position, imageSrc }: MembersProps) => {
  return (
    <div className='w-10/12 h-[400px] mx-auto'>
      <div className="relative overflow-hidden rounded-md">
        <img 
        src={imageSrc} 
        alt="Profile image" 
        className='object-cover w-full rounded-md hover:cursor-pointer transition-transform transform hover:scale-110' 
        />
      </div>
      <p className="text-xl mt-2 font-sans">{name}</p>
      <p className='text-md text-gray-700 font-thin font-serif'>{position}</p>
    </div>
  );
};
