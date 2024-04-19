"use client"
import { Product, ProductCellProps } from "@/types/type";
import { TableCell } from "@mui/material";



const ProductCell: React.FC<ProductCellProps> = ({
  product,
  isSelected,
  isFocused,
  onClick,
  onKeyDown,
}) => {
  return (
    <TableCell
      onClick={onClick}
      onKeyDown={onKeyDown}
      style={{
        backgroundColor: isFocused || isSelected ? "blue" : "black",
        width: "100px",
        height: "100px",
        padding: "0",
        border: "1px solid white",
        cursor: "pointer",
        position: "relative",
      }}
      tabIndex={0}
    >
      {product && (
        <img
          src={product.image}
          alt={product.title}
          style={{
            display: isFocused || isSelected ? "block" : "none",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </TableCell>
  );
};

export default ProductCell;
