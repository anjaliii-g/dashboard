import { motion } from 'framer-motion';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const ProductsTable = () => {
  const productsData = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: "82",
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: "37",
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: "64",
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: "184",
      amount: "$3,680.00",
    },
    {
      name: "Marco Shoes",
      price: "$79.49",
      quantity: "64",
      amount: "$1,965.81",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="h-full"
    >
      <Card className="bg-[#f7f9fb] dark:bg-gray-800 border-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <CardContent className="p-6 h-full flex flex-col">
          <motion.h3 
            className="text-sm font-semibold text-[#1c1c1c] dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Top Selling Products
          </motion.h3>

          <div className="overflow-x-auto flex-1">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border hover:bg-transparent">
                  <TableHead className="text-xs text-muted-foreground font-medium">Name</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium">Price</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium">Quantity</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productsData.map((product, index) => (
                  <motion.tr
                    key={index}
                    className="border-0 hover:bg-accent/50 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <TableCell className="text-xs text-foreground py-3">
                      {product.name}
                    </TableCell>
                    <TableCell className="text-xs text-foreground py-3">
                      {product.price}
                    </TableCell>
                    <TableCell className="text-xs text-foreground py-3">
                      {product.quantity}
                    </TableCell>
                    <TableCell className="text-xs text-foreground py-3 font-medium">
                      {product.amount}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductsTable;
