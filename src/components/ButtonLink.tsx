'use client';

import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export default function ButtonLink({
  children,
  ...otherProps
}: LinkProps & { children: ReactNode }) {
  return (
    <Link
      className="px-4 py-2 text-sm bg-white text-background-color rounded-md hover:bg-background-color-lightest hover:text-white"
      {...otherProps}
    >
      {children}
    </Link>
  );
}
