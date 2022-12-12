import { Head } from '$fresh/runtime.ts';
import { Flex } from '../components/Flex.tsx';
import { Title } from '../components/Title.tsx';
import RsvpForm from '../islands/RsvpForm.tsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <Flex class='flex flex-col items-center h-screen w-screen justify-center'>
        <Title class='text-2xl'>Will & Kate</Title>
        <RsvpForm />
      </Flex>
    </>
  );
}
