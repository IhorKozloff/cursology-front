import classNames from 'classnames';
import { Icon } from 'components/ReusableComponents';
import { Logo } from './LayoutComponents/Logo';
import { NavBar } from './LayoutComponents/NavBar';

interface IProps {
    homepage?: boolean;
}

export const Footer = ({homepage = false}:IProps) => {

    const classnames = classNames('pb-8',{
        'pt-[237px]': homepage,
        'pt-14': homepage === false
    });

    return (
        <footer className={`background-custom-gradient-black ${classnames}`}>
            <div className="container">
                <div className="pb-[112px] flex items-center justify-between">
                    <Logo/>
                    <NavBar/>
                    <ul className="flex items-center gap-6">
                        <li className="text-Grey">
                            <a href="www.facebook.com">
                                <Icon name="facebook"/>
                            </a>
                        </li>
                        <li className="text-Grey">
                            <a href="www.youtube.com">
                                <Icon name="youtube"/>
                            </a>
                        </li>
                        <li className="text-Grey">
                            <a href="www.instagram.com">
                                <Icon name="insta"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="text-style__body3--regular text-Grey">© learningPlatform, 2023</p>
            </div>
        </footer>
    );
};