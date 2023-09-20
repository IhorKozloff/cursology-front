
import { RatingStars } from './RatingStars';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Stories =  {
    title: 'RatingStars',
    component: RatingStars,
    argTypes: {
        rating: {
            type: 'number',
            description: 'Колличество звездочек, если число не целое, добавится половинка звездочки',
            defaultValue: '4.8'
        }
    }
} as ComponentMeta<typeof RatingStars>;
export default Stories;

const Template: ComponentStory<typeof RatingStars> = (args) => <RatingStars {...args}/>;

export const Default = Template.bind({});

Default.args = {

};

export const OneStar = Template.bind({});

OneStar.args = {
    rating: 1
};

export const TwoAndHalfStars = Template.bind({});

TwoAndHalfStars.args = {
    rating: 2.5
};