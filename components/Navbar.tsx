import { Flex } from './Flex.tsx';
import { Text } from './Text.tsx';
import { Title } from './Title.tsx';
import './styles.css';

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
    <div class='bg-white w-full py-6 px-8 flex flex-col md:flex-row gap-4'>
      <div class='flex items-center flex-1 animate-fade-in-up'>
        <Flex class='flex-row'>
          <Title class='text-4xl font-semibold animate-fade-out-down hover:animate-bounce '>Will</Title>
          <Title class='text-4xl font-semibold animate-fade-out-down hover:animate-bounce px-1'>and</Title>
          <Title class='text-4xl font-semibold animate-fade-out-down hover:animate-bounce'>Kate</Title>
        </Flex>
      </div>
      <ul class='flex items-end gap-6'>
        {menus.map((menu) => (
          <li>
            <a href={menu.href}>
              <Text
                class={
                  'text-gray-500 hover:text-green-100 py-1 border-gray-500 animate-fade-in-up text-semi-bold text-2xl link link-underline link-underline-black' +
                  (menu.href === active ? ' font-bold border-b-2' : '')
                }
              >
                {menu.name}
              </Text>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
