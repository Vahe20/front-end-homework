import type { UserType } from "../types/UserType";

export const User = ({ name, gender, picture, email }: UserType) => {
    return (
        <div>
            <img src={picture.thumbnail} alt={name.first} />
            <h3>{name.first} {name.last}</h3>
            <p>{email}</p>
            <p>{gender}</p>
        </div>
    );
};
