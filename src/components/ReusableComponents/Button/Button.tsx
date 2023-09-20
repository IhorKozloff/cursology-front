import { ReactNode } from 'react';
import classNames from 'classnames';
import { FiChevronLeft } from 'react-icons/fi';

export interface IButton extends React.ComponentPropsWithoutRef<'button'> {
    children?: ReactNode;

    variant: 'primary' | 'secondary' | 'tertiary' | 'switchBtn';
    size?: 'small' | 'normalShortcut' | 'normal' | 'medium' | 'mediumLarge' | 'large' | 'huge';
    color?: 'yellow' | 'white' | 'black' | 'blue';
    inverted?: boolean;

    className?: string;
}

export const Button = ({
    children, variant, size, color,
    inverted = false,
    className ='', ...rest
}:IButton) => {

    if (variant === 'primary' &&  (color === 'white' || color === 'blue')) {
        throw Error('Colors can be applied to button variant primary - yellow, black');
    }
    if (variant === 'primary' && (size === 'small' || size === 'medium' || size === 'mediumLarge')) {
        throw Error('Sizes can be applied to button variant primary - normal, large, huge, default value - normal');
    }
    if (variant === 'secondary' && (size === 'large')) {
        throw Error('Size - large, not applicable to the purpose of the secondary button, default value - normal');
    }
    if (variant === 'secondary' && (color === 'black' || color === 'blue')) {
        throw Error('Colors can be applied to button variant secondary - yellow, white');
    }
    if (variant === 'tertiary' && (color || size)) {
        throw Error('Tertiary option in a single copy of color and size. Size and color property is not required');
    }
    if (variant === 'switchBtn' && size) {
        throw Error('SwitchBtn option in a single copy of size, size property is not required');
    }
    if (variant === 'switchBtn' && (color === 'black' || color === 'yellow')) {
        throw Error('Colors can be applied to button variant switchBtn - blue, white');
    }
    if (variant !== 'switchBtn' && inverted) {
        throw Error('The inverted property is only applicable to the variant - switchBtn');
    }

    const classes = classNames('gap-2 relative inline-block transition-all duration-300 hover:duration-300 group overflow-hidden', {

        'py-1.5 px-4': size === 'small',
        'py-2.5 pl-4 pr-6': size === 'normalShortcut',
        'py-2.5 px-6': size === 'normal',
        'py-3 px-6': size === 'medium',
        'py-4 px-6': size === 'mediumLarge',
        'py-4 px-9': size === 'large',
        'px-20 py-4': size === 'huge',

        //variant Primary  
        'hover:bg-Black/2 border rounded': variant === 'primary',
        'bg-YellowLight text-Black hover:text-YellowLight border-YellowLight hover:bg-tranparent': variant === 'primary' && color === 'yellow',
        'bg-Black text-YellowLight border-Black hover:text-Black hover:bg-YellowLight': variant === 'primary' && color === 'black',

        'text-style__body2--extraBold': variant === 'primary' && size === 'normal',
        'text-style__body1--extraBold': variant === 'primary' && size === 'large',
        'text-style__body1--bold rounded-xl': variant === 'primary' && size === 'huge',

        //variant Secondary
        'bg-transparent border rounded': variant === 'secondary',

        'text-White border-White text-style__body3--bold': variant === 'secondary' && color === 'white',
        'text-YellowLight border-YellowLight text-style__body2--bold': variant === 'secondary' && color === 'yellow',

        //variant Tertiary        
        'py-2.5 px-6 bg-GreyLight text-Blue text-style__body3--bold rounded hover:-translate-y-[1px] active:translate-y-0 hover:drop-shadow-lg active:drop-shadow-none duration-150': variant === 'tertiary',

        //variant switch
        'border border-Blue rounded-full text-Blue hover:bg-Blue hover:text-White p-1.5': variant === 'switchBtn' && color === 'blue',
        'border border-BtnBorderGrey rounded-full text-White hover:bg-White hover:border-White hover:text-Black p-1.5': variant === 'switchBtn' && color === 'white',

        // 'border-White/15 text-White text-style__body3--regular active:scale-95': variant === 'secondary' && grey,
    });

    const buttonLightClassnames = classNames('absolute  top-0 -left-5 w-2 bg-White -translate-x-4 transition-all duration-300  rotate-[30deg]', {
        'h-25 -translate-y-1/4 group-hover:translate-x-[240px]': variant === 'primary',

        'h-25 -translate-y-1/4 group-hover:translate-x-[230px]': variant === 'secondary' && (color === 'yellow' || color === 'white'),
        'h-25 -translate-y-1/4 group-hover:translate-x-[320px]': variant === 'primary' && size === 'huge'
    });

    return (

        <button className={`${classes} ${className} ${inverted && '[&_svg]:rotate-180'}`} {...rest}>
            <div className={`blick ${buttonLightClassnames}`}></div>
            {children}
            {!children && variant !== 'switchBtn' && 'Your Text Here'}
            {!children && variant === 'switchBtn' && <FiChevronLeft size={24}/>}
        </button>
        
    );
};