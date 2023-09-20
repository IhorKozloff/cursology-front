import { Icon } from '../Icon/Icon';
import { CustomIcon } from '../../../heplers/CustomIcon';
import { Banner } from './Banner';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import viezhRobert from '../../../img/home/Viezh Robert.jpg';

const Stories =  {
    title: 'Banner',
    component: Banner,
    decorators: [
        (Story) => (
            <div style={{ width: 384 }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант внешнего вида баннера',
            defaultValue: 'horizontalRow',
            options: ['horizontalCol', 'horizontalRow', 'verticalInverse', 'vertical'],
            control: {
                type: 'radio'
            }
        },
        size: {
            type: 'string',
            description: 'Размер баннера',
            defaultValue: 'large',
            options: ['small', 'large'],
            control: {
                type: 'radio'
            }
        }
    }
} as ComponentMeta<typeof Banner>;
export default Stories;

const Template: ComponentStory<typeof Banner> = ({size, variant, ...args}) => <Banner size={size} variant={variant} {...args}/>;
  
export const Default = Template.bind({});
Default.args = {
    children:
    <>
        <div className="flex items-center gap-5 mb-6">
            <Icon name="browser" color="blue" wrapStyle="wrap-normal" wrapColor="blue"/>
            <h4>Web Development</h4>
        </div>
        <p>Classes in development that cover the most recent advancements in web.</p>
    </>
};

export const VerticalLarge = Template.bind({});
VerticalLarge.args = {
    children:
    <>
        <Icon name="userCheck" wrapStyle="wrap-round-increase" wrapColor="blue" color="blue" autohover className="mb-6"></Icon>
        <h4 className="mb-3">User-friendly platform to learn</h4>
        <p className="text-style__body2--regular text-Grey">
            Learning theor asedtraining, online learning, m-learning, where mobile technology is used
        </p>
    </>
};

export const VerticalInverseLarge = Template.bind({});
VerticalInverseLarge.args = {
    variant: 'verticalInverse',
    children: 
    <>
        <div className="text-Grey group-hover:text-Blue">
            <Icon name="quotes"/>
        </div>

        <p className="my-6">
            I’ve been with learningPlatform in 1 year, I got a lot of new skills. I’m very happy with learningPlatform.
        </p>

        <div className="author flex gap-3 items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src={viezhRobert} alt="Social media man avatar"/>
            </div>
            <span className="text-style__body2--bold text-Black">Viezh Robert</span>
        </div>
    </>
};

export const HorizontalRowLarge = Template.bind({});
HorizontalRowLarge.args = {
    variant: 'horizontalRow',
    children:
    <>
        <div className="flex items-center gap-5 mb-6">
            <Icon name="browser" color="blue" wrapStyle="wrap-normal" wrapColor="blue"/>
            <h4>Web Development</h4>
        </div>
        <p>Classes in development that cover the most recent advancements in web.</p>
    </>
};

export const HorizontalColLarge = Template.bind({});
HorizontalColLarge.args = {
    variant: 'horizontalCol',
    children: 
   <span className="flex items-start gap-4">
       <Icon name="flame" color="blue" wrapStyle="wrap-round-increase" wrapColor="blue"/>
       <span className="pt-3">
           <h4 className="text-black-important text-black-hover-important">Lifetime Access</h4>
           <p className="text-black-important text-black-hover-important">Only buy one time you can watch it anytime, any where, loremipsum dolot sit amet</p>
       </span>
   </span>

};

export const VerticalSmall = Template.bind({});
VerticalSmall.args = {
    variant: 'vertical',
    size: 'small',
    children:
    <>
        <CustomIcon id="ring" className="group-hover:animate-spin-slow"/>
        <h4 className="mt-3 text-White">5K+</h4>
        <p className="text-style__body3--regular text-Grey group-hover:text-White transition-all duration-300">Online Courses</p>
    </>
};

export const HorizontalColSmall = Template.bind({});
HorizontalColSmall.args = {
    variant: 'horizontalCol',
    size: 'small',
    children: 
        <div className="flex items-center gap-4">
            <Icon name="laptop" wrapStyle="wrap-normal" wrapColor="transparent-white" color="white"/>
            <div>
                <h4 className="text-White">2K+</h4>
                <p className="text-style__body3--regular text-Grey group-hover:text-White transition-all duration-300">Video Courses</p>
            </div>
        </div>,
};