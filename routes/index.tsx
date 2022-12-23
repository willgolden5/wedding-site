import { Head } from '$fresh/runtime.ts';
import Home from '../islands/Home.tsx';

export default function Main() {
  return (
    <>
      <Head>
        <title>Will and Kate Wedding</title>
      </Head>
      <Home />
    </>
  );
}
