import { Flex } from '../components/Flex.tsx';
import CardDisplay from './CardDisplay.tsx';

type AboutProps = {
  ref: any;
};

const About = ({ ref }: AboutProps) => {
  return (
    <Flex class='flex flex-col h-screen w-screen items-center justify-center'>
      <Flex class='flex flex-row items-center justify-center w-full h-full'>
        <CardDisplay ref={ref} />
      </Flex>
    </Flex>
  );
};

export default About;
