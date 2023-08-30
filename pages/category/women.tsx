import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import FullScreenLoading from '@/components/ui/FullScreenLoading'
import { initialData } from '@/database/seed-data'
import { useProducts } from '@/hooks'
import { Typography } from '@mui/material'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function WomenPage() {

  const { products, isLoading } = useProducts('/products?gender=women')

  return (
    <ShopLayout title={'Teslo-Shop - Women'} pageDescription={'Encuentra los mejores productos de Teslo para ellas'}>
      <Typography variant='h1' component='h1'>Mujeres</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos para mujeres</Typography>
      { 
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={ products } />
      }

      
      
    </ShopLayout>
  )
}
