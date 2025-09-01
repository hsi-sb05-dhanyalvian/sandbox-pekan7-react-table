//- app/manages/recipes/page.tsx

'use client';

import { DataTable } from "@/components/table/table";
import { columns } from "./column";
import { ApiClient } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import { RecipeResponse } from "./type";
import React from "react";
import { ScrollToTop } from "@/libs/util";
import { getMetaPageTitle } from "@/libs/meta";

const ApiRecipes = async (
  page: number,
  limit: number,
  globalFilter: string
): Promise<RecipeResponse> => {
  const skip = (page - 1) * limit;
  const { data } = await ApiClient.get('/recipes/search', {
    params: {
      q: globalFilter,
      select: 'image,name,difficulty,cuisine,mealType,ingredients,rating',
      limit: limit,
      skip: skip,
      // delay: 5000,
    }
  });
  ScrollToTop();

  return data;
}

const PageManageRecipes = () => {
  const [page, setPage] = React.useState(1);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [debouncedFilter, setDebouncedFilter] = React.useState(globalFilter);
  const perPage = 10;

  React.useEffect(() => {
    document.title = getMetaPageTitle('Manage Recipes');
    
    const handler = setTimeout(() => {
      setDebouncedFilter(globalFilter);
    }, 1000);
    return () => clearTimeout(handler);
  }, [globalFilter]);

  const { data, isLoading } = useQuery({
    queryKey: ['manages', 'recipes', page, debouncedFilter],
    queryFn: () => ApiRecipes(page, perPage, debouncedFilter),
  });

  return (
    <DataTable
      title="Manage Recipes"
      columns={columns}
      data={data?.recipes || []}
      pageSize={perPage}
      totalRows={data?.total || 0}
      page={page}
      setPage={setPage}
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
      loading={isLoading}
      searchPlaceholder="Search by name"
    />
  );
};

export default PageManageRecipes;
