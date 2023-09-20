import { CoursesListItem } from './CoursesListItem';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Stories =  {
    title: 'CoursesListItem',
    component: CoursesListItem,
    decorators: [
        (Story) => (
            <div style={{ position: 'relative', width: 280 }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        author: {
            type: 'string',
            description: 'Имя автора курса',
            defaultValue: 'John Doe'
        },
        popularity: {
            type: 'number',
            description: 'Рейтинг курса',
            defaultValue: 3.1
        },
        id: {
            type: 'string',
            description: 'Уникальный идентификатор курса',
            defaultValue: '0000009999'
        },
        poster_path: {
            type: 'string',
            description: 'Ссылка на изображение курса',
            defaultValue: 'https://cdn.pixabay.com/photo/2016/09/26/09/24/html-1695519_960_720.png'
        },
        title: {
            type: 'string',
            description: 'Название курса',
            defaultValue: 'HTML for beginners'
        },
        total_lessons: {
            type: 'number',
            description: 'Колличество уроков в курсе',
            defaultValue: 35
        },
        isDark: {
            type: 'boolean',
            description: 'Если false, название курса будет отображаться черным цветом, в противном случае белым'
        },
        popularity_tag: {
            type: 'boolean',
            description: 'Если true, отображает синий маркер популярности'
        }

        // popularity_tags={popularity_tags}
    }
} as ComponentMeta<typeof CoursesListItem>;
export default Stories;

const Template: ComponentStory<typeof CoursesListItem> = (args) => <CoursesListItem {...args}/>;

export const Default = Template.bind({});

Default.args = {
  
};