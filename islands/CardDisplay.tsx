import Card from '../components/Card.tsx';
import { Flex } from '../components/Flex.tsx';
import { Text } from '../components/Text.tsx';
import { Title } from '../components/Title.tsx';

const meetingText =
  'Katherine and I met for the first time on a Tuesday at her apartment on Union Street in Park Slope. Confidently nervous, I whisked her to redhook for our first date. I knew something special was happening but I had no idea how...';
const datingText =
  'Within months we were in love. Every moment together was precious. We moved into our first apartment less than a mile away from where we first met.';
const engagementText =
  'With the park fully in bloom, I knew what was coming next. I reached out to my groomsman Danny for tips on preparing for the engagement. Our parents and closest friends met us by the park to celebrate.';

const CardDisplay = () => {
  return (
    <Flex class='flex-col w-full h-full items-center'>
      <Flex class='flex-col items-center justify-evenly w-full h-full'>
        <Flex class='p-4'>
          <Title class='text-5xl'>Our Story...</Title>
        </Flex>
        <Flex class='flex-row items-center justify-evenly w-full'>
          <Flex class='flex-col w-[25%]'>
            <Card title='Meeting' description={meetingText} image='https://i.imgur.com/aCbYgT0.jpg' />
          </Flex>
          <Flex class='flex-col w-[25%]'>
            <Card title='Dating' description={datingText} image='https://i.imgur.com/ZuKzD4a.jpg' />
          </Flex>
          <Flex class='flex-col w-[25%]'>
            <Card title='Engagement' description={engagementText} image='https://i.imgur.com/S0V80NU.jpg' />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardDisplay;
