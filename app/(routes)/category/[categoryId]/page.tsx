import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import getSizes from '@/actions/get-sizes'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/container'
import React from 'react'

type Props = {
  params: {
    categoryId: string
  },
  searchParams: {
    colorId: string,
    sizeId: string
  }
}

const CategoryPage = async ({params,
  searchParams
}: Props) => {
  const product = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  })

  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)
  
  return (
    <div className='bg-white'>
      <Container>
        <Billboard 
          data={category.billboard}
        />
      </Container>
    </div>
  )
}

export default CategoryPage