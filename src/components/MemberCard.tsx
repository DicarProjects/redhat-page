import profile from '../assets/img/user.jpg';

interface MembersProps {
  name: string,
  position: string
}

export const MemberCard = ({name, position}: MembersProps) => {
  return (
    <div className='w-10/12 mx-auto'>
      <img src={profile} alt="Profile image" className='object-cover h-52 w-full rounded-md hover:cursor-pointer' />
      <p className="text-xl mt-2">{name}</p>
      <p className='text-md text-gray-700'>{position}</p>
    </div>
  )
}
