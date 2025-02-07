import React from "react";
import { Contact } from "..";
import UsersListItem from "./UsersListItem";

function UsersList ({ userData }: { userData: Contact[] }) {
    return (
      <div className="scroll-container">
        <ul className="users-list">
          {userData?.map((user) => (
            <UsersListItem user={user} />
          ))}
        </ul>
      </div>
    )
  }
  
  export default UsersList;