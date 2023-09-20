import { TranscriptionArticleContent, TranscriptionVideoContent, TranscriptionAttachments } from './LessonPageTranscriptionComponents';
import { useCurrentLessonData } from 'hooks';

export const LessonPageTranscription = () => {
    
    const data = useCurrentLessonData();

    return (
        <section className="py-18">
            <div className="container flex items-start gap-40">
            
                <div className="w-[652px]">
                    {data?.currentLesson?.lesson_type === 'video' && <TranscriptionVideoContent lessTypeVideoData={data.currentLesson}/>}

                    {data?.currentLesson?.lesson_type === 'article' && <TranscriptionArticleContent lessTypeArticleData={data.currentLesson.article_content}/>}
                </div>

                {data?.currentLesson && data.currentLesson.lesson_attachment.files.length !== 0 && <TranscriptionAttachments attachments={data.currentLesson?.lesson_attachment}/>}
            </div>
        </section>
    );
};