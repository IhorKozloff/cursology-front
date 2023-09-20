import { CustomIcon } from 'heplers';

export const Logo = () => {
    return (
        <div className="logo flex items-center">
            <CustomIcon id="header-logo-icon" width={32} height={32}/>
            <span className="logo__text text-style__body2--extraBold text-White ml-4">
                    LearningPlatform
            </span>
        </div>
    );
};