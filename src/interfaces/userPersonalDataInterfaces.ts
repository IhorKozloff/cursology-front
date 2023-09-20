export interface userLessonData {
    lessonId: string;
    progressTime: number;
    isWatched: boolean;
    isOnPause: boolean;
    isOnPlay: boolean;
}

export interface IUserAuth {
    email: string;
    password: string;
    name: string;
    token: string;
    liked_courses_ids: string[],
    lessonsProgress: userLessonData[],
}

export interface ServerRegisterResponse {
    user: Pick<IUserAuth, 'name' | 'email'>;
    message: string;
}

export interface IServerLoginResponse {
    status: number;
    result: Omit<IUserAuth, 'password'>
}
export type TransformedLoginServerResponse = Omit<IUserAuth, 'password'>
