import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";

import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=charros");

  return (
    <ShopLayout
      title={"Vestir Charro - Charros"}
      pageDescription={
        "Encuentra los mejores productos de Vestir Charro para ellos"
      }
    >
      <Typography variant="h1" component="h1">
        Charros
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para ellos
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;
