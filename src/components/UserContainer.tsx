import { useState } from "react";
import { userAPI } from "../services/UserServices";
import UserItem from "./UserItem";

const UserContainer = () => {
  const [limit, setLimit] = useState(3);
  const {
    data: users,
    error,
    isLoading,
  } = userAPI.useFetchAllUsersQuery(limit);
  return (
    <div>
      <div className="post__list">        
        <div className="title__head">
          <h1>Users:</h1>
          <button onClick={() => setLimit(Number(prompt()))}>Sort</button>
        </div>
        {isLoading && <h1>Loading...!</h1>}
        {error && <h1>Loading failure!</h1>}
        {users && users.map((user) => <UserItem user={user} key={user.id} />)}
      </div>
    </div>
  );
};

export default UserContainer;
