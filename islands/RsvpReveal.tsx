import { useState } from 'preact/hooks';
import RsvpForm from './RsvpForm.tsx';
// import { Rsvp } from '../model/rsvp.ts';
// import { Remult } from 'remult';
import { Flex } from '../components/Flex.tsx';
import { Title } from '../components/Title.tsx';
import { Button } from '../components/Button.tsx';

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  response: string;
  plusOne: boolean;
  plusOneName?: string;
}

// const remult = new Remult();
// const rsvpRepo = remult.repo(Rsvp);

const RevpReveal = () => {
  const [rsvpMode, setRsvpMode] = useState(false);
  return rsvpMode ? (
    <RsvpForm isFinished={setRsvpMode} />
  ) : (
    <Flex class='flex-col items-center justify-center border-4 border-gray-900 p-2 bg-white w-[55%]'>
      <Flex class='flex-col items-center justify-center border-4 border-gray-900 p-4 w-full '>
        <Flex class='flex-row mt-2'>
          <Title class='text-[3.5em] font-semibold animate-fade-out-down hover:animate-bounce px-2'>Will </Title>
          <Title class='text-[3.5em] font-thin  animate-fade-out-down hover:animate-bounce'>|</Title>
          <Title class='text-[3.5em] font-semibold animate-fade-out-down hover:animate-bounce px-2'> Kate</Title>
        </Flex>
        <Flex class='flex-col justify-center w-full items-center'>
          <Title class='text-[3em]'>Friday, August 25th</Title>
          <Title class='text-[3em]'>The Foundry, New York City</Title>
        </Flex>
        <Flex class='flex-row justify-center w-full items-center my-4'>
          <Button class='p-2 w-[45%] py-2 text-[1.4em]' onClick={() => setRsvpMode(true)}>
            RSVP
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RevpReveal;
