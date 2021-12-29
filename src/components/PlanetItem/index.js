// Write your code here
import {
  PlantDesc,
  PlantImage,
  PlantItemCon,
  PlantName,
} from './styledComponents'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <PlantItemCon>
      <PlantImage alt={`planet ${name}`} src={imageUrl} />
      <PlantName>{name}</PlantName>
      <PlantDesc>{description}</PlantDesc>
    </PlantItemCon>
  )
}
export default PlanetItem
