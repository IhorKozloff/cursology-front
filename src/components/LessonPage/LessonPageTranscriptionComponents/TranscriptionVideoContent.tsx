import { chunk, capitalize } from 'lodash';
import { ILesson } from 'interfaces';

interface IProps {
    lessTypeVideoData: ILesson
}

export const TranscriptionVideoContent = ({lessTypeVideoData: data }: IProps) => {

    return (
      
        <>
            <div className="pb-8 mb-8 border-b border-Black/10">
                <h4 className="mb-8">Transcription</h4>
                <ul>
                    {data?.lesson_transcription.map((item, index) => {
                        return (
                            <li key={index} className="mb-8 last:mb-0">
                                <p className="text-style__body2--regular">{item}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="subtitles">
                {data?.lesson_subtitle.length === 0 && <h4>Sorry, but there are no subtitles for this lesson.</h4>}

                {data?.lesson_subtitle.length !== 0 &&
                    <>
                        <h4>Subtitles</h4>
                        <div className="pt-8 relative">
                            <div className="h-20 w-full subtitles-transparent-effect absolute top-0 bot-0"></div>
                        
                            <ul className="h-[816px] overflow-y-scroll">
                            
                                {chunk(data?.lesson_subtitle, 2).map((item, index) => {
                                    return (
                                        <li key={index} className="[&_p]:inline mb-3 last:mb-0 first:mt-5">
                                            <p>
                                                {index === 0 ? capitalize(item[0]) : item[0]}
                                            </p>
                                            <p className="ml-2">
                                                {item[1]}
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </>
                } 
            </div>
        </>
    
    );
};