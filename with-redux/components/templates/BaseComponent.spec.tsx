import { render, screen } from '@testing-library/react'
import BaseComponent from './BaseComponent'

describe('BaseComponent', () => {
  test('should render a div', () => {
    const mockText = 'test'
    render(<BaseComponent sampleTextProp={mockText}></BaseComponent>)
    const divElement = screen.getByText(mockText)
    expect(divElement).toBeInTheDocument()
  })
})
