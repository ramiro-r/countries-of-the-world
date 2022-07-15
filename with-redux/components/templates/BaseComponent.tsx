export interface BaseComponentProps {
  sampleTextProp: string
}

const BaseComponent: React.FC<BaseComponentProps> = ({ sampleTextProp }) => {
  return <div className="flex">{sampleTextProp}</div>
}

export default BaseComponent
