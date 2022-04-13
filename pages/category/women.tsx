import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";

import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";

const WomenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=escaramuzas");

  return (
    <ShopLayout
      title={"Vestir Charro - Escaramuzas"}
      pageDescription={
        "Encuentra los mejores productos de Vestir Charro para ellas"
      }
    >
      <Typography variant="h1" component="h1">
        Escaramuzas
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para ellas
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
