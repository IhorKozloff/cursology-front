import { Button, Icon, RatingStars, Player } from 'components';
import { minutestoHoursConverter } from 'heplers';
import { useState } from 'react';
import { useCourseByIdData } from 'hooks/useCourseByIdData';
import { LikeBar } from './LikeBar';

export const CourseByIdHero = () => {

    const { data } = useCourseByIdData();
   
    const [showVideo, setShowVideo] = useState(false);

    const handleBtnClick = () => {
        setShowVideo(true);
    };

    const {h: hours, m: minutes } = minutestoHoursConverter(data?.course_general_info.total_time_minutes);

    const allLessons = data?.course_content.flatMap((item) => item.lessons);

    const amountOfArticles = allLessons?.filter(item => item.lesson_type === 'article').length;

    const downloadableResources = allLessons?.reduce((total, item) => {
        if (item.lesson_attachment.files.length !== 0) {
            return total + item.lesson_attachment.files.length;
        }
        return total;
    },0);
        
    return (
        <section className="pt-14 pb-18 background-custom-gradient-black">
            <div className="container relative">

                <div className="flex justify-between mb-11">
                    <div className="border-b border-White/10 pt-4 w-[664px] pr-[112px] pb-8">
                        <h3 className="mb-6 text-White">{data?.title}</h3>
                        <p className="text-style__body2--regular text-White">{data?.course_general_info.course_overview_description}</p>

                        <div className="flex gap-8 items-center mt-[50px]">
                            <Button type="button" variant="primary" size="normal" color="yellow">Enroll for free</Button>
                            {data?.popularity && <RatingStars rating={data.popularity}/>}
                            <span className="text-White">{data?.author}</span>
                            
                        </div>
                        <LikeBar likes={data?.likes}/>
                    </div>

                    <div className="video w-110 h-73.5 item-self bg-White/5 flex-center-center  relative">
                        {showVideo === false && 
                            <Button type="button" variant="secondary" size="normalShortcut" color="yellow" onClick={handleBtnClick}>
                                <div className="flex-center-center gap-2">
                                    <Icon name="play" color="yellow"/>
                                    <span>Watch preview</span>
                                </div>
                            </Button>
                        }
                        {showVideo && <Player link={`https://www.youtube.com/watch?v=${data?.preview_video_path}`}/>}
                    </div>
                </div>

                <div className="w-[560px]">
                    <h4 className="mb-8 text-White">This course includes:</h4>
                    <ul className="
                            text-Grey grid grid-cols-2 gap-x-18 gap-y-6
                            [&_li]:flex [&_li]:items-center [&_li]:gap-3 [&_span]:text-White">
                        <li>
                            <Icon name="play"/>
                            <span>{`${hours}.${minutes}`} hours on-demand video</span>
                        </li>
                        {downloadableResources !== 0 && <li>
                            <Icon name="download"/>
                            <span>
                                <span className="mr-1">
                                    {downloadableResources}
                                </span>
                                downloadable resources
                            </span>
                        </li>}
                        {amountOfArticles !== 0 && <li>
                            <Icon name="file"/>
                            <span>
                                <span className="mr-1">{amountOfArticles}</span> 
                                article
                            </span>
                        </li>}
                        {data?.course_general_info.certificate.length !== 0 && <li>
                            <Icon name="certificate"/>
                            <span>{data?.course_general_info.certificate.length} Certificate of completion</span>
                        </li>}
                    </ul>
                </div>
            </div>
        </section>
    );
};