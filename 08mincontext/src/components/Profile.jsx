import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext);   // data 

    // if(!user) return <div>Please Login</div>

  return (
    <div>
        {/* Welcome {user.username} */}

        {user.username ?  `Welcome ${user.username}` : 'Please Login'  }
    </div>
  )
}

export default Profile