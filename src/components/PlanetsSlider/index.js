// Write your code here
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import {PlantsappCon, Heading} from './styledComponents'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <PlantsappCon data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider slidesToShow={1} slidesToScroll={1}>
        {planetsList.map(eachplantdetails => (
          <PlanetItem
            key={eachplantdetails.id}
            planetDetails={eachplantdetails}
          />
        ))}
      </Slider>
    </PlantsappCon>
  )
}

export default PlanetsSlider
