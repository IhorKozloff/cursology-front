import { Banner, Icon } from 'components/ReusableComponents';

export const HomePageAbout = () => {

    return (
        <section className="home-page__about py-28 bg-Blue/5">
            <div className="container flex">
                <div className="max-w-[238px]">
                    <h2>Online Learning <span className="text-Blue">Designed</span> For Real Life</h2>
                </div>
                <ul className="ml-[178px] flex gap-41">
                    <li className="max-w-[251px]">
                        <Banner variant="vertical" size="large">
                            <Icon name="userCheck" wrapStyle="wrap-round-increase" wrapColor="blue" color="blue" autohover></Icon>
                            <h4>User-friendly platform to learn</h4>
                            <p>
                                Learning theor asedtraining, online learning, m-learning, where mobile technology is used
                            </p>
                        </Banner>
                    </li>
                    <li className="max-w-[232px]">
                        <Banner variant="vertical" size="large">
                            <Icon name="devices" wrapStyle="wrap-round-increase" wrapColor="blue" color="blue" autohover></Icon>
                            <h4>Packed with modern technology</h4>
                            <p>
                                Packed with modern technology, classroom learning which used tobe done conventionally
                            </p>
                        </Banner>
                    </li>
                </ul>
            </div>
        </section>
    );
};