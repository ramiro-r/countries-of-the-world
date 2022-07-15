import { render, screen } from '@testing-library/react'
import ReactLogo from './ReactLogo'

describe('ReactLogo', () => {
  test('should render three ReactLogoLines', () => {
    render(<ReactLogo />)
    const reactLogoLines = screen.getAllByTestId('react-logo-line')
    expect(reactLogoLines).toHaveLength(3)
  })
})
