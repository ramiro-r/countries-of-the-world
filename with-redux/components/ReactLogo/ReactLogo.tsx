import ReactLogoLine from './ReactLogoLine'

const ReactLogo: React.FC = () => {
  return (
    <div className="w-[250px] h-[250px] flex animate-pulse hover:animate-spin-slow flex-col items-center justify-center">
      <ReactLogoLine />
      <ReactLogoLine className="rotate-[57deg]" />
      <ReactLogoLine className="rotate-[-57deg]" />
      <div className="bg-[#00d8ff] w-[40px] h-[40px] rounded-full"></div>
    </div>
  )
}

export default ReactLogo
