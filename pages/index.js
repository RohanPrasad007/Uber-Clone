import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import router, { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ userName: user.displayName, photoUrl: user.photoURL });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);
  return (
    <Wrapeer>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technoligies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.userName}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
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
 h-12 w-12 rounded-full cursor-pointer 
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
