
import { Icon } from './Icon';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Stories =  {
    title: 'Icon',
    component: Icon,
    argTypes: {
        name: {
            type: 'string',
            description: 'Внешний вид иконки',
            defaultValue: 'clock',
            options: [
                'case', 'bulb', 'userCheck', 'devices', 'browser', 'tools', 'dots', 'user', 'search',
                'users', 'laptop', 'rocket', 'school', 'play', 'chevroneLeft', 'chevroneRight', 'flame', 'quotes',
                'facebook', 'youtube', 'insta', 'download', 'file', 'certificate', 'folder', 'clock', 'check', 'zip', 'pause'
            ],
            control: {
                type: 'select'
            }
        },
        size: {
            type: 'string',
            description: 'Размер иконки, normal - 24x24, small - 16x16.',
            defaultValue: 'normal',
            options: [
                'normal',
                'small'
            ],
            control: {
                type: 'radio'
            }
        },
        color: {
            type: 'string',
            description: 'Цвет непосредственно svg. Принимает цвета, ограниченные макетом',
            defaultValue: 'yellow',
            options: [ 'grey', 'blue', 'yellow', 'white', 'black' ],
            control: {
                type: 'radio'
            }
        },
   
        wrapStyle: {
            type: 'string',
            description: 'Геометрия пространства вокруг иконки.',
            defaultValue: 'wrap-normal',
            options: [ 'wrap-normal', 'wrap-increase', 'wrap-round-normal', 'wrap-round-increase' ],
            control: {
                type: 'radio'
            }
        },
        wrapColor: {
            type: 'string',
            description: 'Цвет пространства вокруг иконки.',
            defaultValue: 'transparent-white',
            options: [ 'grey', 'blue', 'yellow', 'white', 'transparent-white' ],
            control: {
                type: 'radio'
            }
        },
        autohover: {
            type: 'boolean',
            description: 'Если true, то на иконки, и пространство вокруг них срабатывает базовый эффект при наведении курсора.',
            defaultValue: 'true',
        },
        className: {
            type: 'string',
            description: 'Для возможности добавить пользовательские имена css классов.'
        }

    }
} as ComponentMeta<typeof Icon>;
export default Stories;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}/>;

export const Default = Template.bind({});
Default.args = {
    
};

export const VariantOne = Template.bind({});
VariantOne.args = {
    name: 'userCheck',
    color: 'blue',
    wrapStyle: 'wrap-round-increase',
    wrapColor: 'blue'
};

export const VariantTwo = Template.bind({});
VariantTwo.args = {
    name: 'file',
    color: 'black',
    wrapStyle: 'wrap-round-normal',
    wrapColor: 'yellow'
};

export const VariantThree = Template.bind({});
VariantThree.args = {
    name: 'case',
    color: 'white',
    wrapStyle: 'wrap-increase',
    wrapColor: 'transparent-white'
};

export const VariantFour = Template.bind({});
VariantFour.args = {
    name: 'tools',
    color: 'blue',
    wrapStyle: 'wrap-normal',
    wrapColor: 'blue'
};