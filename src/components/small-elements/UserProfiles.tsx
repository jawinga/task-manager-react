import type { User } from '../../models/User'

interface UserProfilesProps {

    users: User[];


}
    

const UserProfiles = ({users}:UserProfilesProps) => {
  return (
    <div className='list-avatars'>{users.map((u)=>{

        return <img key={u.id} src={u.avatarUrl || 'https://via.placeholder.com/150'} alt={u.name} className="user-profile-avatar" />

    })}</div>
  )
}

export default UserProfiles