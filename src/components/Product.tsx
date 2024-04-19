"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import ProductGrid from "./ProductGrid";
import { Product } from "@/types/type";
import { BaseUrl } from "@/utils/baseUrl";



const ProductComponent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [focusedCell, setFocusedCell] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<Product[]>(BaseUrl)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCellClick = (product: Product) => {
    setSelectedProduct(product === selectedProduct ? null : product);
  };

  const handleCellKeyDown = (
    event: React.KeyboardEvent<HTMLTableCellElement>,
    index: number
  ) => {
    const rowCount = 4;
    const colCount = 5;
    const row = Math.floor(index / colCount);
    const col = index % colCount;
    let nextCellIndex = index;

    switch (event.key) {
      case "ArrowUp":
        nextCellIndex = Math.max(index - colCount, 0);
        break;
      case "ArrowDown":
        nextCellIndex = Math.min(index + colCount, products.length - 1);
        break;
      case "ArrowLeft":
        nextCellIndex = row * colCount + Math.max(col - 1, 0);
        break;
      case "ArrowRight":
        nextCellIndex = row * colCount + Math.min(col + 1, colCount - 1);
        break;
      default:
        return;
    }

    if (nextCellIndex !== index) {
      setFocusedCell(nextCellIndex);
    }
  };

  return (
    <ProductGrid
      products={products}
      selectedProduct={selectedProduct}
      focusedCell={focusedCell}
      handleCellClick={handleCellClick}
      handleCellKeyDown={handleCellKeyDown}
    />
  );
};

export default ProductComponent;
