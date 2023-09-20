import { Link } from 'react-router-dom';
import { Button, Icon } from 'components';
import { NavBar, Logo, LogOutBtn, SaveUserClientsDataOnServer } from './LayoutComponents';
import { useAppSelector } from 'hooks';
import classNames from 'classnames';

export const Header = () => {
    
    const isLogIn = useAppSelector(state => state.userAuthClientData.isLogIn);

    const btnWrapperClassnames = classNames('flex items-center text-White text-White text-style__body2--bold', {
        'gap-3': isLogIn,
        'gap-6': !isLogIn
    });
    
    return (
        <header className="background-custom-gradient-black w-full bg-[#302F32] py-4 flex items-center justify-between pl-16 pr-29 border-b border-White/10">
            <Logo/>
            <div>
                <NavBar/>
                <div className="search"></div>
            </div>
            
            <ul className={btnWrapperClassnames}>
                <li className="flex-center-center">
                    {!isLogIn && <Link to={'/authorization'} className="nav-link-white">Sign in</Link>}
                    {isLogIn && <Icon name="user" size="normal"/>}
                </li>
                <li>
                    {!isLogIn && <Link to={'/library'}>
                        <Button type="button" variant="secondary" size="small" color="yellow">
                            Get Started
                        </Button>
                    </Link>}
                    {isLogIn && <Link to={'/'} className="nav-link-white">Profile</Link>}
                </li>
                {isLogIn && <li><LogOutBtn/></li>}
            </ul>
            {isLogIn && <SaveUserClientsDataOnServer/>}
        </header>
    );
};