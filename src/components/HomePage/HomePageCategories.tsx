import { Button, CoursesList, TabBar, CourseListPreloader, CoursesEmptyPlugIn } from 'components';
import { useFiltredCoursesByCategory } from 'hooks';
import { getRandomItemsFromArray } from 'heplers';
import { Link } from 'react-router-dom';

export const HomePageCategories = () => {

    const result = useFiltredCoursesByCategory();
    
    return (
        <section id="home-categories" className="py-24 background-custom-gradient-black">
            <div className="container overflow-hidden">
                <span className="section-mark mb-4">
                    Categories
                </span>
                <div className="max-w-[448px] mb-16">
                    <h3 className="text-White">Train your team with real world skills and knowledge</h3>
                </div>
                
                <div className="categories__tab-bar mb-14">
                    <TabBar onClick={result.setCategory}/>
                </div>
               
                {result.data && result.data.length !== 0 && !result.isLoading && <CoursesList data={getRandomItemsFromArray(result.data, 4)} isDark/>}
                {result.data && result.data.length === 0 && !result.isLoading && <CoursesEmptyPlugIn textStyle="light"/>}
                {result.isLoading && <CourseListPreloader isDark/>}

                <div className="categories__cta mt-18">
                    <Link to={'/library'}>
                        <Button type="button" variant="primary" size="normal" color="yellow">Get Started</Button>
                    </Link>
                    <a href="#home-hero" className="nav-link-yellow ml-9">Learn more</a>
                </div>
            </div>
        </section>
    );
};