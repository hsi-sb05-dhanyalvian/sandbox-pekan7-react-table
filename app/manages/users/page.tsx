//- app/manages/users/page.tsx

'use client';

import { UserResponse } from "./type";
import { ApiClient } from "@/libs/api";
import { ScrollToTop } from "@/libs/util";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/table/table";
import { columns } from "./column";
import { getMetaPageTitle } from "@/libs/meta";

const ApiManageUsers = async (
  page: number,
  limit: number,
  globalFilter: string
): Promise<UserResponse> => {
  const skip = (page - 1) * limit;
  const { data } = await ApiClient.get('/users', {
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

const PageManageUsers = () => {
  const [page, setPage] = React.useState(1);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [debouncedFilter, setDebouncedFilter] = React.useState(globalFilter);
  const perPage = 10;

  React.useEffect(() => {
    document.title = getMetaPageTitle('Manage Users');
    
    const handler = setTimeout(() => {
      setDebouncedFilter(globalFilter);
    }, 1000);
    return () => clearTimeout(handler);
  }, [globalFilter]);

  const { data, isLoading } = useQuery({
    queryKey: ['manages', 'users', page, debouncedFilter],
    queryFn: () => ApiManageUsers(page, perPage, debouncedFilter),
  });

  return (
    <DataTable
      title="Manage Users"
      columns={columns}
      data={data?.users || []}
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

export default PageManageUsers;
