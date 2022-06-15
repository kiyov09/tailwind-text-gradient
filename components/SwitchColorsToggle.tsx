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
      className="hidden xs:inline-block"
    >
      <SwitchHorizontalIcon
        className={`h-6 w-6 text-neutral-50 transition-transform duration-300 ${
          isOn ? 'rotate-180' : ''
        }`}
      />
    </Switch>
  );
}
