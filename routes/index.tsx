import { Head } from '$fresh/runtime.ts';
import { useRef } from 'preact/hooks';
import { Flex } from '../components/Flex.tsx';
import MouseIcon from '../components/MouseIcon.tsx';
import Navbar from '../components/Navbar.tsx';
import { Text } from '../components/Text.tsx';
import CardDisplay from '../islands/CardDisplay.tsx';
import RsvpForm from '../islands/RsvpForm.tsx';

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const registryRef = useRef(null);
  return (
    <>
      <Head>
        <title>Will and Kate Wedding</title>
      </Head>
      <Navbar active='true' />
      <Flex class='flex flex-col h-screen w-screen'>
        <Flex ref={homeRef} class='flex flex-col items-center h-full w-full justify-center animate-fade-in-up'>
          <RsvpForm />
          <MouseIcon />
        </Flex>
      </Flex>
      <Flex ref={aboutRef} class='flex flex-col h-screen w-screen'>
        <Flex class='flex flex-row items-center justify-center w-full h-full'>
          <CardDisplay />
        </Flex>
      </Flex>
      <Flex ref={registryRef} class='flex flex-col h-screen w-screen'>
        <Flex class='flex flex-row items-center justify-center w-full h-full'>
          <Text>REGISTRY HERE</Text>
        </Flex>
      </Flex>
    </>
  );
}
