import { MutableRef, useRef } from 'preact/hooks';
import { Flex } from '../components/Flex.tsx';
import MouseIcon from '../components/MouseIcon.tsx';
import Navbar from '../components/Navbar.tsx';
import { Text } from '../components/Text.tsx';
import About from '../islands/About.tsx';
import RsvpForm from '../islands/RsvpForm.tsx';

const Home = () => {
  const aboutRef: MutableRef<null> = useRef(null);
  const scrollCallback = () => {
    if (!aboutRef.current) return;
    console.log(aboutRef.current);
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar active='true' />
      <Flex class='flex flex-col h-screen w-screen'>
        <Flex class='flex flex-col items-center h-full w-full justify-center animate-fade-in-up'>
          <RsvpForm />
          <MouseIcon />
          <button onClick={() => scrollCallback()}>TEST</button>
        </Flex>
      </Flex>
      <About ref={aboutRef} />
      <Flex class='flex flex-col h-screen w-screen'>
        <Flex class='flex flex-row items-center justify-center w-full h-full'>
          <Text>REGISTRY HERE</Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
