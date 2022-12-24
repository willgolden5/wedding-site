import { MutableRef, useRef, Ref } from 'preact/hooks';
import { Flex } from '../components/Flex.tsx';
import MouseIcon from '../components/MouseIcon.tsx';
import Navbar from '../components/Navbar.tsx';
import { Text } from '../components/Text.tsx';
import About from '../islands/About.tsx';
import RsvpForm from '../islands/RsvpForm.tsx';

const Home = () => {
  const homeRef: MutableRef<null> = useRef(null);
  const aboutRef: MutableRef<null> = useRef(null);
  const registryRef = useRef(null);
  const scrollToHome = () => homeRef && homeRef.current && homeRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () =>
    aboutRef &&
    aboutRef.current &&
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
  const scrollToRegistry = () =>
    registryRef && registryRef.current && registryRef.current.scrollIntoView({ behavior: 'smooth' });

  const menu = [
    { name: 'Home', scroller: scrollToHome },
    { name: 'About', scroller: scrollToAbout },
    { name: 'Registry', scroller: scrollToRegistry },
  ];

  return (
    <div>
      <Navbar active='true' menu={menu} />
      <Flex class='flex flex-col h-screen w-screen'>
        <div ref={homeRef}></div>
        <Flex class='flex flex-col items-center h-full w-full justify-center animate-fade-in-up'>
          <RsvpForm />
          <MouseIcon />
        </Flex>
      </Flex>
      <Flex class='flex-col h-screen w-screen'>
        <Flex class='flex-row items-center justify-center w-full h-full'>
          <div ref={aboutRef}>
            <About />
          </div>
        </Flex>
      </Flex>
      <Flex class='flex flex-col h-screen w-screen'>
        <Flex class='flex flex-row items-center justify-center w-full h-full'>
          <div ref={registryRef}></div>
          <Text>REGISTRY HERE</Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;