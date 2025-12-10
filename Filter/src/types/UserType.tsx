export interface UserType {
    login: {
        uuid: string;
    };
    name: {
        first: string;
        last: string;
    };
    gender: string;
    email: string;
    picture: {
        thumbnail: string;
        medium: string;
        large: string;
    };
}
