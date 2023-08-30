import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import FullScreenLoading from '@/components/ui/FullScreenLoading'
import { initialData } from '@/database/seed-data'
import { useProducts } from '@/hooks'
import { Typography } from '@mui/material'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function KidsPage() {

  const { products, isLoading } = useProducts('/products?gender=kid')

  return (
    <ShopLayout title={'Teslo-Shop - Kids'} pageDescription={'Encuentra los mejores productos de Teslo para niños'}>
      <Typography variant='h1' component='h1'>Niños</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos para niños</Typography>
      { 
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={ products } />
      }

      
      
    </ShopLayout>
  )
}
