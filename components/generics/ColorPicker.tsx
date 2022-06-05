import { ChromePicker } from 'react-color';
import type { ColorResult, Color } from 'react-color';

import { Popover } from '@headlessui/react';
import { useEffect, useState } from 'react';

export type ColorPickerProps = {
  color: Color;
  onChange: (color: Color) => void;
  children?: string;
};

export default function ColorPicker({
  color: colorProp,
  onChange,
  children,
}: ColorPickerProps) {
  const [color, setColor] = useState(colorProp);

  const onColorChange = (newColor: ColorResult) => {
    console.log('newColor', newColor);
    setColor(newColor.hex);
    onChange(newColor.hex);
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
      <Popover.Panel className="absolute left-3/4 bottom-14 w-auto -translate-x-1/2 rounded-md bg-neutral-800 p-1 md:left-1/2 md:top-14">
        <ChromePicker
          className="bg-neutral-800"
          color={color}
          onChange={onColorChange}
          onChangeComplete={console.log}
          disableAlpha={false}
        />
      </Popover.Panel>
    </Popover>
  );
}
