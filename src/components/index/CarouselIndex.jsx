import Carousel from 'react-bootstrap/Carousel';
function CarouselIndex() {
  return (
    <Carousel>
      {Array.from({ length: 4 }, (_, index) => (
        <Carousel.Item interval={1000}>
          <img src={`/carousel/slide${index+1}.jpg`} class="d-block w-100" alt={`slide${index+1}`}/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselIndex;