
import { CourseListPreloader } from './CourseListPreloader';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Stories =  {
    title: 'CourseListPreloader',
    component: CourseListPreloader,
    argTypes: {

        isDark: {
            type: 'boolean',
            description: 'Если true, отображается темный вариант внешнего вида прелоадера',
            defaultValue: false,
        },
        itemsAmount: {
            type: 'number',
            description: 'Колличество курсов-прелоадеров, если ничего не передать - по умолчанию будет 4.',
        }

    }
} as ComponentMeta<typeof CourseListPreloader>;
export default Stories;

const Template: ComponentStory<typeof CourseListPreloader> = (args) => <CourseListPreloader {...args}/>;

export const Default = Template.bind({});

Default.args = {

};

export const OneItemDark = Template.bind({});

OneItemDark.args = {
    itemsAmount: 1,
    isDark: true
};

export const TwoItemsLight = Template.bind({});

TwoItemsLight.args = {
    itemsAmount: 2,
    isDark: false
    
};

export const ThreeItemDark = Template.bind({});

ThreeItemDark.args = {
    itemsAmount: 3,
    isDark: true
};