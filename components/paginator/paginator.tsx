import React from 'react';
import { classes } from 'helpers';

import {
  PaginatorContainer
} from './paginator.styles';

export interface PaginatorProps {
  className?: string;
  defaultRowsPerPage?: number;
  rowsName?: string;
  totalItems: number;
  onNextPage: (currentPage: number, rowsPerPage: number) => void;
  onPreviousPage: (currentPage: number, rowsPerPage: number) => void;
}

export const Paginator = ({ 
  defaultRowsPerPage = 10,
  className,
  rowsName = 'Rows',
  totalItems,
  onNextPage,
  onPreviousPage,
}: PaginatorProps) => {

  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const [totalPages, setTotalPages] = React.useState(Math.ceil(totalItems / defaultRowsPerPage));
  const [currentPage, setCurrentPage] = React.useState(1)

  React.useEffect(() => {
    setTotalPages(Math.ceil(totalItems / rowsPerPage))
  }, [rowsPerPage, totalItems])

  React.useEffect(() => {
    if (currentPage > totalPages || currentPage <= 0) setCurrentPage(1)
  }, [currentPage, totalPages]);


  const handlePageChange = (amount: number) => {
    amount > 0 ? onNextPage(currentPage + amount, rowsPerPage) : onPreviousPage(currentPage + amount, rowsPerPage)
    setCurrentPage(currentPage + amount)
  }

  return (
    <PaginatorContainer className={className}>
      <div>{currentPage} of {totalPages}</div>

      <div>
        <button
          className={classes({ disabled: currentPage === 1 })}
          onClick={() => handlePageChange(-1)}
        >
          Atras
        </button>

        <button
          className={classes({ disabled: currentPage === totalPages })}
          onClick={() => handlePageChange(1)}
        >
          Adelante
        </button>
      </div>
    </PaginatorContainer>
  );
};
