import Card from '../components/Card.tsx';
import { Flex } from '../components/Flex.tsx';
import { Title } from '../components/Title.tsx';

type CardDisplayProps = {
  ref: any;
};

const meetingText =
  'Katherine and I met for the first time on a Tuesday at her apartment on Union Street in Park Slope. With my heart in my throat, I whisked her to redhook for our first date. I knew something special was happening but I had no clue what was in store...';
const datingText =
  'Within months we were in love. Every moment together was precious. We moved into our first apartment less than a mile away from where we first met.';
const engagementText =
  'With the park fully in bloom, I knew what was coming next. I reached out to my groomsman Danny for tips on preparing for the engagement. Our parents and closest friends met us by the park to celebrate.';

const CardDisplay = ({ ref }: CardDisplayProps) => {
  return (
    <Flex ref={ref} class='flex-col w-full h-full items-center'>
      <Flex class='p-8'>
        <Title class='text-5xl'>Our Story...</Title>
      </Flex>
      <Flex class='flex-row items-center justify-evenly w-full h-full'>
        <Flex class='flex-col h-full w-[25%]'>
          <Card title='Meeting' description={meetingText} image='https://i.imgur.com/Hml6ivr.jpeg' />
        </Flex>
        <Flex class='flex-col h-full w-[25%]'>
          <Card title='Dating' description={datingText} image='../static/proposal.jpg' />
        </Flex>
        <Flex class='flex-col h-full w-[25%]'>
          <Card title='Engagement' description={engagementText} image='./static/proposal.jpg' />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardDisplay;
