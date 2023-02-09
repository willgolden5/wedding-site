import { Remult } from 'remult';
import { JSXInternal } from 'https://esm.sh/v99/preact@10.11.0/src/jsx.d.ts';
import { useState } from 'preact/hooks';
import { Button } from '../components/Button.tsx';
import { Flex } from '../components/Flex.tsx';
import { Input } from '../components/Input.tsx';
import { Radio } from '../components/Radio.tsx';
import { Text } from '../components/Text.tsx';
import { Title } from '../components/Title.tsx';
import { Rsvp } from '../model/rsvp.ts';

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  response: string;
  plusOne: boolean;
  plusOneName?: string;
}

const remult = new Remult();
const rsvpRepo = remult.repo(Rsvp);

export default function RsvpForm({ data }: { data: Rsvp[] }) {
  const [activeAttendingIndex, setActiveAttendingIndex] = useState(0);
  const [dietary, setDietary] = useState('');
  const [activePlusIndex, setActivePlusIndex] = useState(0);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    response: activeAttendingIndex === 0 ? true : false,
    plusOne: activePlusIndex === 0 ? true : false,
    plusOneName: '',
    dietaryRestrictions: dietary,
  });

  const onSubmit = (e: JSXInternal.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const { firstName, lastName, email, response, plusOne, plusOneName, dietaryRestrictions } = formState;
    rsvpRepo.save({
      first: firstName,
      last: lastName,
      email,
      attending: response,
      plusOne: plusOne,
      plusOneName: plusOneName,
      dietaryRestrictions,
    });
    console.log(formState);
  };

  const onInput = (e: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
    const { value, name } = e.target as EventTarget & { value: string; name: string };
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Flex class='flex-col items-center justify-center border-4 border-gray-900 p-2 bg-white w-[375px]'>
      <Flex class='flex-col items-center justify-center border-4 border-gray-900 p-4 w-full '>
        <Flex class='flex-row'>
          <Title class='text-[3em] font-semibold py-5 animate-fade-out-down hover:animate-bounce'>R</Title>
          <Title class='text-[3em] font-semibold py-5 animate-fade-out-down hover:animate-bounce'>S</Title>
          <Title class='text-[3em] font-semibold py-5 animate-fade-out-down hover:animate-bounce'>V</Title>
          <Title class='text-[3em] font-semibold py-5 animate-fade-out-down hover:animate-bounce'>P</Title>
        </Flex>
        <form class='flex flex-col  items-center w-full' onSubmit={onSubmit}>
          <Flex class='p-2 w-[100%]'>
            <Input
              onInput={onInput}
              class='p-2 w-[100%]'
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formState.firstName}
              required
            />
          </Flex>
          <Flex class='p-2 w-[100%]'>
            <Input
              onInput={onInput}
              class='p-2 w-[100%]'
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formState.lastName}
              required
            />
          </Flex>
          <Flex class='p-2 w-[100%]'>
            <Input
              onInput={onInput}
              class='p-2 w-[100%]'
              type='text'
              name='email'
              placeholder='your-email@gmail.com'
              value={formState.email}
              required
            />
          </Flex>
          <Flex class='p-2 w-full'>
            <Radio
              getActiveIndex={(i) => setActiveAttendingIndex(i)}
              data={{
                title: 'Attending?',
              }}
            />
          </Flex>
          <Flex class='p-2 w-full'>
            <Radio
              getActiveIndex={(i) => setDietary(i)}
              data={{
                title: 'Dietary Restrictions?',
              }}
            />
          </Flex>
          <Flex class='p-2 w-full'>
            <Radio
              getActiveIndex={(i) => setActivePlusIndex(i)}
              data={{
                title: 'Do you have a plus one?',
              }}
            />
          </Flex>
          {activePlusIndex === 1 ? (
            <Flex class='px-2 pb-6 flex-col w-[100%]'>
              <Text className='text-gray-500 pb-1'>What is their name?</Text>
              <Input
                class='p-2 w-[100%]]'
                type='text'
                name='plusOneName'
                placeholder='John Smith'
                onInput={onInput}
                value={formState.plusOneName}
              />
            </Flex>
          ) : (
            <></>
          )}
          <Button class='p-2 w-full' type='submit'>
            Submit
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
