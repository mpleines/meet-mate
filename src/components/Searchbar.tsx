'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Search } from '@geist-ui/icons';

type SearchbarProps = {};

export default function Searchbar({}: SearchbarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="border border-background-color-lightest rounded-md py-2 px-4 flex items-center bg-background-color-lighter focus-within:border-white">
      <Search size={16} />
      <input
        type="search"
        className="w-full text-sm ml-1 p-0 border-none text-white bg-background-color-lighter focus:border-none focus:outline-none"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
