import { ICategories, IPosterPath } from 'interfaces';

export interface ICourseGeneral {
        id: string;
        title: string;
        popularity: number;
        poster_path: IPosterPath;
        author: string;
        popularity_tags: string[];
        categories: ICategories;
        total_lessons: number;
    }

export interface ICoursesGeneralResponse {
        status: string;
        code: number;
        result: ICourseGeneral[];
    }
