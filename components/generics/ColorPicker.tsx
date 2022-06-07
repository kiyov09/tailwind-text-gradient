import { RgbaStringColorPicker } from 'react-colorful';
import type { RgabColor } from 'react-colorful';

import { Popover } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

export type ColorPickerProps = {
  color: RgabColor;
  onChange: (color: RgabColor) => void;
  children?: string;
};

export default function ColorPicker({
  color: colorProp,
  onChange,
  children,
}: ColorPickerProps) {
  const [color, setColor] = useState(colorProp);

  const onColorChange = (newColor: RgabColor) => {
    setColor(newColor);
    onChange(newColor);
  };

  useEffect(() => {
    setColor(colorProp);
  }, [colorProp]);

  return (
    <Popover className="relative">
      <Popover.Button className="flex h-10 w-auto items-center justify-between gap-8 rounded-xl bg-neutral-800 px-4 py-2 text-base tracking-wider text-white ring-1 ring-neutral-700">
        <span className="flex-1 text-left">{children}</span>
        <div
          className="h-full w-10 rounded-md"
          style={{ backgroundColor: `${color}` }}
        ></div>
      </Popover.Button>
      <Popover.Panel className="fixed bottom-16 left-5 mb-4 h-72 w-[calc(100vw-2.5rem)] rounded-md bg-neutral-800 p-1 md:absolute md:left-0 md:top-full md:mt-4 md:h-60 md:w-72 md:-translate-x-1/3">
        <RgbaStringColorPicker
          color={color}
          onChange={onColorChange}
          style={{ width: '100%', height: '100%' }}
        />
      </Popover.Panel>
    </Popover>
  );
}
