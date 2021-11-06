import React from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

function RideSelector() {
  return (
    <Warpper>
      <Title>Choose a ride, or swip up for more</Title>
      <CarList>
        {carList.map((car, index) => {
          return (
            <Car key={index}>
              <CarImage src={car.imgUrl} />
              <CarDetails>
                <Service>{car.service}</Service>
                <Time>5 min away</Time>
              </CarDetails>
              <Price>50</Price>
            </Car>
          );
        })}
      </CarList>
    </Warpper>
  );
}

export default RideSelector;

const Warpper = tw.div`
flex-1 overflow-y-scroll scrollbar-none
`;

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
overflow-y-scroll scrollbar-none
`;

const Car = tw.div`
flex p-4 itmes-center 
`;
const CarImage = tw.img`
h-14 mr-4
`;

const CarDetails = tw.div`
flex-1
`;

const Time = tw.div`
text-xs text-blue-500
`;

const Service = tw.div`
font-medium
`;

const Price = tw.div`

`;
