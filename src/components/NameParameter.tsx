'use client';  // Ensure this component is treated as client-side

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const NameParameter = () => {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  return (
    <div>
      <h2>{to || "All"}</h2>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NameParameter />
    </Suspense>
  );
}
