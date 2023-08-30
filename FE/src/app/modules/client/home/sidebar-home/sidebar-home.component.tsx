import { css } from '@emotion/react'
import { FunctionComponent, useEffect } from 'react'
import { useCategoryRedux } from '../../redux/hook/useCategoryReducer'

interface SideBarHomeProps {
    props?: any
}

const SideBarHome: FunctionComponent<SideBarHomeProps> = () => {
    const { data: categorys, actions } = useCategoryRedux()
    useEffect(() => {
        actions.getAllcategory()
    }, [])
    return (
        <div css={cssSidebar} className='sm:sticky'>
            <div className='sidebar-wrapper mb-4 max-sm:hidden'>
                <div className='outanding'>
                    Nổi bật
                </div>
                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/a0/c9/78/cddabc413834de509f40455498c7ff47.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>

                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/cb/64/f7/0ebb0ae297f052e34a8161c9bf8efb96.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>

                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/cb/64/f7/0ebb0ae297f052e34a8161c9bf8efb96.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>


                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/cb/64/f7/0ebb0ae297f052e34a8161c9bf8efb96.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>


                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/cb/64/f7/0ebb0ae297f052e34a8161c9bf8efb96.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>

                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/cb/64/f7/0ebb0ae297f052e34a8161c9bf8efb96.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>


                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>


                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/a0/c9/78/cddabc413834de509f40455498c7ff47.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>

                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/a0/c9/78/cddabc413834de509f40455498c7ff47.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>
                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/a0/c9/78/cddabc413834de509f40455498c7ff47.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Astra Reward
                    </div>
                </div>
            </div>

            {/*  CATEGORY */}

            <div className='sidebar-wrapper mb-4 max-sm:flex'>
                <div className='outanding max-sm:hidden' >
                    Danh mục
                </div>
                {categorys?.categorys?.map((item: any, index: any) => (

                    <div className='item-out ' key={index}>
                        <div className='icon mr-2'>
                            <img src={item?.image} alt="" className='w-[32px] text-center' />
                        </div>
                        <div className='title'>
                            {item?.name}
                        </div>
                    </div>
                ))}
            </div>


            {/*tảo cửa hàng */}
            <div className='sidebar-wrapper mb-4 max-sm:hidden'>
                <div className='item-out '>
                    <div className='icon mr-2'>
                        <img src="	https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp" alt="" className='w-[32px] text-center' />
                    </div>
                    <div>
                        Bán hàng cùng KIKI
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarHome

const cssSidebar = css`
width: 230px;
height:100dvh;
overflow-y: auto;
scrollbar-width: none;
scrollbar-color: transparent;
top: 0px;
::-webkit-scrollbar {
    display: none; 
  }
.sidebar-wrapper {
    padding: 12px 8px;
    background-color: var(--color-white);
    border-radius: 8px;
    
}
.outanding{
    margin-bottom: 8px;
    padding-left: 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    color: rgb(39, 39, 42);
}
.item-out{
    display: flex;
    padding: 7px 16px;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
        background: rgba(39, 39, 42, 0.12);
      }
}
@media (min-width: 0) and (max-width: 739px) {
    height:130px;
    width: 100%;
    .sidebar-wrapper{    
        overflow-x: auto;
        ::-webkit-scrollbar {
            display: none;
          }
    }
    
.item-out{
    display: flex;
    flex-direction: column;
}
.title {
    margin-top: 10px;
    text-align: center;
    font-size: 1.2rem;
  }
}

`