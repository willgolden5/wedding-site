import { Head } from '$fresh/runtime.ts';
import { Flex } from '../components/Flex.tsx';
import Navbar from '../components/Navbar.tsx';
import { Title } from '../components/Title.tsx';
import CenterReveal from '../islands/CenterReveal.tsx';
import RsvpForm from '../islands/RsvpForm.tsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Will and Kate Wedding</title>
      </Head>
      <Flex class={`flex flex-col h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed`}>
        {/* <Flex class={`flex flex-col h-screen w-screen  `}> */}
        <Navbar />
        <Flex class='flex flex-row items-center justify-center w-full h-full'>
          <Flex class='flex flex-col items-center h-full w-full justify-center'>
            <Title class='text-5xl'>Will</Title>
          </Flex>
          <Flex class='flex flex-col items-center h-full w-full justify-center'>
            <RsvpForm />
          </Flex>
          <Flex class='flex flex-col items-center h-full w-full justify-center'>
            <Title class='text-5xl'>Kate</Title>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
