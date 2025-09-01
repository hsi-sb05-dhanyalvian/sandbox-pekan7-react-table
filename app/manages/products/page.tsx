//- app/manages/products/page.tsx

'use client';

import React from "react";
import { Metadata } from 'next';
import { ApiClient } from "@/libs/api";
import { ProductResponse } from "./type";
import { ScrollToTop } from "@/libs/util";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/table/table";
import { columns } from "./column";
import { getMetaPageTitle } from "@/libs/meta";

const ApiManageProducts = async (
  page: number,
  limit: number,
  globalFilter: string
): Promise<ProductResponse> => {
  const skip = (page - 1) * limit;
  const { data } = await ApiClient.get('/products/search', {
    params: {
      q: globalFilter,
      // select: 'image,name,difficulty,cuisine,mealType,ingredients,rating',
      limit: limit,
      skip: skip,
      // delay: 5000,
    }
  });
  ScrollToTop();

  return data;
}

const PageManageProducts = () => {
  const [page, setPage] = React.useState(1);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [debouncedFilter, setDebouncedFilter] = React.useState(globalFilter);
  const perPage = 10;

  React.useEffect(() => {
    document.title = getMetaPageTitle('Manage Products');
    
    const handler = setTimeout(() => {
      setDebouncedFilter(globalFilter);
    }, 1000);
    return () => clearTimeout(handler);
  }, [globalFilter]);

  const { data, isLoading } = useQuery({
    queryKey: ['manages', 'products', page, debouncedFilter],
    queryFn: () => ApiManageProducts(page, perPage, debouncedFilter),
  });

  return (
    <DataTable
      title="Manage Products"
      columns={columns}
      data={data?.products || []}
      pageSize={perPage}
      totalRows={data?.total || 0}
      page={page}
      setPage={setPage}
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
      loading={isLoading}
      searchPlaceholder="Search..."
    />
  );
};

export default PageManageProducts;
