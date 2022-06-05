import { Listbox as Lb } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export type Option = {
  id: number;
  value: string;
  label: string;
};

export type ListboxOptions = Option[];

export type ListboxProps = {
  options: ListboxOptions;
  onSelect?: (option: Option) => void;
};

export default function Listbox({ options, onSelect }: ListboxProps) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onSelectOption = (option: Option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <Lb value={selectedOption} onChange={onSelectOption}>
      {({ open }) => (
        <div className="relative w-full text-neutral-100">
          <Lb.Button className="flex h-10 w-full items-center rounded-xl bg-neutral-800 px-4 py-2 text-left text-base ring-1 ring-neutral-700 md:w-48">
            <span className="flex-1">{selectedOption.label}</span>
            <ChevronDownIcon
              className={`ml-4 h-4 w-4 justify-self-end ${
                open && 'rotate-180'
              }`}
            />
          </Lb.Button>
          <Lb.Options className="absolute bottom-12 min-w-full space-y-2 rounded-xl bg-neutral-800 px-2 py-4 shadow-sm shadow-neutral-700 md:bottom-auto md:mt-2">
            {options.map((opt) => (
              <Lb.Option
                key={opt.id}
                value={opt}
                className={({ active }) =>
                  `relative flex cursor-pointer select-none items-center justify-between rounded-md py-2 px-4 ${
                    active ? 'bg-neutral-700' : 'text-current'
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span>{opt.label}</span>
                    {selected && (
                      <CheckIcon className={`ml-2 h-4 w-4 ${selected}`} />
                    )}
                  </>
                )}
              </Lb.Option>
            ))}
          </Lb.Options>
        </div>
      )}
    </Lb>
  );
}
