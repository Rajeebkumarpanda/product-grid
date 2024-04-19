export interface Product {
    id: number;
    title: string;
    image: string;
    category: string;
    description: string;
    price: string;
  }
  

  export interface ProductCellProps {
    product: Product | undefined;
    isSelected: boolean;
    isFocused: boolean;
    onClick: () => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLTableCellElement>) => void;
  }