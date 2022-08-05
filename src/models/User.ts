export interface Authentication {
    user: {
        email: string;
        password: string;
    };
}
export interface Registration {
    user: {
        username: string;
        email: string;
        password: string;
    };
}

export interface Users {
    user: {
        email: string;
        token: string;
        username: string;
        bio: string;
        image: string | null;
    };
}

export interface UpdateUser {
    user: {
        email: string;
        bio: string;
        image: string;
    };
}

export interface Profile {
    profile: {
        username: string;
        bio: string;
        image: string;
        following: boolean;
    };
}
