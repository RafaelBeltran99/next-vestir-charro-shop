import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";

import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";

const KidPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=charritos");

  return (
    <ShopLayout
      title={"Vestir Charro - Niños"}
      pageDescription={
        "Encuentra los mejores productos de Vestir Charro para niños"
      }
    >
      <Typography variant="h1" component="h1">
        Charritos
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para niños
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidPage;
