import { Banner, Button, Icon } from 'components/ReusableComponents';

export const HomePageOurOptions = () => {

    return (
        <section className="home-page__our-categories py-24 bg-[#111110]/0">
            <div className="container">
                <span className="section-mark mb-4">Our categories</span>
                <div className="flex items-end justify-between mb-14">
                    <div className="max-w-[434px]">
                        <h3>Fostering a playful & engaging learning environment</h3>
                    </div>
                    
                    <ul className="control-btn-set flex gap-6">
                        <li>
                            <Button type="button" variant="switchBtn" color="blue"/>
                        </li>
                        <li>
                            <Button type="button" variant="switchBtn" color="blue" inverted/>                                
                        </li>
                    </ul>
                </div>
                
                <ul className="flex gap-8">
                    <li className="basis-96">
                        <Banner variant="horizontalRow" size="large">
                            <Icon name="browser" color="blue" wrapStyle="wrap-normal" wrapColor="blue"/>
                            <h4>Web Development</h4>
                            <p>Classes in development that cover the most recent advancements in web.</p>
                        </Banner>
                    </li>
                    <li className="basis-96">
                        <Banner variant="horizontalRow" size="large">
                            <Icon name="tools" color="blue" wrapStyle="wrap-normal" wrapColor="blue"/>
                            <h4>User Experience</h4>
                            <p>Lessons on design that cover the most recent developments.</p>
                        </Banner>
                    </li>
                    <li className="basis-96">
                        <Banner variant="horizontalRow" size="large">
                            <Icon name="dots" color="blue" wrapStyle="wrap-normal" wrapColor="blue"/>
                            <h4>Marketing</h4>
                            <p>Marketing courses that cover the most recent marketing trends.</p>
                        </Banner>
                    </li>
                </ul>
            </div>
        </section>
    );
};