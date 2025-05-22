import { useMemo, useState } from 'react';
import { Box } from '@mui/material';
import TitleText from '../ui/TitleText';
import LabelText from '../ui/LabelText';
import CustomTable, { type Column } from '../ui/Table';
import type { RowData } from '../../constants/services';
import ServiceItemModal from './ServiceItemModal';

interface Props {
    rows: RowData[];
    search: string;
    show: boolean;
    onUpdateService: (updatedData: RowData) => Promise<void>;
}

export default function DriverGrid({ rows, search, show, onUpdateService }: Props) {
    const [selectedRow, setSelectedRow] = useState<RowData | null>(null);

    const handleRowClick = (row: RowData) => {
        setSelectedRow(row);
    };

    const handleUpdate = async (updatedData: RowData) => {
        await onUpdateService(updatedData);
        setSelectedRow(null);
    };

    const columns: Column<RowData>[] = [
        { 
            field: 'id',
            headerName: 'Nr.',
            width: '5%',
            align: 'left'
        },
        { 
            field: 'item',
            headerName: 'Item',
            width: '10%',
            align: 'left'
        },
        { 
            field: 'quantity',
            headerName: 'Quantity',
            width: '8%',
            align: 'left'
        },
        { 
            field: 'description',
            headerName: 'Description',
            width: '37%',
            align: 'left'
        },
        { 
            field: 'notes',
            headerName: 'Notes',
            width: '40%',
            align: 'left'
        }
    ];

    const filtered = useMemo(
        () =>
            rows.filter((d) =>
                d.item.toLowerCase().includes(search.toLowerCase())
            ),
        [rows, search]
    );    return (
        <Box sx={{ 
            flexGrow: 1,
            height: 'calc(100vh - 120px)', 
            display: 'flex'
        }}>
            {!show ? (                
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                    sx={{
                        width: '100%',
                        flex: 1,
                        p: 4
                    }}
                >
                   <img src="/src/assets/img/NoService.svg" alt="No Service" style={{ width: 180, height: 172 }} />
                    <TitleText>
                        No Service Selected
                    </TitleText>
                    <LabelText>
                        Please select a service on your left to proceed.
                    </LabelText>
                </Box>
            ) : (
                <>                    
                <CustomTable
                        rows={filtered}
                        columns={columns}
                        hover={true}
                        onRowClick={handleRowClick}
                            containerSx={{
                                height: '100%',
                                '& .MuiTableHead-root': {
                                    position: 'sticky',
                                    top: 0,
                                    zIndex: 1,
                                    bgcolor: 'white'
                                }
                            }}
                    />
                    <ServiceItemModal 
                        open={!!selectedRow}
                        onClose={() => setSelectedRow(null)}
                        onSubmit={handleUpdate}
                        initialData={selectedRow || undefined}
                    />
                </>
            )}
        </Box>
    );
}
