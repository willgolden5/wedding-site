import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export function Flex(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} disabled={!IS_BROWSER || props.disabled} class={`${props.class} flex`}>
      {props.children}
    </div>
  );
}
