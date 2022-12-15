import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`${props.class} border(gray-900 1)  placeholder-gray-500 focus:outline-none hover:shadow-xl`}
      onInput={props.onInput}
    />
  );
}
