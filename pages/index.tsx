import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import Listbox from '../components/generics/Listbox';
import type { Option, ListboxOptions } from '../components/generics/Listbox';

import ColorPicker from '../components/generics/ColorPicker';
import { SwitchHorizontalIcon } from '@heroicons/react/outline';
import { RgbaColor } from 'react-colorful';

import { rgbaToCSS } from '../utils/colors';

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
    <div className="">
      <Head>
        <title>Tailwindcss Text Gradient Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid h-screen w-screen place-items-center overflow-hidden bg-neutral-900 p-8 md:p-12 lg:px-32">
        <h1
          ref={textRef}
          className={`w-full ${direction} from-red-500 to-blue-500 bg-clip-text text-center text-[6rem] font-extrabold leading-none text-transparent md:text-[8rem] lg:text-[10rem]`}
        >
          Lorem ipsum dolor.
        </h1>

        <div className="fixed bottom-4 left-0 right-0 flex w-auto flex-wrap items-center justify-between gap-5 bg-transparent px-6 py-3 after:absolute after:inset-0 after:-z-10 md:top-10 md:bottom-auto md:left-auto md:right-auto md:flex-nowrap md:justify-center md:gap-8 md:rounded-2xl md:border md:border-neutral-700 md:after:rounded-2xl md:after:bg-neutral-800 md:after:blur-sm">
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
