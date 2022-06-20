import { RefObject, useRef } from 'react';
import { RgbaColor } from 'react-colorful';
import { rgbaToCSS } from '../utils/colors';

type MainTextProps = {
  children: string;
  direction: string;
  fromColor: RgbaColor;
  toColor: RgbaColor;
};

function changeCSSPropertyOnRef(
  ref: RefObject<HTMLElement>,
  property: string,
  value: string
) {
  if (ref.current) {
    ref.current.style.setProperty(property, value);
  }
}

export default function MainText({
  children,
  direction,
  fromColor,
  toColor,
}: MainTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  changeCSSPropertyOnRef(textRef, '--tw-gradient-from', rgbaToCSS(fromColor));
  changeCSSPropertyOnRef(textRef, '--tw-gradient-to', rgbaToCSS(toColor));

  return (
    <h1
      ref={textRef}
      className={`mx-auto w-auto max-w-7xl pb-2 ${direction} mt-28 from-red-500 to-blue-500 bg-clip-text text-center text-4xl font-extrabold leading-none text-transparent xxs:text-5xl sm:text-7xl md:mt-60 md:place-self-center md:text-8xl xl:text-[7.5rem]`}
    >
      {children}
    </h1>
  );
}
