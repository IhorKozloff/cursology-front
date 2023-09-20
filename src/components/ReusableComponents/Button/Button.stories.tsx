
import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Stories =  {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант внешнего вида кнопки',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'switchBtn'],
            control: {
                type: 'radio'
            }
        },
        size: {
            type: 'string',
            description: 'Размер кнопки',
            options: ['small', 'normalShortcut', 'normal', 'medium', 'mediumLarge', 'large', 'huge'],
            control: {
                type: 'radio'
            }
        },
        color: {
            type: 'string',
            description: 'Цвет кнопки',
            options: ['yellow', 'white', 'blue', 'black', 'grey'],
            control: {
                type: 'radio'
            }
        },
        inverted: {
            type: 'boolean',
            description: 'Поворот контента кнопки на 180deg. Применимо только к variant="switchBtn".',
        },
        className: {
            type: 'string',
            description: 'Для возможности добавить пользовательские имена css классов.',
        },
    }
} as ComponentMeta<typeof Button>;
export default Stories;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Default = Template.bind({});
Default.args = {
    children: 'Click me',
};

export const PrimaryYellow = Template.bind({});
PrimaryYellow.args = {
    children: 'Get started',
    variant: 'primary',
    size: 'large',
    color: 'yellow'
};

export const PrimaryBlack = Template.bind({});
PrimaryBlack.args = {
    children: 'Get started',
    variant: 'primary',
    size: 'huge',
    color: 'black'
};

export const SecondaryYellow = Template.bind({});
SecondaryYellow.args = {
    children: 'Get started',
    variant: 'secondary',
    size: 'small',
    color: 'yellow'
};

export const SecondaryWhite = Template.bind({});
SecondaryWhite.args = {
    children: 'Next Lesson',
    variant: 'secondary',
    size: 'mediumLarge',
    color: 'white'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    children: 'Explore all',
    variant: 'tertiary',
};

export const SwitchBtnBlue = Template.bind({});
SwitchBtnBlue.args = {
    variant: 'switchBtn',
    color: 'blue'
};

export const SwitchBtnWhiteInverted = Template.bind({});
SwitchBtnWhiteInverted.args = {
    variant: 'switchBtn',
    color: 'white',
    inverted: true
};
