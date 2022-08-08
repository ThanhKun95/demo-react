export interface CreateArticle {
    article: {
        title: string;
        description: string;
        body: string;
        tagList: string[];
    };
}
export interface UpdateArticle {
    article: {
        title: string;
    };
}

export interface DeleteArticle {
    comment: {
        body: string;
    };
}

export interface SingleArticle {
    article: {
        slug: string;
        title: string;
        description: string;
        body: string;
        tagList: string[];
        createdAt: string;
        updatedAt: string;
        favorited: boolean;
        favoritesCount: 0;
        author: {
            username: string;
            bio: string;
            image: string;
            following: boolean;
        };
    };
}
export interface MultipleArticles {
    articles: [
        {
            slug: string;
            title: string;
            description: string;
            body: string;
            tagList: string[];
            createdAt: string;
            updatedAt: string;
            favorited: boolean;
            favoritesCount: number;
            author: {
                username: string;
                bio: string;
                image: string;
                following: boolean;
            };
        },
        {
            slug: string;
            title: string;
            description: string;
            body: string;
            tagList: string[];
            createdAt: string;
            updatedAt: string;
            favorited: boolean;
            favoritesCount: number;
            author: {
                username: string;
                bio: string;
                image: string;
                following: string;
            };
        },
    ];
    articlesCount: number;
}
