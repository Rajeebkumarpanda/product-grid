"use client"
import { Table, TableBody, TableRow } from "@mui/material";
import ProductCell from "./ProductCell";
import { Product } from "@/types/type";

interface ProductGridProps {
  products: Product[];
  selectedProduct: Product | null;
  focusedCell: number | null;
  handleCellClick: (product: Product) => void;
  handleCellKeyDown: (event: React.KeyboardEvent<HTMLTableCellElement>, index: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
    products,
    selectedProduct,
    focusedCell,
    handleCellClick,
    handleCellKeyDown,
  }) => {
    return (
      <Table>
        <TableBody>
          {[...Array(4)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {[...Array(5)].map((_, colIndex) => {
                const index = rowIndex * 5 + colIndex;
                const product = products[index];
                const isSelected = selectedProduct ? selectedProduct.id === product?.id : false;
                const isFocused = focusedCell === index;
                return (
                  <ProductCell
                    key={colIndex}
                    product={product}
                    isSelected={isSelected}
                    isFocused={isFocused}
                    onClick={() => handleCellClick(product)}
                    onKeyDown={(e) => handleCellKeyDown(e, index)}
                  />
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  

export default ProductGrid;
