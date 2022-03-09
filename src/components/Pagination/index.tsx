import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
    return [... new Array(to - from)]
        .map((_, index) => {
            return from + index + 1;
        })
        .filter(page => page > 0);
}

export function Pagination({
    totalCountOfRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange,
}: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : [];
    
    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : [];

    return (
        <Stack
            direction={["column", "column", "row"]}
            spacing="6"
            mt="8"
            justify="space-between"
            align="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> out of <strong>100</strong>
            </Box>
            <Stack spacing="2" direction="row">                
               
                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem pageNumber={1} />
                        {currentPage > (2 + siblingsCount) && (<Text>...</Text>)}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem key={page} pageNumber={page} />
                })}

                <PaginationItem pageNumber={currentPage} isCurrent/>
                
                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem key={page} pageNumber={page} />
                })}

                {lastPage > (currentPage + siblingsCount) && (
                    <>                
                        {lastPage > (currentPage + 1 + siblingsCount) && (<Text color="gray.300" width={6} textAlign="center" >...</Text>)}
                        <PaginationItem pageNumber={lastPage} />
                    </>
                )}

            </Stack>
        </Stack>
    );
}