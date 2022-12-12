import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export function Title(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 {...props} disabled={!IS_BROWSER || props.disabled} class={`${props.class} text-gray-900`}>
      {props.children}
    </h1>
  );
}
