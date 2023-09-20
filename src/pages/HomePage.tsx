import { HomePageHero, HomePageAbout, HomePageOurOptions, HomePageCategories, HomePageFeatures, HomePageTestimonials, Footer } from 'components';
import { Button } from 'components';
import { Link } from 'react-router-dom';

export default function HomePage () {

    return (
        <>
            <HomePageHero/>
            <HomePageAbout/>
            <HomePageOurOptions/>
            <HomePageCategories/>
            <HomePageFeatures/>
            <HomePageTestimonials/>
            <section className="home-page__cta pt-31.25 relative">
                <div className="container 
                absolute left-1/2 top-0 -translate-x-1/2
                rounded bg-YellowLight pt-14 pb-18 pl-14 pr-33.5 flex items-center justify-between">
                    <div>
                        <h3>Join now for <br></br> get special features!</h3>
                        <p className="text-style__body2--regular text-Black mt-4.5">Let's subscribe with us and find the fun.</p>
                    </div>
                    <Link to="library">
                        <Button type="button" variant="primary" size="huge" color="black">Get started</Button>
                    </Link>
                </div>
            </section>
            <Footer homepage/>
        </>
    );
}