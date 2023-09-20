import { Banner, Button } from 'components';
import { Icon } from 'components';
import { CustomIcon } from 'heplers';
import { Link } from 'react-router-dom';

export const HomePageHero = () => {

    return (
        <section id="home-hero" className="home-page__hero bg-Black pt-15 pb-16">
            <div className="container flex justify-between">
                <div className="hero__text max-w-[461px] pt-3">
                    <span className="section-mark mb-6">Eduction</span>
                    
                    <h1 className="text-White mb-5 block">
                        <span className="block">Learn anything</span>
                        <span className="block">to improve your skills</span>
                    </h1>
                    <p className="text-style__body2--regular text-Grey mb-14">
                        LearningPlatform is an online learning site that provides tens of thousands of classes with experienced instructions.
                    </p>
                    <ul className="hero__icon-list flex gap-9 mb-18">
                        <li className="flex items-center gap-4.5">
                            <Icon name="case" wrapStyle="wrap-increase" wrapColor="transparent-white" color="white" autohover/>
                            <span className="text-style__body2--bold text-White">
                                Career-Oriented
                            </span>
                        </li>
                        <li className="flex items-center gap-4.5">
                            <Icon name="bulb" wrapStyle="wrap-increase" wrapColor="transparent-white" color="white" autohover/>
                            <span className="text-style__body2--bold text-White">
                                Creative Thinking
                            </span>
                        </li>
                    </ul>
                    <div className="hero__cta">
                        <Link to={'/library'}>
                            <Button type="button" variant="primary" size="large" color="yellow">Get Started</Button>
                        </Link>
                        <a href="#home-categories" className="nav-link-yellow ml-9">Learn more</a>
                    </div>
                </div>

                <div className=" relative w-[495px] h-[495px] bg-Blue border border-Blue rounded-full">
                    <div className="hero__image w-full h-full rounded-full absolute top-0 left-0 z-20">
                        <ul>
                            <li className="absolute top-[155px] left-0 -translate-x-1/2">
                                <Banner variant="horizontalCol" size="small">
                                    <Icon name="laptop" wrapStyle="wrap-normal" wrapColor="transparent-white" color="white"/>
                                    <h4>2K+</h4>
                                    <p>Video Courses</p>
                                </Banner>
                            </li>
                            <li className="absolute bottom-[40px] -right-[11px]">
                                <Banner variant="horizontalCol" size="small">
                                    <Icon name="users" wrapStyle="wrap-normal" wrapColor="transparent-white" color="white"/>
                                    <h4>250+</h4>
                                    <p>Tutors</p>
                                </Banner>
                            </li>
                            <li className="absolute -top-[19px] -right-[21px]">
                                <Banner variant="vertical" size="small">
                                    <CustomIcon id="ring" className="group-hover:animate-spin-slow"/>
                                    <h4>5K+</h4>
                                    <p>Online Courses</p>
                                </Banner>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full h-full border border-Blue rounded-full absolute -top-5 -left-5 z-10"/>
                    <div className="w-8 h-8 bg-Blue/50 rounded-full absolute bottom-[30px] left-[5px]"/>
                </div>
            </div>
        </section>
    );
};
