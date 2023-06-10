export interface AppInfoModel {
    App: string;
    Ver: string;
    API_URL: string;
}

export interface PostsModel {
    id?: number,
    firstName: string,
    title: string,
    body: string,
    reactions: number,
    timestamp?: string,
    userId?: {},
    tags?: [],
    comments?: [],
}

