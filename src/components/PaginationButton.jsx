import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
const PaginationButton = ({currentPage,totalPages,handlePageChange}) => {
  return (
    <div>
         <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            className={"cursor-pointer"}

            onClick={() => {
                if(currentPage > 1){
                    handlePageChange(currentPage - 1)
                }
               }} />
        </PaginationItem>
        <PaginationItem>
        {
            currentPage !== 1 && <PaginationLink onClick={() => handlePageChange(currentPage - 1)} >{currentPage - 1}</PaginationLink>
        }
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  isActive>
          {currentPage} 
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          
            {
                currentPage !== totalPages && <PaginationLink onClick={() => handlePageChange(currentPage + 1)} >{currentPage + 1}</PaginationLink>
            }
        </PaginationItem>
        
        <PaginationItem>
          <PaginationNext 
          className={"cursor-pointer"}
           onClick={
                () => {
                    if(currentPage < totalPages){
                        handlePageChange(currentPage + 1)
                    }
                }
          } />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  )
}

export default PaginationButton