import { Footer, CourseByIdAchivements } from 'components';
import { CourseByIdHero, CourseByIdContent } from 'components/CourseById';
import { useCourseByIdData } from 'hooks';
import { DotLoader } from 'react-spinners';

export default function CourseByIdPage () {

    const { isLoading } = useCourseByIdData();
    return (
        <>
            {!isLoading &&
                <>
                    <CourseByIdHero />
                    <section className="pt-[40px]">
                        <div className="container flex items-start justify-between">
                            <CourseByIdContent/>
                            <CourseByIdAchivements/>
                        </div>
                    </section>
                    <Footer/>
                </>
            }
            {isLoading && 
                <div className="fixed w-full h-full flex-center-center">
                    <DotLoader color={'#158FFF'} size={120}/>
                </div>
            }
        </>
    );
}