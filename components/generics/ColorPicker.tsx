import { RgbaColorPicker } from 'react-colorful';
import type { RgbaColor } from 'react-colorful';

import { Popover } from '@headlessui/react';
import { useEffect, useState } from 'react';
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
      <Popover.Button className="flex h-10 w-full items-center justify-between gap-8 rounded-xl bg-neutral-800 px-4 py-2 text-base tracking-wider text-white ring-1 ring-neutral-700 md:w-auto">
        <span className="flex-1 text-left">{children}</span>
        <div
          className="h-full w-10 rounded-md"
          style={{ backgroundColor: `${rgbaToCSS(color)}` }}
        ></div>
      </Popover.Button>
      <Popover.Panel className="fixed bottom-16 left-5 mb-4 h-60 w-[calc(100vw-2.5rem)] rounded-md bg-neutral-800 p-1 md:absolute md:left-0 md:top-full md:mt-4 md:h-60 md:w-72 md:-translate-x-1/3">
        <RgbaColorPicker
          color={color}
          onChange={onColorChange}
          style={{ width: '100%', height: '100%' }}
        />
      </Popover.Panel>
    </Popover>
  );
}
