import { Metadata } from "next"

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100)
  })

  return {
    title: `Product ${title}`,
  }
}

const ProductDetails = ({ params }: Props) => {
  return <h1>Detailes about product {params.productId}</h1>
}

export default ProductDetails
