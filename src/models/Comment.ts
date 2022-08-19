export interface Comment {
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
}

export interface SingleComment {
	comment: Comment;
}

export interface MultipleComments {
	comments: Comment[];
}

export interface ListOfTags {
	tags: string[];
}

export interface AddComment {
	comment: {
		body: string;
	};
}
