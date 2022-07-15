import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseComponent, { BaseComponentProps } from './BaseComponent'
import { mockBaseComponentProps } from './BaseComponent.mocks'

export default {
  title: 'templates/BaseComponent',
  component: BaseComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseComponent> = (args) => (
  <BaseComponent {...args} />
)

const TemplateVariant: ComponentStory<typeof BaseComponent> = (args) => (
  <BaseComponent {...args} />
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Base = Template.bind({})
export const BaseVariant = TemplateVariant.bind({})

Base.args = {
  ...mockBaseComponentProps.base,
} as BaseComponentProps

BaseVariant.args = {
  ...mockBaseComponentProps.variant,
} as BaseComponentProps
