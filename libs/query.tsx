//- libs/query.tsx

'use client';

import { useSearchParams } from 'next/navigation';

export const QueryStrings = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);
  
  return { page };
};
