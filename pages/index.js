import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapeer>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technoligies-new-20218114.jpg" />
          <Profile>
            <Name>Rohan Prasad</Name>
            <UserImage src="https://rohan-prasad-portfolio.web.app/assets/images/profile.jpg" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapeer>
  );
}

const Wrapeer = tw.div`
flex flex-col  h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;
const UberLogo = tw.img`
h-28 border-gray-200
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4  text-small
 `;

const UserImage = tw.img`
 h-12 w-12 rounded-full
 `;

const ActionButtons = tw.div`
 flex
 `;

const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1  m-1 h-32 items-center  justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-3/5 `;

const InputButton = tw.div`
h-20 bg-gray-200 text-xl p-4 flex items-center mt-8 rounded-lg
`;
