import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { Text } from './Text.tsx';
import { Input } from './Input.tsx';
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
    getActiveIndex(checkboxEngaged ? 0 : 1);
  }, [checkboxEngaged]);

  return (
    <Flex class='flex-col w-full py-2'>
      <Text>{data.title}</Text>
      <Flex class='flex-row w-full justify-between px-14'>
        <Text>Yes</Text>
        <Text>No</Text>
      </Flex>
      <div class='flex flex-row w-[100%] items-center h-8 p-2 border(gray-500 1)'>
        <div
          class={`flex h-[100%] w-[50%] ${checkboxEngaged ? 'bg-gray-900' : 'bg-none'}  p-2`}
          onClick={() => setCheckboxEngaged(true)}
        />
        <div
          class={`flex h-[100%] w-[50%] ${checkboxEngaged ? 'bg-none' : 'bg-gray-900'} p-2`}
          onClick={() => setCheckboxEngaged(false)}
        />
      </div>
    </Flex>
  );
}
