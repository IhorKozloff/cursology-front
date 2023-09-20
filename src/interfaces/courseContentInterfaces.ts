
export interface IPosterPath {
    ratio_normal: string;
    ratio_double: string;
    ratio_tripple: string;
}
export interface ICertificate {
    certificate_title: string;
    certificate_description: string;

}
export interface ICategories {
    primary_direction: string[];
    secondary_direction: string[];
}

export interface ICourseGeneralInfo {
        total_sections: number;
        total_lessons: number;
        total_time_minutes: number;
        learning_achivements: string[];
        course_overview_description: string;
        certificate: ICertificate[];
    }

export interface IFile {
        file_name: string;
        file_path: string;
        file_size: string;
    }

export interface ILessonAttachment {
        files: IFile[];
        multiply_files_path: string;
    }

export interface IContent {
        content_type: string;
        content_value: string;
    }

export interface IArticleContent {
        title: string;
        content: IContent[];
    }

export interface ILesson {
        lesson_type: string;
        lesson_title: string;
        lesson_number: number;
        lesson_time_minutes: number;
        lesson_preview_text: string;
        lesson_transcription: string[];
        lesson_subtitle: string[];
        lesson_attachment: ILessonAttachment;
        lesson_video_path: string;
        article_content: IArticleContent[];
    }

export interface ICourseContent {
        part_title: string;
        part_total_lessons: number;
        part_total_time_minutes: number;
        lessons: ILesson[];
    }

export interface ICourseContentResponse {
        _id: string;
        title: string;
        popularity: number;
        likes: number;
        poster_path: IPosterPath;
        author: string;
        preview_video_path: string;
        popularity_tags: string[];
        categories: ICategories;
        course_general_info: ICourseGeneralInfo;
        course_content: ICourseContent[];
        
    }
export interface ICourseByIdResponse {
    result: ICourseContentResponse;
    code: number;
    status: string;
}

export type coursePreviewData = Pick<ICourseContentResponse, 'title' | 'popularity' | 'likes' | 'preview_video_path' | 'author'> & Pick<ICourseGeneralInfo, 'total_time_minutes' | 'course_overview_description'>
export type courseContentData = Pick<ICourseContentResponse, 'course_content' | 'course_general_info'> 
export type LessonTranscriptionType = Pick<ILesson, 'lesson_transcription' | 'lesson_subtitle' | 'lesson_attachment'>
