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

export interface AddCommentDetail {
	comment: {
		body: string;
	};
}
export interface AddComment {
	slug: string;
	data: {
		comment: {
			body: string;
		};
	};
}

export interface CommentUpdateReturn {
	comment: Comment;
}
export interface DeleteComment {
	slug: string;
	id: number;
}
