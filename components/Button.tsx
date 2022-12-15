import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`${props.class} px-2 py-1 border(gray-500 1) text-grey-500 hover:text-white-600 hover:bg-gray-800`}
    />
  );
}
