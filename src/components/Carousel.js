import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";

const CarouselPage = () => {
  return (

    <MDBContainer className="mt-5">
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        interval={3000}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 h-20"
                src="img/carousel/ps5_console_1.jpg"
                alt="PS 5 Console"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">A higher form of shopping</h3>
              <p>Get PS5 at lowest price</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="img/carousel/bg_1.jpg" 
                alt="Gaming Arena"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Gaming Areana</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="img/carousel/background-commerece-2.jpg" //Photo by Aza Bo from Pexels
                alt="Delicacy"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Discover the difference</h3>
              <p>Up to 50 % discount</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="img/carousel/background-commerece-3.jpg" //Photo by JESHOOTS.com from Pexels //-- online url https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg
                alt="all eyes on you"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">All eyes on you</h3>
              <p>Free Shipment</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>

  );
}

export default CarouselPage;