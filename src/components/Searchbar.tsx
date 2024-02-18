'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Input } from './ui/input';

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
    <Input
      type="search"
      placeholder="Search your events"
      onChange={(e) => handleChange(e.target.value)}
      defaultValue={searchParams.get('query')?.toString()}
    />
  );
}
