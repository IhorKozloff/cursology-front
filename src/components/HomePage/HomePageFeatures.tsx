import { Banner, Icon } from 'components/ReusableComponents';

export const HomePageFeatures = () => {

    return (
        <section className="home-page__features py-24 bg-Black/2">
            <div className="container flex gap-21 justify-between items-start">
                
                <div>
                    <span className="section-mark mb-4">Our adventage features</span>
                    <h3 className="mb-6">Why must choose learningPlatform</h3>
                    <p className="text-style__body2--regular text-Grey mb-9">LearningPlatform is biggest platform to learning anything to improve your skill with 350+ onlinevideo course</p>
                    <ul className="pt-9 border-t border-Black/10 flex gap-9">
                        <li>
                            <h4>350+</h4>
                            <span className="text-style__body3--regular text-Grey">Courses</span>
                        </li>
                        <li>
                            <h4>16</h4>
                            <span className="text-style__body3--regular text-Grey">Categories</span>
                        </li>
                        <li>
                            <h4>20k+</h4>
                            <span className="text-style__body3--regular text-Grey">Students</span>
                        </li>
                    </ul>
                </div>

                <ul className="feature-list max-w-[800px] flex gap-8 flex-wrap">
                    <li className="basis-[384px]">
                        <Banner variant="horizontalCol" size="large">
                            <Icon name="flame" color="blue" wrapStyle="wrap-round-increase" wrapColor="blue"/>
                            <h4>Lifetime Access</h4>
                            <p>Only buy one time you can watch it anytime, any where, loremipsum dolot sit amet</p>
                        </Banner>
                    </li>
                    <li className="basis-[384px]">
                        <Banner variant="horizontalCol" size="large">
                            <Icon name="school" color="blue" wrapStyle="wrap-round-increase" wrapColor="blue"/>
                            <h4>Expert Teachers</h4>
                            <p>Only buy one time you can watch it anytime, any where, lorem ipsum dolot sit amet</p>
                        </Banner>
                    </li>
                    <li className="basis-[384px]">
                        <Banner variant="horizontalCol" size="large">
                            <Icon name="rocket" color="blue" wrapStyle="wrap-round-increase" wrapColor="blue"/>
                            <h4>Practical Learning</h4>
                            <p>Only buy one time you can watch it anytime, any where, lorem ipsum dolot sit amet</p>
                        </Banner>
                    </li>
                    <li className="basis-[384px]">
                        <Banner variant="horizontalCol" size="large">
                            <Icon name="play" color="blue" wrapStyle="wrap-round-increase" wrapColor="blue"/>
                            <h4>Video Lessons</h4>
                            <p>Only buy one time you can watch it anytime, any where, lorem ipsum dolot sit amet</p>
                        </Banner>
                    </li>
                </ul>
            </div>
        </section>
    );
};