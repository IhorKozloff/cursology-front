import { PopularMark } from './PopularMark';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Stories =  {
    title: 'PopularMark',
    component: PopularMark,
} as ComponentMeta<typeof PopularMark>;
export default Stories;

const Template: ComponentStory<typeof PopularMark> = (args) => <PopularMark/>;

export const Default = Template.bind({});

Default.args = {

};
