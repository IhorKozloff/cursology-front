import { Button } from './Button/Button';
import { useState } from 'react';
import classNames from 'classnames';
import { useMakeCurrentCategoriesData } from 'hooks';

interface IProps {
    onClick?: (categoryID: string) => void;
    size?: 'normal' | 'reduced'
}

export const TabBar = ({onClick, size = 'normal'}: IProps) => {

    const [ moveSide, setMoveSide ] = useState(false);
    const tabBarData = useMakeCurrentCategoriesData();

    const handleTabClick = (categoryID: string) => {
        if(onClick) {
            onClick(categoryID);
        }   
    }; 
    
    const onMoveBtnClick = (side: boolean) => {
        setMoveSide(side);
    };

    const tabsPositionClassNames = classNames('absolute z-10 top-0 left-12 flex gap-2 items-center overflow-hidden transition-all duration-1000',{
        '-translate-x-[100px]': moveSide,
        'translate-x-0': !moveSide
    });
    const controlBtnClassNames = 'absolute z-20 top-1/2 -translate-y-1/2 h-[60px] flex-center-center flex-col';

    const controlBtnRightClassNames = classNames('pl-12 right-0', {
        'tab-bar-home-right-arrow-wrapper': size === 'normal',
        'tab-bar-library-right-arrow-wrapper': size === 'reduced'
    });
    const controlBtnLeftClassNames = classNames('pr-12 left-0', {
        'tab-bar-home-left-arrow-wrapper': size === 'normal',
        'tab-bar-library-left-arrow-wrapper': size === 'reduced'
    });

    return (
        <div className="w-full h-[54px] relative ">
            <div className={`${controlBtnClassNames}, ${controlBtnLeftClassNames}`}>
                <Button type="button" variant="switchBtn" color="white" onClick={() => onMoveBtnClick(true)}/>
            </div>
            <div className="w-[1124px] mx-auto h-full relative overflow-hidden">
                <ul className={tabsPositionClassNames}>
                    {tabBarData.map((item, index) => {
                        return (
                            <li key={`${item}/${index}`}>
                                <Button type="button" 
                                    onClick={() => handleTabClick(item.categoryID)} 
                                    variant="secondary" 
                                    size="mediumLarge" 
                                    color="white" 
                                    className="whitespace-nowrap btn-in-set-border [&_div]:opacity-0 hover:bg-Grey/10 [&_button]:border-BtnBorderGrey">
                                    {item.name}
                                </Button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={`${controlBtnClassNames}, ${controlBtnRightClassNames}`}>
                <Button type="button" variant="switchBtn" color="white" inverted onClick={() => onMoveBtnClick(false)}/>
            </div>
        </div>
    );
};