interface CardProps {
  image: string
  name: string
}

const Card: React.FC<CardProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col align-center p-4">
      <img className="shadow-lg" src={image} alt={name} />
      <p className="mt-4">{name}</p>
    </div>
  )
}

export default Card
