import { RgbaColorPicker } from 'react-colorful';
import type { RgbaColor } from 'react-colorful';

import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { rgbaToCSS } from '../../utils/colors';

export type ColorPickerProps = {
  color: RgbaColor;
  onChange: (color: RgbaColor) => void;
  children?: string;
};

export default function ColorPicker({
  color: colorProp,
  onChange,
  children,
}: ColorPickerProps) {
  const [color, setColor] = useState(colorProp);

  const onColorChange = (newColor: RgbaColor) => {
    setColor(newColor);
    onChange(newColor);
  };

  useEffect(() => {
    setColor(colorProp);
  }, [colorProp]);

  return (
    <Popover className="relative flex-1">
      <Popover.Button className="flex h-10 w-full items-center justify-between gap-8 rounded-xl bg-neutral-800 px-4 py-2 text-base tracking-wider text-white outline-none ring-1 ring-neutral-700 hover:ring-2 hover:ring-neutral-600 hover:ring-offset-2 hover:ring-offset-neutral-900 focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-neutral-900 md:w-auto">
        <span className="flex-1 text-left">{children}</span>
        <div
          className="h-full w-10 rounded-md"
          style={{ backgroundColor: `${rgbaToCSS(color)}` }}
        ></div>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="fixed bottom-16 left-5 mb-4 h-60 w-[calc(100vw-2.5rem)] rounded-md bg-neutral-800 p-1 md:absolute md:left-1/2 md:top-full md:mt-2 md:h-60 md:w-72 md:-translate-x-1/2 md:shadow-sm md:shadow-neutral-700">
          <RgbaColorPicker
            color={color}
            onChange={onColorChange}
            style={{ width: '100%', height: '100%' }}
          />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
