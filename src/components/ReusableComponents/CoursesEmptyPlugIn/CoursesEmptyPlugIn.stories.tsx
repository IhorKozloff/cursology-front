
import { CoursesEmptyPlugIn } from './CoursesEmptyPlugIn';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Stories =  {
    title: 'CoursesEmptyPlugIn',
    component: CoursesEmptyPlugIn,
    argTypes: {

        textStyle: {
            type: 'string',
            description: 'Вариант цветовой схемы текста',
            defaultValue: 'dark',
            options: ['dark', 'light'],
            control: {
                type: 'radio'
            }
        }
    }
} as ComponentMeta<typeof CoursesEmptyPlugIn>;
export default Stories;

const Template: ComponentStory<typeof CoursesEmptyPlugIn> = (args) => <CoursesEmptyPlugIn {...args}/>;

export const Default = Template.bind({});

Default.args = {

};

export const LightStyle = Template.bind({});

Default.args = {
    textStyle: 'light'
};
