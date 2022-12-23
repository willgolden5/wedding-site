import { Flex } from './Flex.tsx';

const Chevron = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='' viewBox='0 0 16 16'>
    <path
      fill-rule='evenodd'
      d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
    />
  </svg>
);

const MouseIcon = () => (
  <Flex class='flex-col items-center pt-12 mr-4'>
    <div class='absolute w-4 h-1 opacity-0 transform-scale-[.03] animate-move-chevron-1st before::(left-0 transform-skew-y-[30deg] top-0 w-[50%] h-[100%] bg-gray-900) after::( w-[50%] transform-skew-y-[-30deg] top-0 w-[50%] h-[100%] bg-gray-900)'>
      <Chevron />
    </div>
    <div class='absolute w-4 h-1 opacity-0 transform-scale-[.03] animate-move-chevron-nth before::(left-0 transform-skew-y-[30deg] top-0 w-[50%] h-[100%] bg-gray-900) after::(w-[50%] transform-skew-y-[-30deg] top-0 w-[50%] h-[100%] bg-gray-900)'>
      <Chevron />
    </div>
    <div class='absolute w-4 h-1 opacity-0 transform-scale-[.03] animate-move-chevron-nth before::(left-0 transform-skew-y-[30deg] top-0 w-[50%] h-[100%] bg-gray-900) after::(w-[50%] transform-skew-y-[-30deg] top-0 w-[50%] h-[100%] bg-gray-900)'>
      <Chevron />
    </div>
  </Flex>
);

export default MouseIcon;
