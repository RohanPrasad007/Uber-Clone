import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import router, { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/84stgjq/uber-technoligies-new-20218114.jpg" />
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <Title>Login to access your accout </Title>
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
}

export default Login;

const Wrapper = tw.div`
flex flex-col  p-4
`;

const SignInButton = tw.div`
bg-black text-white text-center py-4 my-8 w-full cursor-pointer rounded-lg
`;

const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`;

const Title = tw.div`
text-5xl pt-4 text-gray-500
`;
const HeadImage = tw.img`
object-contain w-full
`;
