export interface Auth {
	user: {
		email: string;
		password: string;
	};
}
export interface Regis {
	user: {
		username: string;
		email: string;
		password: string;
	};
}
export interface DataAuthRegisReturn {
	user: {
		bio: any;
		email: string;
		image: null | string;
		token: string;
		username: string;
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
		username?: string;
		email?: string;
		bio?: string;
		image?: string;
		password?: string;
	};
}

export interface Personal {
	profile: {
		username: string;
		bio: string;
		image: string;
		following: boolean;
	};
}
