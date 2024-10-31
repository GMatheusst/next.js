import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {

  const query = searchParams?.query || '';
    return (
      <Suspense fallback={<CustomersTableSkeleton />}>
        <CustomersTable query={query}/>
      </Suspense>
    )
}