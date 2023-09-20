import { Button, Icon, Banner, Dots } from 'components/ReusableComponents';
import viezhRobert from 'img/home/Viezh Robert.jpg';
import yessicaChristy from 'img/home/Yessica Christy.jpg';
import kimYoungJou from 'img/home/Kim Young Jou.jpg';

export const HomePageTestimonials = () => {

    return (
        <section className="testimonials py-24 bg-Black/0">
            <div className="container">
                <div className="flex items-end justify-between mb-[50px]">
                    <div className="mb-1">
                        <span className="section-mark mb-4">Testimonials</span>
                        <h3 className="mb-6">People say about learning</h3>
                        <p className="text-style__body2--regular text-Grey inline-block max-w-[266px]">Global learning platform that provides international quality learning</p>
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
                <ul className="flex gap-8 pb-9">
                    <li className="basis-96">
                        <Banner variant="verticalInverse" size="large">
                            <div className="text-Grey group-hover:text-Blue">
                                <Icon name="quotes"/>
                            </div>

                            <div className="author flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <img src={viezhRobert} alt="Social media man avatar"/>
                                </div>
                                <span className="text-style__body2--bold text-Black">Viezh Robert</span>
                            </div>

                            <p>
                                I’ve been with learningPlatform in 1 year, I got a lot of new skills. I’m very happy with learningPlatform.
                            </p>
                        </Banner>
                    </li>

                    <li className="basis-96">
                        <Banner variant="verticalInverse" size="large">
                            <div className="text-Grey group-hover:text-Blue">
                                <Icon name="quotes"/>
                            </div>

                            <div className="author flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <img src={yessicaChristy} alt="Social media man avatar"/>
                                </div>
                                <span className="text-style__body2--bold text-Black">Yessica Christy</span>
                            </div>

                            <p>
                                With this learningPlatform I can learn easily and got updated course from teachers. This is the most helpful project.
                            </p>
                        </Banner>
                    </li>
                    <li className="basis-96">
                        <Banner variant="verticalInverse" size="large">
                            <div className="text-Grey group-hover:text-Blue">
                                <Icon name="quotes"/>
                            </div>

                            <div className="author flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <img src={kimYoungJou} alt="Social media man avatar"/>
                                </div>
                                <span className="text-style__body2--bold text-Black">Kim Young Jou</span>
                            </div>

                            <p>
                                I got a lot of new skills here with a really professional specialists. I got a lot of energy I can learn anything.
                            </p>
                        </Banner>
                    </li>
                </ul>
                <div className="flex justify-center">
                    <Dots/>
                </div>
            </div>
        </section>
    );
};