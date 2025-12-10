import { User } from "./User";
import type { UserType } from "../types/UserType";
import "./../App.css"

interface UsersListProps {
    users: UserType[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
    return (
        <div className="userList">
            {users.map((user) => (
                <User key={user.login.uuid} {...user} />
            ))}
        </div>
    );
};
