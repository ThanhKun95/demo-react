export interface SingleComment {
    comment: {
        id: number;
        createdAt: string;
        updatedAt: string;
        body: string;
        author: {
            username: string;
            bio: string;
            image: string;
            following: boolean;
        };
    };
}

export interface MultipleComments {
    comments: {
        id: number;
        createdAt: string;
        updatedAt: string;
        body: string;
        author: {
            username: string;
            bio: string;
            imag: string;
            following: boolean;
        };
    }[];
}

export interface ListOfTags {
    tags: string[];
}
