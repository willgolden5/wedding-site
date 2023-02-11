import { MutableRef, useRef, Ref } from 'preact/hooks';
import { Flex } from '../components/Flex.tsx';
import MouseIcon from '../components/MouseIcon.tsx';
import Navbar from '../components/Navbar.tsx';
import { Text } from '../components/Text.tsx';
import About from '../islands/About.tsx';
import RsvpReveal from '../islands/RsvpReveal.tsx';

const Home = () => {
  const homeRef: MutableRef<null> = useRef(null);
  const aboutRef: MutableRef<null> = useRef(null);
  const registryRef = useRef(null);
  const travelRef = useRef(null);
  const scheduleRef = useRef(null);
  const scrollToHome = () =>
    homeRef &&
    homeRef.current &&
    homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
  const scrollToAbout = () =>
    aboutRef &&
    aboutRef.current &&
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
  const scrollToRegistry = () =>
    registryRef &&
    registryRef.current &&
    registryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
  const scrollToTravel = () =>
    travelRef &&
    travelRef.current &&
    travelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  const scrollToSchedule = () =>
    scheduleRef &&
    scheduleRef.current &&
    scheduleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

  const menu = [
    { name: 'Home', scroller: scrollToHome },
    { name: 'About', scroller: scrollToAbout },
    { name: 'Registry', scroller: scrollToRegistry },
    { name: 'Travel Info', scroller: scrollToTravel },
    { name: 'Schedule', scroller: scrollToSchedule },
  ];

  return (
    <div class='max-w-[100%] overflow-hidden'>
      <Navbar active='true' menu={menu} />
      <Flex class='flex flex-col h-screen w-screen'>
        <div ref={homeRef}></div>
        <Flex class='flex flex-col items-center h-full w-full justify-center animate-fade-in-up'>
          <RsvpReveal />
          {/* <MouseIcon /> */}
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
      <Flex class='flex flex-col h-screen w-screen'>
        <Flex class='flex flex-row items-center justify-center w-full h-full'>
          <div ref={travelRef}>
            <Text>TRAVEL HERE</Text>
          </div>
        </Flex>
      </Flex>
      <Flex class='flex flex-col h-screen w-screen'>
        <Flex class='flex flex-row items-center justify-center w-full h-full'>
          <div ref={scheduleRef}>
            <Text>SCHEDULE HERE</Text>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
