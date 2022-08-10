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

export interface Article {
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
}
export interface SingleArticle {
    article: Article;
}
export interface MultipleArticles {
    articles: Article[];
    articlesCount: number;
}
