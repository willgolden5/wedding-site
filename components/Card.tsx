import { Button } from './Button.tsx';
import { Flex } from './Flex.tsx';
import { Text } from './Text.tsx';
import { Title } from './Title.tsx';

type CardProps = {
  title: string;
  description: string;
  image: string;
  isHovered?: boolean;
};

const Card = ({ title, description, image, isHovered }: CardProps) => {
  return (
    <Flex class='flex flex-col h-[325px] w-full p-4 border-4 border-gray-900 group animate-fade-in-up'>
      <Flex class='flex-col h-full transition-all transform translate-y-12 hidden group-hover:block group-hover:translate-y-0'>
        <img class='w-full h-full group-hover:opacity-100' src={image} alt='' />
      </Flex>
      <Flex class='flex-col block group-hover:hidden translate-y-0 group-hover:translate-y-12'>
        <Flex class='flex-row w-full items-center justify-center py-4 opacity-100 group-hover:opacity-0'>
          <Title>{title}</Title>
        </Flex>
        <Flex class='flex-row w-full items-center justify-center py-4 opacity-100 group-hover:opacity-0'>
          <Text>{description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
