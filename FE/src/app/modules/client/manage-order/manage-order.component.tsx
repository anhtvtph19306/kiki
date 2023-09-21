import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import MenuSideBar from '~/app/component/stack/menu-sidebar/menu-sidebar.component'
import MainManangeOrder from './component/main-manage-order/main-manage-order.component'

interface ManageOrderProps {
    props?: any
}

const ManageOrder: FunctionComponent<ManageOrderProps> = () => {
    return (
        <div css={cssManageOrder} className='w-[1440px] m-auto flex mt-16'>
            <div>
                <MenuSideBar />
            </div>
            <div>
                <MainManangeOrder />
            </div>
        </div>
    )
}

export default ManageOrder

const cssManageOrder = css`

`