import { ShopLayout } from "@/components/layouts"
import { Chip, Grid, Link, Typography } from "@mui/material"
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import NextLink from 'next/link';

const columns: GridColDef [] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra informacion si esta pagada la orden o no',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid 
                ? <Chip color="success" label='Pagada' variant="outlined" />
                : <Chip color="error" label='Pagada' variant="outlined" />
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <NextLink href={`/orders/${ params.row.id }`} passHref legacyBehavior>
                    <Link underline="always">
                        Ver Orden
                    </Link>
                </NextLink>
            )
        }

    }
];

const rows = [
    { id: 1, paid: true, fullname: 'David Jimenez' },
    { id: 2, paid: false, fullname: 'Roberto Jimenez' },
    { id: 3, paid: true, fullname: 'Lizette Jimenez' },
    { id: 4, paid: false, fullname: 'Yesica Mallqui' },
    { id: 5, paid: false, fullname: 'Silvia Ornelas' },
    { id: 6, paid: true, fullname: 'Roberto Plascencia' },
    
]

const HistoryPage = () => {
  return (
    <ShopLayout title={"Historial de ordenes"} pageDescription={"Historial de ordenes de cliente"}>
        <Typography variant="h1" component='h1'>Historial de ordenes</Typography>

        <Grid container>
            <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                <DataGrid 
                    columns={columns} 
                    rows={rows}
                    pageSizeOptions={[10]}                
                />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage