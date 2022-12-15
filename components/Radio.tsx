import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { Text } from './Text.tsx';
import { Input } from './Input.tsx';
import { useEffect, useState } from 'preact/hooks';
import { Flex } from './Flex.tsx';

interface RadioOption {
  label: string;
}

interface Option {
  title: string;
  value: RadioOption[];
}

interface Options {
  data: Option;
  getActiveIndex: (i: number) => void;
}

export function Radio({ data, getActiveIndex }: Options) {
  const [isChecked, setIsChecked] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getActiveIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div class='flex flex-row w-full items-center'>
      <label class='flex flex-col w-full'>
        <Text class=''>{data.title}</Text>
        <Flex class='flex-row justify-between px-8'>
          {data.value.map((value, index) => (
            <label>
              <Flex class='flex-row items-center w-full justify-between'>
                <Text class='pr-2 text-gray-500'>{value.label}</Text>
                <Input
                  class='p-2'
                  type='radio'
                  checked={activeIndex === index}
                  onClick={() => {
                    setIsChecked(!isChecked);
                    setActiveIndex(index);
                  }}
                />
              </Flex>
            </label>
          ))}
        </Flex>
      </label>
    </div>
  );
}
