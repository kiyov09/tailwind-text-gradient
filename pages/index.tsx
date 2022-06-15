import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';

import { rgbaToCSS } from '../utils/colors';
import { CopyBlock, dracula } from 'react-code-blocks';

import Listbox from '../components/generics/Listbox';
import type { Option, ListboxOptions } from '../components/generics/Listbox';

import ColorPicker from '../components/generics/ColorPicker';
import { RgbaColor } from 'react-colorful';

import GithubLink from '../components/GithubLink';
import SwitchColorsToggle from '../components/SwitchColorsToggle';

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
  const [areColorSwitch, setAreColorSwitch] = useState(false);

  const code = `text-transparent bg-clip-text ${direction} from-[${rgbaToCSS(
    initialColor
  )}] to-[${rgbaToCSS(toColor)}]`;

  const textRef = useRef<HTMLHeadingElement>(null);

  const onNewDirection = (option: Option) => {
    setDirection(option.value);
  };

  const switchColors = useCallback(() => {
    const temp = initialColor;
    setInitialColor(toColor);
    setToColor(temp);
    setAreColorSwitch(!areColorSwitch);
  }, [initialColor, toColor, areColorSwitch]);

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
    <div className="h-screen w-screen">
      <Head>
        <title>Tailwindcss Text Gradient Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen overflow-auto bg-neutral-900 p-6 md:p-10 lg:px-24">
        <h1
          ref={textRef}
          className={`mx-auto w-auto max-w-7xl pb-2 ${direction} mt-28 from-red-500 to-blue-500 bg-clip-text text-center text-4xl font-extrabold leading-none text-transparent xxs:text-5xl sm:text-6xl md:mt-60 md:place-self-center md:text-8xl lg:text-[8rem]`}
        >
          TailwindCSS text gradient generator
        </h1>

        <div className="fixed bottom-[170px] right-0 left-0 mx-auto w-auto max-w-xl px-6 xxs:bottom-[150px] md:static md:mt-44 md:w-3/4 md:max-w-6xl">
          <CopyBlock
            text={code}
            language="html"
            theme={dracula}
            customStyle={{
              padding: '1.5rem',
              paddingRight: '3.5rem',
              overflow: 'auto',
              textAlign: 'center',
              borderRadius: '0.75rem',
            }}
          />
        </div>

        <div className="fixed bottom-4 left-0 right-0 mx-auto flex w-auto max-w-xl flex-wrap items-center justify-between gap-2 bg-transparent px-6 py-3 xxs:gap-5 md:top-8 md:bottom-auto md:left-1/2 md:right-auto md:-translate-x-1/2 md:flex-nowrap md:justify-center md:gap-6 md:rounded-2xl">
          <Listbox options={options} onSelect={onNewDirection} />

          <ColorPicker
            onChange={(color) => setInitialColor(color)}
            color={initialColor}
          >
            From
          </ColorPicker>

          <SwitchColorsToggle onChange={switchColors} isOn={areColorSwitch} />

          <ColorPicker onChange={(color) => setToColor(color)} color={toColor}>
            To
          </ColorPicker>
        </div>

        <GithubLink />
      </main>
    </div>
  );
};

export default Home;
