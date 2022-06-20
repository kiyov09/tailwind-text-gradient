import { Switch } from '@headlessui/react';
import { SwitchHorizontalIcon } from '@heroicons/react/outline';

type SwitchColorsToggleProps = {
  isOn: boolean;
  onChange: (isOn: boolean) => void;
};

export default function SwitchColorsToggle({
  isOn,
  onChange,
}: SwitchColorsToggleProps) {
  return (
    <Switch
      checked={isOn}
      onChange={onChange}
      className="-mx-1 hidden rounded-md p-1 outline-none hover:ring-2 hover:ring-neutral-600 hover:ring-offset-2 hover:ring-offset-neutral-900 focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-neutral-900 xs:inline-block"
    >
      <SwitchHorizontalIcon
        className={`h-6 w-6 text-neutral-50 transition-transform duration-300 ${
          isOn ? 'rotate-180' : ''
        }`}
      />
    </Switch>
  );
}
