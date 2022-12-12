import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export function Text(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...props} disabled={!IS_BROWSER || props.disabled} class={`${props.class} text-gray-600`}>
      {props.children}
    </p>
  );
}
