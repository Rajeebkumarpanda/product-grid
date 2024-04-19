"use client";
import { ProductCellProps } from "@/types/type";
import { TableCell } from "@mui/material";
import Image from "next/image";

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
        overflow: "hidden",
      }}
      tabIndex={0}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: isFocused || isSelected ? "block" : "none",
        }}
      >
        {product && (
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        )}
      </div>
    </TableCell>
  );
};

export default ProductCell;
