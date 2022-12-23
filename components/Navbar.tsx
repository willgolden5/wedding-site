import { Flex } from './Flex.tsx';
import { Text } from './Text.tsx';
import { Title } from './Title.tsx';

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: 'Home', href: '/' },
    { name: 'Registry', href: '/registry' },
    { name: 'About', href: '/about' },
  ];

  return (
    <div class='fixed bg-white w-full py-6 px-8 flex flex-col md:flex-row gap-4'>
      <div class='flex items-center flex-1 animate-fade-in-up'>
        <Flex class='flex-row ml-2'>
          <Title class='text-4xl font-semibold animate-fade-out-down hover:animate-bounce '>Will</Title>
          <Title class='text-4xl font-semibold animate-fade-out-down hover:animate-bounce px-1'>and</Title>
          <Title class='text-4xl font-semibold animate-fade-out-down hover:animate-bounce'>Kate</Title>
        </Flex>
      </div>
      <ul class='flex items-end gap-8 mr-6'>
        {menus.map((menu) => (
          <li>
            <a class='group text-green-600 transition duration-300 ' href={menu.href}>
              <Text class='text-gray-500 text-2xl animate-fade-in-up'>{menu.name}</Text>
              <span class='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-green-100'></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
