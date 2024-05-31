'use client';

import GetLang from '@/helpers/getLang';
import Breadcrumb from '@mui/material/Breadcrumbs';
import Link from 'next/link';

type BreadcrumbsProps = {
  breadcrumbs: {
    name: string;
    href: string;
  }[];
  className?: string;
};

export const Breadcrumbs = ({ breadcrumbs, className }: BreadcrumbsProps) => {
  const lang = GetLang();

  return (
    <Breadcrumb aria-label="breadcrumb" className={className}>
      {breadcrumbs.map(({ name, href }, index) => (
        <Link
          key={index}
          href={`/${lang}${href}`}
          className={`text-black hover:opacity-100 ${index === breadcrumbs.length - 1 ? 'opacity-100' : 'opacity-60'}`}
        >
          {name}
        </Link>
      ))}
    </Breadcrumb>
  );
}
