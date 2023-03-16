import { FC } from "react"
import { IUser } from "../store/models/IUser"

interface UserItemProps{
    user: IUser
}

const UserItem:FC<UserItemProps> = ({user}) => {
  return (
    <div className="post">
    {user.id}. {user.name}
    <button>Delete</button>

</div>
  )
}

export default UserItem