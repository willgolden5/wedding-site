import { JSXInternal } from 'https://esm.sh/v99/preact@10.11.0/src/jsx.d.ts';
import { useEffect, useState } from 'preact/hooks';
import { Button } from '../components/Button.tsx';
import { Flex } from '../components/Flex.tsx';
import { Input } from '../components/Input.tsx';
import { Radio } from '../components/Radio.tsx';
import { Text } from '../components/Text.tsx';
import { Title } from '../components/Title.tsx';

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  response: string;
  plusOne: boolean;
  plusOneName?: string;
}

export default function RsvpForm() {
  const [activeAttendingIndex, setActiveAttendingIndex] = useState(0);
  const [activePlusIndex, setActivePlusIndex] = useState(0);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    response: activeAttendingIndex === 0 ? 'Yes' : 'No',
    plusOne: activePlusIndex === 0 ? true : false,
    plusOneName: '',
  });

  const onSubmit = (e: JSXInternal.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const { firstName, lastName, email, response, plusOne, plusOneName } = formState;

    console.log(formState);
  };

  const onInput = (e: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
    const { value, name } = e.target as EventTarget & { value: string; name: string };
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Flex class='flex-col items-center justify-center border-2 p-2'>
      <Flex class='flex-col items-center justify-center border-2 p-4 w-full'>
        <Title class='text-2xl'>RSVP</Title>
        <form class='flex flex-col p-2 items-center w-full' onSubmit={onSubmit}>
          <Flex class='p-2'>
            <Input
              onInput={onInput}
              class='p-2'
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formState.firstName}
              required
            />
          </Flex>
          <Flex class='p-2'>
            <Input
              onInput={onInput}
              class='p-2'
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formState.lastName}
              required
            />
          </Flex>
          <Flex class='p-2'>
            <Input
              onInput={onInput}
              class='p-2'
              type='text'
              name='email'
              placeholder='johnsmith@gmail.com'
              value={formState.email}
              required
            />
          </Flex>
          <Flex class='p-2 w-full'>
            <Radio
              getActiveIndex={(i) => setActiveAttendingIndex(i)}
              data={{
                title: 'Attending?',
                value: [
                  {
                    label: 'Yes',
                  },
                  {
                    label: 'No',
                  },
                ],
              }}
            />
          </Flex>
          <Flex class='p-2 w-full'>
            <Radio
              getActiveIndex={(i) => setActivePlusIndex(i)}
              data={{
                title: 'Do you have a plus one?',
                value: [
                  {
                    label: 'No',
                  },
                  {
                    label: 'Yes',
                  },
                ],
              }}
            />
          </Flex>
          {activePlusIndex === 1 ? (
            <Flex class='p-2 flex-col'>
              <Text>What is their name?</Text>
              <Input
                class='p-2'
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
