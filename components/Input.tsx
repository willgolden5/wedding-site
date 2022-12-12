import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`${props.class} px-2 py-1 border(gray-500 2) hover:bg-gray-200`}
      onInput={props.onInput}
    />
  );
}
