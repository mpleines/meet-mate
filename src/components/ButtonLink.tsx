'use client';

import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export default function ButtonLink({
  children,
  ...otherProps
}: LinkProps & { children: ReactNode }) {
  return (
    <Link
      className="px-4 py-2 text-sm bg-white text-background rounded-md hover:bg-muted hover:text-white"
      {...otherProps}
    >
      {children}
    </Link>
  );
}
