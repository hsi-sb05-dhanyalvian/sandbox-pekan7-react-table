// import Breadcrumbs from "@/components/Breadcrumbs";

import Breadcrumbs from "./breadcrumbs";

export default function Page() {
  return (
    <div className="p-6">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/laptops", label: "Laptops" },
          { label: "High-Performance Lightweight Laptops" }, // current
        ]}
        separator="chevron" // or "slash"
        className="mb-4"
      />
      {/* page content */}
    </div>
  );
}
