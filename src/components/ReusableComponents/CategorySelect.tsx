
import { currentPrimaryCategoriesSet, primaryCategories } from 'constatnts/primaryCategories';
import { useEffect, useState } from 'react';

interface IProps {
    onSelectAction: (category: string) => void;
    currentCategoryId?: string;
}

export const CategorySelect = ({onSelectAction, currentCategoryId}: IProps) => {

    const [isSelectListOpen, setIsSelectListOpen] = useState(false);

    useEffect(() => {
        if (currentCategoryId === '') {
            onSelectAction('000000101');
        }
        
    },[currentCategoryId, onSelectAction]);

    return (
        <div className="custom-select inline-block w-full"> 
            <button type="button" className="custom-select__button" onClick={() => setIsSelectListOpen(!isSelectListOpen)}>
                <p>{primaryCategories.find(item => item.categoryID === currentCategoryId)?.name}</p>
            </button>
            
            {isSelectListOpen && <ul className="custom-select__list inline-block absolute top-10 border border-Grey left-0 bg-White text z-50  pb-3
            e rounded-xl shadow-bannerShadow text-style__body2--medium min-w-[200px] overflow-hidden animate-selectListAppear">
                {
                    currentPrimaryCategoriesSet.map((item, index) => {

                        if (item === currentCategoryId) {
                            return false;
                        }
                        return (
                            <li key={index} className="custom-select__item text-start px-4 py-3 cursor-pointer hover:bg-Blue/40" onClick={() => {
                                onSelectAction(item);
                                setIsSelectListOpen(false);
                            }}>
                                {primaryCategories.find(el => el.categoryID === item)?.name}
                            </li>
                        );
                    })
                }
            </ul>}
        </div>
    );
};