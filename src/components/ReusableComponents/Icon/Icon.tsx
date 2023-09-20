import { HiOutlineBriefcase } from 'react-icons/hi';
import { 
    TbBulb, TbDevices, TbBrowser, TbTools, TbChartDots, TbUser, 
    TbUsers, TbDeviceLaptop, TbFlame, TbRocket, TbSchool, TbPlayerPlay, 
    TbBrandFacebook, TbBrandYoutube, TbBrandInstagram, TbFileText, 
    TbDownload, TbFileCertificate, TbFolder, TbClock, TbFileZip, TbSearch
} from 'react-icons/tb';
import { FiUserCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsCheck2 } from 'react-icons/bs';
import { RiDoubleQuotesR, RiPauseMiniFill } from 'react-icons/ri';
import classNames from 'classnames';

interface IProps {
    name: 'case' | 'bulb' | 'userCheck' | 'devices' | 'browser' | 'tools' | 'dots' | 'user' | 'search' |
    'users' | 'laptop' | 'rocket' | 'school' | 'play' | 'chevroneLeft' | 'chevroneRight' | 'flame' | 'quotes' |
    'facebook' | 'youtube' | 'insta' | 'download' | 'file' | 'certificate' | 'folder' | 'clock' | 'check' | 'zip' | 'pause';

    size?: 'normal' | 'small';

    color?: 'grey' | 'blue' | 'yellow' | 'white' | 'black'
    wrapStyle?: 'wrap-normal' | 'wrap-increase' | 'wrap-round-normal' | 'wrap-round-increase';
    wrapColor?: 'grey' | 'blue' | 'yellow' | 'white' | 'transparent-white'

    autohover?: boolean;
    className?: string;
}
export const Icon = ({name, size = 'normal', wrapStyle, wrapColor, color, autohover, className}:IProps) => {

    const classnames = classNames('cursor-pointer inline-block transition-all', {
        'p-3 rounded-xl': wrapStyle ==='wrap-normal',
        'p-4 rounded-xl': wrapStyle ==='wrap-increase',
        'p-1.5 rounded-full': wrapStyle ==='wrap-round-normal',
        'p-3 rounded-full': wrapStyle ==='wrap-round-increase',

        'text-Grey': color === 'grey',
        'text-Blue': color === 'blue',
        'text-Yellow': color === 'yellow',
        'text-White': color === 'white',
        'text-Black': color === 'black',

        'bg-White/10': wrapColor === 'transparent-white',
        'bg-White': wrapColor === 'white',
        'bg-GreyLight': wrapColor === 'grey',
        'bg-BlueLight': wrapColor === 'blue',
        'bg-YellowLight': wrapColor === 'yellow',

        'duration-300': autohover,

        'hover:bg-White/50': wrapColor === 'transparent-white' && autohover,
        'hover:bg-[#484848]': wrapColor === 'white' && autohover,
        'hover:bg-GreyLight/50': wrapColor === 'grey' && autohover,
        'hover:bg-Blue hover:text-White': wrapColor === 'blue' && autohover,
        'hover:bg-Yellow': wrapColor === 'yellow' && autohover,
        
    });

    const iconSize = size === 'normal' ? 24 : 16;

    const IconsName = {
        case: <HiOutlineBriefcase size={iconSize}/>,
        bulb: <TbBulb size={iconSize}/>,
        userCheck: <FiUserCheck size={iconSize}/>,
        users: <TbUsers size={iconSize}/>,
        tools: <TbTools size={iconSize}/>,
        dots: <TbChartDots size={iconSize}/>,

        laptop: <TbDeviceLaptop size={iconSize}/>,
        devices: <TbDevices size={iconSize}/>,

        browser: <TbBrowser size={iconSize}/>,
        rocket: <TbRocket size={iconSize}/>,

        user: <TbUser size={iconSize}/>,
        flame: <TbFlame size={iconSize}/>,

        school: <TbSchool size={iconSize}/>,
        play: <TbPlayerPlay size={iconSize}/>,
        chevroneLeft: <FiChevronLeft size={iconSize}/>,
        chevroneRight: <FiChevronRight size={iconSize}/>,
        quotes: <RiDoubleQuotesR size={36}/>,

        facebook: <TbBrandFacebook size={iconSize}/>,
        youtube: <TbBrandYoutube size={iconSize}/>,
        insta: <TbBrandInstagram size={iconSize}/>,

        download: <TbDownload size={iconSize}/>,
        file: <TbFileText size={iconSize}/>,
        certificate: <TbFileCertificate size={iconSize}/>,
        folder: <TbFolder size={iconSize}/>,
        clock: <TbClock size={iconSize}/>,
        check: <BsCheck2 size={iconSize}/>,
        zip: <TbFileZip size={iconSize}/>,
        pause: <RiPauseMiniFill size={iconSize}/>,
        search: <TbSearch size={iconSize}/>,
    };

    return (
        <div className={`${className} ${classnames}`}>    
            {IconsName[name]}
        </div>
    );
};