import { Text } from './Text.tsx';
import { useEffect, useState } from 'preact/hooks';
import { Flex } from './Flex.tsx';

interface Option {
  title: string;
}

interface Options {
  data: Option;
  getActiveIndex: (i: number) => void;
}

export function Radio({ data, getActiveIndex }: Options) {
  const [checkboxEngaged, setCheckboxEngaged] = useState(false);

  useEffect(() => {
    getActiveIndex(checkboxEngaged ? 1 : 0);
  }, [checkboxEngaged]);

  return (
    <Flex class='flex-col w-full py-2'>
      <Text>{data.title}</Text>
      <Flex class='flex-row w-full justify-between px-14'>
        <Text>Yes</Text>
        <Text>No</Text>
      </Flex>
      <Flex class='flex flex-row w-[100%] items-center h-8 p-2 border(gray-500 1)'>
        <div
          class={`flex h-[100%] w-[50%] ${checkboxEngaged ? 'bg-gray-900' : 'bg-none'}  p-2`}
          onClick={(e) => {
            e.preventDefault();
            setCheckboxEngaged(true);
          }}
        />
        <div
          class={`flex h-[100%] w-[50%] ${checkboxEngaged ? 'bg-none' : 'bg-gray-900'} p-2`}
          onClick={(e) => {
            e.preventDefault();
            setCheckboxEngaged(false);
          }}
        />
      </Flex>
    </Flex>
  );
}
