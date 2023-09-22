
import { FunctionComponent } from 'react'
import { Controller } from 'react-hook-form'
import InputComponent from '~/app/component/parts/input/input.component';
import { css } from '@emotion/react';

interface ShippingData {
    fullname: string;
    phoneNumber: string;
    city: string;
    district: string;
    commune: string;
    locationDetail: string;
}
interface ShippingProps {
    props?: ShippingData
    control?:any
}
const Shipping: FunctionComponent<ShippingProps> = ({ control }) => {

    const arrayField = [
        {
            title: "Họ và Tên",
            field: "fullname"
        },
        {
            title: "Điện thoại di động",
            field: "phoneNumber"

        },
        {
            title: "Tỉnh/Thành Phố",
            field: "city"

        },
        {
            title: "Quận/Huyện",
            field: "district"

        },
        {
            title: "Phường/Xã",
            field: "commune"

        },
        {
            title: "Địa Chỉ",
            field: "locationDetail"
        }

    ]
   
    return (
        <div className='sm:py-20 w-[60%]'>

            <h3 className="title text-[22px] font-semibold"> Địa chỉ giao hàng</h3>

            <div css={itemForm}>                 
  <form className='form-item rounded-md bg-white py-6 mt-4 max-sm:px-4 space-y-6'>
    {arrayField?.map((item: any, index: number) => (
      <div key={index} className='sm:flex pt-5 items-center sm:my-6 max-sm:my-14 w-[460px]'>
        <div className='sm:w-[200px] max-sm:px-3'>{item.title}</div>
        <div className='w-full h-[34px]'>
          <Controller
            control={control}
            name={item.field}
            render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
              return (
                <div>
                  <InputComponent
                    hideIcon={false}
                    placeholder={item?.title}
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    hasErorr={error}
                  />
                  {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                </div>
              );
            }}
          />
        </div>
      </div>
    ))}
  </form>
</div>
        </div>
    )
}
export default Shipping
const itemForm = css`
padding-left:20px;
.bt{
    border: 1px solid rgb(2, 159, 209);
    color: rgb(255, 255, 255);
    background: rgb(0, 182, 240); 
}
button {
    border: 1px solid gray;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
`
