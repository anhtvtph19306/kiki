import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { BsShopWindow } from 'react-icons/bs'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useCartRedux } from '../../../redux/hook/useCartReducer'
import { getListColor, getListSize } from '../../../helper/tranform.data'
import SelectQuantityCart from '~/app/component/parts/quantity/quantitySelect'
import ButtonSqua from '~/app/component/parts/button/ButtonSqua'
interface leftCartProps {
  props?: any
}

const LeftCart: FunctionComponent<leftCartProps> = () => {
  const {
    data: { carts },
    actions
  } = useCartRedux()

  useEffect(() => {
    actions.getAllCart()
  }, [])
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [showPopupSelect, setShowPopupSelect] = useState<any>({
    show: false,
    index: null
  })
  console.log(showPopupSelect.index)
  const [listColor, setListColor] = useState([])
  const [listSize, setListSize] = useState([])

  const [colorSelect, setColorSelect] = useState<any>()
  const [sizeSelect, setSizeSelect] = useState<any>()
  const [checkQuantityType, setCheckQuantityType] = useState<any[]>([])
  const [quantityRemainProduct, setquantityRemainProduct] = useState<any>({})
  const [clickProductDetail, setClickProductDetail] = useState<any>()
  console.log(clickProductDetail)
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowPopupSelect((prev: any) => ({
          ...prev,
          show: false
        }))
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  const handleSelectColor = (colorId: string | number) => {
    const findElement = listColor.find((item: any) => item.id === colorId)
    setColorSelect(findElement)
  }

  const handleSelectSize = (sizeId: string | number) => {
    const findElement = listSize.find((item: any) => item.id === sizeId)
    setSizeSelect(findElement)
  }

  useEffect(() => {
    const filterListQuantity = clickProductDetail?.product?.listQuantityRemain?.filter(
      (item: any) => item.nameColor === colorSelect?.nameColor || item.nameSize === sizeSelect?.nameSize
    )
    const findQuantityRemain = clickProductDetail?.product?.listQuantityRemain?.find(
      (item: any) => item.nameColor === colorSelect?.nameColor && item.nameSize === sizeSelect?.nameSize
    )
    setCheckQuantityType(filterListQuantity)
    setquantityRemainProduct(findQuantityRemain)
  }, [colorSelect, sizeSelect])

  useEffect(() => {
    setCheckQuantityType([])
    const defaultOrder = clickProductDetail?.quantityOrder

    const tempColor = getListColor(clickProductDetail, 'cart')
    const tempSize = getListSize(clickProductDetail, 'cart')
    setListSize(tempSize)
    setListColor(tempColor)
    setColorSelect(defaultOrder)
    setSizeSelect(defaultOrder)
  }, [clickProductDetail])

  const cancelChangeProperties = () => {
    const defaultOrder = clickProductDetail?.quantityOrder
    setColorSelect(defaultOrder)
    setSizeSelect(defaultOrder)
    setShowPopupSelect((prev: any) => ({
      ...prev,
      show: false
    }))
  }

  const handleSubmitChangeProperties = () => {
    const objectProperties = {
      colorSelect,
      sizeSelect,
      productId: clickProductDetail.product._id,
      indexProductCart: showPopupSelect.index
    }

    actions.updateOrderProduct(objectProperties)
    setShowPopupSelect((prev: any) => ({
      ...prev,
      show: false
    }))

    //action cart

    const objectIncrement = {
      type: 'COMPARE_QUANTITY',
      itemCart: clickProductDetail,
      quantityRemainProduct
    }

    actions.updateSelectQuantityCart(objectIncrement)
  }
  return (
    <div css={cssLeftCart}>
      <div className='style-heading mb-[20px] flex  justify-between max-sm:mt-5'>
        <div className='flex'>
          <input type='checkbox' className='sm:w-[18px] max-sm:w-[17px] max-sm:h-[17px] sm:mr-[5px]' />
          <span className='lable sm:mr-[290px] max-sm:ml-3 sm:pl-[4px]'>Tất cả (2 sản phẩm)</span>
        </div>

        {/* <div className='sm:flex justify-between w-[20%]'> */}
        <span className='taitle-table mr-[100px]'>Đơn giá</span>
        <span className='taitle-table mr-[70px]'>Số lượng</span>
        {/* </div> */}
        <span className='taitle-table mr-[90px]'>Thành tiền</span>
        <span className='remove-all'>
          <RiDeleteBinLine size={17} className='delete-icon sm:mr-4 max-sm:mr-5' />
        </span>
      </div>

      {/*  */}
      <div className='container'>
        <div className='sub-title sm:flex max-sm:flex px-6  py-3'>
          <input type='checkbox' className='w-[18px] mr-3' />
          <BsShopWindow className='icon-home w-6 h-6 mr-2' />

          <a href='#'>Shop Name</a>
        </div>
        {carts?.map((item: any, index: any) => (
          <div className='box items-center sm:flex max-sm:flex justify-between text-center mr-auto py-4' key={index}>
            <input type='checkbox' className='sm:w-[18px] sm:mr-4 sm:ml-5 max-sm:ml-6 max-sm:mr-2' />

            <div className='sm:flex max-sm:flex items-center max-sm:mr-1 max-sm:p-[3px]'>
              <img
                src='https://salt.tikicdn.com/cache/w1200/ts/product/42/32/ed/12c36b4f893332b2bfcdb6b510786937.jpg'
                alt=''
                className='w-[76px] h-20'
              />

              <a href='#' className='max-sm:mr-5 max-sm:p-[7px]'>
                {item?.product?.name}
              </a>
            </div>
            <span className='real-prices '>{item?.product?.price}₫</span>
            <div className='sm:w-[130px] max-sm:w-full relative'>
              <p
                className='product-wrap-prices sm:w-[190px] max-sm:flex cursor-pointer'
                onClick={() => {
                  setShowPopupSelect((prev: any) => ({
                    show: !prev.show,
                    index: index
                  })),
                    setClickProductDetail(item)
                }}
              >
                <div className='mr-6'>
                  <span className='mr-2'>Màu:</span>
                  <span className='product-real-prices'>{item?.quantityOrder.nameColor}</span>
                </div>
                <span className='mr-2'>Kích cỡ:</span>
                <div className='product-real-prices'>{item?.quantityOrder.nameSize}</div>
              </p>
              {showPopupSelect.index === index && showPopupSelect.show && (
                <div ref={wrapperRef} className=' bg-white shadow-3xl s absolute p-3 rounded-lg z-10'>
                  <div className='my-6'>
                    <div className=''>
                      Màu sắc: <span className='font-semibold'>{colorSelect?.nameColor}</span>
                    </div>
                    <div className='mt-3 flex items-center'>
                      {getListColor(item, 'cart')?.map((item: any) => (
                        <div
                          key={item.id}
                          className={`p-3 border rounded-md  mr-4 cursor-pointer ${colorSelect?.nameColor === item.nameColor && 'bg-blue-100 border-blue-600'
                            } ${!checkQuantityType
                              ?.flatMap((itemFlat: any) => itemFlat?.nameColor)
                              .includes(item.nameColor) &&
                            checkQuantityType.length > 0 &&
                            item.quantity === 0 &&
                            'bg-slate-100 pointer-events-none text-gray-400'
                            }
                              ${Number(item.quantity) === 0 &&
                            checkQuantityType.length === 0 &&
                            'bg-slate-100 pointer-events-none text-gray-400'
                            }
                                `}
                          onClick={() => handleSelectColor(item.id)}
                        >
                          {item.nameColor}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='my-6'>
                    <div className=''>
                      Kích cỡ: <span className='font-semibold'>{sizeSelect?.nameSize}</span>
                    </div>
                    <div className='mt-3 flex items-center'>
                      {getListSize(item, 'cart')?.map((item: any) => (
                        <div
                          key={item.id}
                          className={`p-3 border rounded-md mr-4 cursor-pointer ${sizeSelect?.nameSize === item.nameSize && 'bg-blue-100 border-blue-600'
                            } ${!checkQuantityType
                              ?.flatMap((itemType: any) => itemType?.nameSize)
                              .includes(item.nameSize) &&
                            checkQuantityType.length > 0 &&
                            'bg-slate-100 pointer-events-none text-gray-400'
                            }`}
                          onClick={() => handleSelectSize(item.id)}
                        >
                          {item.nameSize}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='flex'>
                    <ButtonSqua outline className='mr-4' onClick={cancelChangeProperties}>
                      Hủy
                    </ButtonSqua>
                    <ButtonSqua onClick={handleSubmitChangeProperties}>
                      Xác nhận
                    </ButtonSqua>
                  </div>
                </div>
              )}
            </div>


            <div className='sm:flex w-[20%] justify-between max-sm:mr-7 '>
              <div className='max-sm:flex'>
                <SelectQuantityCart
                  itemCart={item}
                  listQuantityRemain={item?.product?.listQuantityRemain}
                  quantityOrder={item?.quantityOrder?.quantity}
                  colorSelect={
                    clickProductDetail
                      ? colorSelect
                      : item?.product?.listQuantityRemain.find(
                        (item: any) => item?.nameColor == item?.quantityOrder?.nameColor
                      )
                  }
                  sizeSelect={
                    clickProductDetail
                      ? sizeSelect
                      : item?.product?.listQuantityRemain.find(
                        (item: any) => item?.nameSize == item?.quantityOrder?.nameSize
                      )
                  }
                />
              </div>
              <span className='product-final-prices sm:mt-6'>{item?.product?.price * item.quantityOrder.quantity}₫</span>
            </div>

            <span className='product-delete'>
              <RiDeleteBinLine size={17} className='delete-icon mr-11 max-sm:mr-12' />
            </span>
          </div>
        ))}

      </div>
    </div>
  )
}
export default LeftCart

const cssLeftCart = css`
      .style-heading {
        background - color: var(--color-white);
      padding: 9px 16px;
      border-radius: 4px;
      color: rgb(36, 36, 36);
      font-weight: 400;
      font-size: 13px;
      margin-bottom: 12px;
      top: 105px;
      z-index: 99;
  }
      .box {
        background - color: var(--color-white);
  }
      .sub-title {
        background - color: var(--color-white);
      margin-button: 20px;
      border-radius: 4px;
  }
      .sellername {
        font - size: 15px;
      color: rgb(36, 36, 36);
      font-weight: 500;
  }
      .product-final-prices {
        color: red;
  }
      .delete-icon:hover {
        color: red;
  }

  // Mobile: w< 740px
      @media only screen and (max-width: 739px) {
    .style - heading {
        display: flex;
      -webkit-box-pack: justify;
      ustify-content: space-between;
      top: 122px;
      left: 0px;
      width: 100%;
      z-index: 5;
      background: rgb(255, 255, 255);
      padding: 11px 16px;
    }
      .taitle-table {
        display: none;
    }
      .real-prices {
        display: none;
    }
  }
      `
