export interface ReactLogoLineProps {
  className?: string
}

const ReactLogoLine: React.FC<ReactLogoLineProps> = ({ className }) => {
  return (
    <div
      data-testid="react-logo-line"
      className={`flex items-center justify-center absolute w-[250px] h-[90px] border-[6px] rounded-[50%] border-[#00d8ff] ${
        className || ''
      }`}
    ></div>
  )
}

export default ReactLogoLine
