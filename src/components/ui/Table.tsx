import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    type SxProps,
    type Theme,
} from '@mui/material';
import TitleText from './TitleText';

export interface Column<T> {
    field: keyof T;
    headerName: string;
    align?: 'left' | 'right' | 'center';
    width?: string;
    renderCell?: (row: T) => React.ReactNode;
}

interface CustomTableProps<T> {
    columns: Column<T>[];
    rows: T[];
    hover?: boolean;
    containerSx?: SxProps<Theme>;
    onRowClick?: (row: T) => void;
}

const CustomTable = <T extends object>({
    columns,
    rows,
    hover = true,
    containerSx,
    onRowClick
}: CustomTableProps<T>) => {
    return (
        <Box sx={{ width: '100%', ...containerSx }}>        <Paper sx={{ borderRadius: 0, boxShadow: 'none' }}>        
         <TableContainer sx={{ 
                    boxShadow: 'none', 
                    height: '100%', 
                    borderRadius: 0,
                    maxHeight: 'calc(100vh - 250px)', 
                    overflow: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#888',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#555',
                    }
                }}>              
                <Table size="small" stickyHeader aria-label="sticky table">                   
                     <TableHead>
                        <TableRow>
                            {columns.map((column, index) => (                       
                                <TableCell
                                    key={index}
                                    align={column.align || 'left'}
                                    sx={{
                                        position: 'sticky',
                                        top: 0,
                                        backgroundColor: '#fff',
                                        zIndex: 1,
                                        height: '36px',
                                        padding: '0 16px',
                                       borderBottom: 'none',
                                        width: column.width,
                                    }}
                                >
                                    <TitleText>
                                    {column.headerName}
                                    </TitleText>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>                    
                        {rows.map((row, rowIndex) => (
                            <TableRow
                                key={rowIndex}
                                onClick={() => onRowClick?.(row)}
                                sx={{
                                    backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#F8F8FA',
                                    transition: 'background-color 0.2s ease',
                                    cursor: onRowClick ? 'pointer' : 'default',
                                    height: '36px',
                                    padding: 0,
                                    ...(hover && { 
                                        '&:hover': { 
                                            backgroundColor: '#e3e3e3' 
                                        } 
                                    })
                                }}
                            >
                                {columns.map((column, colIndex) => (                                       
                                       <TableCell
                                        key={colIndex}
                                        align={column.align || 'left'}
                                        sx={{
                                            height: '36px',
                                            padding: '0 16px',
                                            borderBottom: 'none',
                                            '&:last-child': {
                                                paddingRight: '16px'
                                            }
                                        }}
                                    >
                                        {column.renderCell 
                                            ? column.renderCell(row)
                                            : row[column.field] as React.ReactNode}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>
        </Box>
       
    );
};

export default CustomTable;
