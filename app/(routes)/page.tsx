import getBillboards from '@/actions/get-billboards'
import getCategories from '@/actions/get-categories'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/Billboard'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import React from 'react'


export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({isFeatured: true})
  const billboards = await getBillboards()
  const categories = await getCategories()
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard cat={categories!} data={billboards!} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title={"Featured Products"} items={products!}/>
        </div>
      </div>
    </Container>
  )
}

export default HomePage