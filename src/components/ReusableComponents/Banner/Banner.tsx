import { ReactNode, Children } from 'react';

interface IProps {
    children: ReactNode;
    variant: 'horizontalCol' | 'horizontalRow' | 'verticalInverse' | 'vertical';
    size: 'large' | 'small';
}

export const Banner = ({children, variant, size}:IProps) => {

    const childrenArr = Children.toArray(children);
    
    return (
        <>
            {variant === 'vertical' && size === 'large' && 
                <div className="banner-wrapper">
                    <div className="mb-6">{childrenArr[0]}</div>
                    <div className="mb-3">{childrenArr[1]}</div>
                    <div className="text-style__body2--regular text-Grey">{childrenArr[2]}</div>
                </div>
            }

            {variant === 'verticalInverse' && size === 'large' && <div className="banner-wrapper group py-6 pl-6 pr-12 border border-Black/10 rounded hover:bg-White cursor-pointer hover:shadow-bannerShadow hover:border-none transition-all duration-300">
                <div className="mb-6">{childrenArr[0]}</div>
                <div className="text-style__body2--regular text-Grey mb-7">{childrenArr[2]}</div>
                <div className="mb-3">{childrenArr[1]}</div>
            </div>}

            {variant === 'horizontalRow' && size === 'large' && 
                <div className="banner-wrapper group py-7.5 px-10 bg-White rounded-xl hover:bg-Blue cursor-pointer shadow-bannerShadow transition-colors duration-300">

                    <div className="flex gap-5 items-center mb-6">

                        <div>{childrenArr[0]}</div>

                        <div className="group-hover:text-White transition-colors duration-300">{childrenArr[1]}</div>

                    </div>

                    <div className="text-style__body2--regular text-Grey group-hover:text-White transition-colors duration-300">{childrenArr[2]}</div>
                </div>
            } 
            
            {variant === 'horizontalCol' && size === 'large' && 
                <div className="banner-wrapper flex gap-4 items-start group py-9 pl-9 pr-[50px] border border-Black/10 rounded hover:bg-White cursor-pointer hover:shadow-bannerShadow hover:border-none transition-all duration-300">
                    <div className="[&_*]:group-hover:text-White [&_div]:group-hover:bg-Blue">{childrenArr[0]}</div>
                    <div className="mt-3">
                        <div >{childrenArr[1]}</div>
                        <div className="text-style__body2--regular text-Grey mt-1">{childrenArr[2]}</div>
                    </div>
                    
                </div>
            }    

            {variant === 'vertical' && size === 'small' && 
                <div className="banner-wrapper group bg-Black rounded-2xl p-4 flex flex-col items-center transition-all duration-300 cursor-pointer hover:-translate-y-3p  hover:shadow-xl hover:shadow-Black/50">
                    <div className="mb-3">{childrenArr[0]}</div>
                    <div className="text-White">{childrenArr[1]}</div>
                    <div className="text-style__body3--regular text-Grey group-hover:text-White transition-all duration-300">{childrenArr[2]}</div>
                </div>
            }

            {variant === 'horizontalCol' && size === 'small' && 
                <div className="banner-wrapper group bg-Black rounded-2xl p-4 flex gap-4 items-start transition-all duration-300 cursor-pointer hover:-translate-y-3p hover:animate-pulse hover:shadow-xl hover:shadow-Black/50">
                    <div>{childrenArr[0]}</div>
                    <div>
                        <div className="text-White">{childrenArr[1]}</div>
                        <div className="text-style__body3--regular text-Grey group-hover:text-White transition-all duration-300">{childrenArr[2]}</div>
                    </div>
                </div>
            }

        </>
    );
};