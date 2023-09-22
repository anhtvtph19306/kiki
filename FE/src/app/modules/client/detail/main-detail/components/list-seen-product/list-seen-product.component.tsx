import React, { FunctionComponent, useEffect } from 'react'
import { css } from '@emotion/react'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component'
import { SwiperSlide } from 'swiper/react'
import SwiperListFiveProduct from '~/app/component/stack/swiper-list/swiperList-fiveProduct.component'
import { useProductRedux } from '~/app/modules/client/redux/hook/useProductReducer'

interface ListSeenProduct {
    props?: any
}

const ListSeenProduct: FunctionComponent<ListSeenProduct> = () => {
    const { data: { products }, actions } = useProductRedux()
    useEffect(() => {
        actions.getAllProduct()
    }, [])
    return (
        <div className='bg-slate-50 p-5'>
            <h2 className='text-center font-semibold mb-11 text-[40px] tracking-wider font-sans'>Sản phẩm đã xem</h2>
            <div>
                <SwiperListFiveProduct css={cssSlide}>
                    {products?.map((item: any) => (
                        <SwiperSlide key={item._id}>
                            <ItemProduct className='product' itemProduct={item} />
                        </SwiperSlide>
                    ))}
                </SwiperListFiveProduct>
            </div>
        </div>
    )
}

export default ListSeenProduct

const cssSlide = css`
`