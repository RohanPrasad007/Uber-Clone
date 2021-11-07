import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";
import Link from "next/link";

function Confirm() {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  console.log(pickup, dropoff);
  const [pickUpCoordintes, setPickUpCoordintes] = useState(0);
  const [dropOffCoordintes, setDropOffCoordintes] = useState(0);

  const getPickUpCoordinates = (location) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoicm9oYW5wcmFzYWQiLCJhIjoiY2t2bHF2emtyMDNtYzJwcjJvNnAzMXQ3NSJ9.uQUbODByFL5oINv6RrQBlQ",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setPickUpCoordintes(data.features[0].center);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDorpoffCoordinates = (location) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoicm9oYW5wcmFzYWQiLCJhIjoiY2t2bHF2emtyMDNtYzJwcjJvNnAzMXQ3NSJ9.uQUbODByFL5oINv6RrQBlQ",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setDropOffCoordintes(data.features[0].center);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (pickup && dropoff) {
      getPickUpCoordinates(pickup);
      getDorpoffCoordinates(dropoff);
    }
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <Map
        pickUpCoordintes={pickUpCoordintes}
        dropOffCoordintes={dropOffCoordintes}
      />
      <RideContainer>
        <RideSelector
          pickUpCoordintes={pickUpCoordintes}
          dropOffCoordintes={dropOffCoordintes}
        />
        <ConfirButtonContainer>
          <ConfireButton>Confire Uberx</ConfireButton>
        </ConfirButtonContainer>
      </RideContainer>
      <Link href="/search">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
    </Wrapper>
  );
}

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col 
`;

const RideContainer = tw.div`
flex-1 h-1/2 flex flex-col 

`;

const ConfirButtonContainer = tw.div`
border-t-2  
`;
const ConfireButton = tw.div`
 bg-black text-white my-4 mx-4 py-4 text-center text-xl rounded-xl cursor-pointer	
 `;

const ButtonContainer = tw.div`
absolute top-2 left-2 bg-gray-100 rounded-full p-2 cursor-pointer
 `;

const BackButton = tw.img`
h-10
 `;
