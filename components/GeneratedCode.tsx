import { ClipboardCopyIcon } from '@heroicons/react/outline';

type GeneratedCodeProps = {
  code: string;
};

export default function GeneratedCode({ code }: GeneratedCodeProps) {
  return (
    <pre className="relative flex h-auto items-center gap-4 overflow-auto rounded-xl bg-neutral-800 py-6 px-6 ring-1 ring-neutral-700">
      <code className=" fill-1 text-white">{code}</code>
      <button
        className="flex h-8 w-8 items-center justify-center rounded-sm text-neutral-600 hover:cursor-pointer hover:text-neutral-400 hover:ring-1 hover:ring-neutral-400"
        onClick={() => alert('Copied')}
      >
        <ClipboardCopyIcon className="h-6 w-6 text-current" />
      </button>
    </pre>
  );
}
