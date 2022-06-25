import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useState } from 'react';

import { rgbaToCSS } from '../utils/colors';
import { CopyBlock, ocean } from 'react-code-blocks';

import Listbox from '../components/generics/Listbox';
import type { Option, ListboxOptions } from '../components/generics/Listbox';

import ColorPicker from '../components/generics/ColorPicker';
import { RgbaColor } from 'react-colorful';

import GithubLink from '../components/GithubLink';
import SwitchColorsToggle from '../components/SwitchColorsToggle';

import MainText from '../components/MainText';

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

const mainText = 'TailwindCSS Text Gradient Generator';

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

  // const code = `text-transparent bg-clip-text ${direction} from-[${rgbaToCSS(
  //   initialColor
  // )}] to-[${rgbaToCSS(toColor)}]`;

  const code = `<h1 class="text-transparent bg-clip-text ${direction} from-[${rgbaToCSS(
    initialColor
  )}] to-[${rgbaToCSS(toColor)}]">
  ${mainText}
</h1>`;

  const onNewDirection = (option: Option) => {
    setDirection(option.value);
  };

  const switchColors = useCallback(() => {
    const temp = initialColor;
    setInitialColor(toColor);
    setToColor(temp);
    setAreColorSwitch(!areColorSwitch);
  }, [initialColor, toColor, areColorSwitch]);

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Tailwindcss Text Gradient Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen overflow-auto bg-neutral-900 p-6 md:p-10 xl:px-24">
        <MainText
          direction={direction}
          fromColor={initialColor}
          toColor={toColor}
        >
          {mainText}
        </MainText>

        <div className="fixed bottom-4 left-0 right-0 z-10 mx-auto flex w-auto max-w-xl flex-wrap items-center justify-between gap-2 bg-transparent px-6 py-3 xxs:gap-5 md:top-8 md:bottom-auto md:left-1/2 md:right-auto md:-translate-x-1/2 md:flex-nowrap md:justify-center md:gap-6 md:rounded-2xl">
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

        <div className="copy-block fixed bottom-[170px] right-0 left-0 mx-auto w-auto max-w-xl px-6 xxs:bottom-[150px] md:static md:mt-44 md:w-3/4 md:max-w-fit">
          <CopyBlock
            text={code}
            language="html"
            theme={ocean}
            codeBlock={true}
            showLineNumbers={false}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
