import { SearchBar } from './SearchBar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Stories =  {
    title: 'SearchBar',
    component: SearchBar,
    argTypes: {
        searchBarAction: {action: 'on search icon click function'}
    }
} as ComponentMeta<typeof SearchBar>;
export default Stories;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args}/>;

export const Default = Template.bind({});

Default.args = {
  
};