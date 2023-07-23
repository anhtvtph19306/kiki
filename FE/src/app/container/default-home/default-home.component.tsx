
import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './../../component/stack/header/header.component';
import SubHeader from '~/app/component/stack/header/sub-header.component';
import VorcherHeade from '~/app/component/stack/header/vocher-header.component';
import FooterComponent from '~/app/component/stack/footer/footer.component';
interface DefaultHomeProps {
    prop?: unknown
}

const DefaultHome: FunctionComponent<DefaultHomeProps> = () => {
    return (
        <div>
            <div className='sm:px-[50px] max-sm:px-[10px] py-3 bg-white'>
                <HeaderComponent />
                <SubHeader />
            </div>
            <VorcherHeade />
            <Outlet />
            <FooterComponent />
        </div>
    )
}

export default DefaultHome