import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from '@';

export default {
  title: 'Components/Badge 徽标',
  component: Badge,
  argTypes: {
    type: { control: 'radio',options: ['default', 'secondary', 'success','warning','error']  },
    // placement: { control: 'radio',options: ['top','top-left','top-right','bottom','bottom-left','bottom-right']  }, 
  },
} as ComponentMeta<typeof Badge>;

const basicTemplate: ComponentStory<typeof Badge> = (args) => (
  <>
    <h2>徽标</h2>
    <h3>文字：</h3>
    <Badge {...args} >徽标</Badge>
    <h3>数字：</h3>
    <Badge {...args} >12</Badge>
    <h3>省略：</h3>
    <Badge {...args} dot >12</Badge>
  </>
);

export const Basic = basicTemplate.bind({});
Basic.args = {
  type:'default',
};

const anchorTemplate: ComponentStory<typeof Badge> = (args) => (
  <>
    <h2>锚定徽标</h2>
    <h3>右上：</h3>
    <Badge.Anchor {...args} >
      <Badge {...args} >12</Badge>
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像" style={{width:'50px',height:'50px',borderRadius:'5px'}} />
    </Badge.Anchor>
    <h3>右下：</h3>
    <Badge.Anchor {...args} placement="bottomRight">
      <Badge {...args} >徽标</Badge>
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像" style={{width:'50px',height:'50px',borderRadius:'5px'}} />
    </Badge.Anchor>

  </>
);

export const Anchor = anchorTemplate.bind({});
Basic.args = {
  type:'default',
};