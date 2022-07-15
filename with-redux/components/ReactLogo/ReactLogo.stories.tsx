import { ComponentMeta, ComponentStory } from '@storybook/react'
import ReactLogo from './ReactLogo'

export default {
  title: 'examples/ReactLogo',
  component: ReactLogo,
  argTypes: {},
} as ComponentMeta<typeof ReactLogo>

const Template: ComponentStory<typeof ReactLogo> = (args) => (
  <ReactLogo {...args} />
)

export const Base = Template.bind({})
