import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import Listbox from '../components/generics/Listbox';
import type { Option, ListboxOptions } from '../components/generics/Listbox';

import ColorPicker from '../components/generics/ColorPicker';
import { SwitchHorizontalIcon } from '@heroicons/react/outline';
import { RgbaColor } from 'react-colorful';

import { rgbaToCSS } from '../utils/colors';
import { CopyBlock, dracula } from 'react-code-blocks';

const options: ListboxOptions = [
  {
    id: 1,
    label: 'To right',
    value: 'bg-gradient-to-r',
  },
  {
    id: 2,
    label: 'To top',
    value: 'bg-gradient-to-t',
  },
  {
    id: 3,
    label: 'To bottom',
    value: 'bg-gradient-to-b',
  },
  {
    id: 4,
    label: 'To left',
    value: 'bg-gradient-to-l',
  },
  {
    id: 5,
    label: 'To top right',
    value: 'bg-gradient-to-tr',
  },
  {
    id: 6,
    label: 'To top left',
    value: 'bg-gradient-to-tl',
  },
  {
    id: 7,
    label: 'To bottom right',
    value: 'bg-gradient-to-br',
  },
  {
    id: 8,
    label: 'To bottom left',
    value: 'bg-gradient-to-bl',
  },
];

const Home: NextPage = () => {
  const [direction, setDirection] = useState('bg-gradient-to-r');

  const [initialColor, setInitialColor] = useState<RgbaColor>({
    r: 239,
    g: 68,
    b: 68,
    a: 1,
  });
  const [toColor, setToColor] = useState<RgbaColor>({
    r: 59,
    g: 130,
    b: 246,
    a: 1,
  });

  const code = `text-transparent bg-clip-text ${direction} from-[${rgbaToCSS(
    initialColor
  )}] to-[${rgbaToCSS(toColor)}]`;

  const textRef = useRef<HTMLHeadingElement>(null);

  const onNewDirection = (option: Option) => {
    console.log(option);
    setDirection(option.value);
  };

  const switchColors = () => {
    const temp = initialColor;
    setInitialColor(toColor);
    setToColor(temp);
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.setProperty(
        '--tw-gradient-from',
        rgbaToCSS(initialColor)
      );
    }
  }, [initialColor]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.setProperty('--tw-gradient-to', rgbaToCSS(toColor));
    }
  }, [toColor]);

  return (
    <div className="min-w-screen min-h-screen">
      <Head>
        <title>Tailwindcss Text Gradient Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid h-screen w-screen place-items-center bg-neutral-900 p-6 md:p-10 lg:px-24">
        <h1
          ref={textRef}
          className={`mx-auto max-w-7xl pb-6 ${direction} from-red-500 to-blue-500 bg-clip-text text-center text-6xl font-extrabold leading-none text-transparent md:mb-20 md:place-self-end md:text-[7rem] lg:text-[8rem]`}
        >
          TailwindCSS text gradient generator
        </h1>

        {/*<GeneratedCode code={code} />*/}
        <div className="place-self-start md:place-self-auto">
          <CopyBlock
            text={code}
            language="html"
            theme={dracula}
            customStyle={{
              padding: '1.5rem',
              paddingRight: '3.5rem',
              overflow: 'auto',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          />
        </div>

        <div className="fixed bottom-4 left-0 right-0 flex w-auto flex-wrap items-center justify-between gap-5 bg-transparent px-6 py-3 after:absolute after:inset-0 after:-z-10 md:top-8 md:bottom-auto md:left-1/2 md:right-auto md:-translate-x-1/2 md:flex-nowrap md:justify-center md:gap-6 md:rounded-2xl md:after:rounded-2xl">
          <Listbox options={options} onSelect={onNewDirection} />
          <ColorPicker
            onChange={(color) => setInitialColor(color)}
            color={initialColor}
          >
            From
          </ColorPicker>
          <button onClick={switchColors}>
            <SwitchHorizontalIcon className="h-6 w-6 text-neutral-50 transition-transform duration-300 active:rotate-180" />
          </button>
          <ColorPicker onChange={(color) => setToColor(color)} color={toColor}>
            To
          </ColorPicker>
        </div>
      </main>
    </div>
  );
};

export default Home;
