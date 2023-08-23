import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import SignIn from './form/signIn.component';
import SignUp from './form/signUp.component';
import { css } from '@emotion/react';




const Register: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShowSignUp, setIsShowSignUp] = useState(false)
    const [isShowSignIn, setIsShowSignIn] = useState(true)

    const handleCreate = () => {
        setIsShowSignUp(!isShowSignUp)
        setIsShowSignIn(!isShowSignIn)
    }


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <button onClick={showModal}>
                Tài khoản
            </button>
            <Modal title="Xin chào" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okType='default' width={800}>
                <div css={register} className='register'>
                    <div className='form'>
                        {isShowSignIn && <SignIn />}

                        {isShowSignIn && <Button type="link" onClick={() => handleCreate()} >
                            Tạo tài khoản
                        </Button>}

                        {isShowSignUp && <SignUp />}

                        {isShowSignUp && <Button type="link" onClick={() => handleCreate()} >
                            Đăng nhập
                        </Button>}

                    </div>

                    <div className='image'>
                        <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" className='w-[103px]' alt="" />
                        <div className='content'>
                            <h4>Mua sắm tại KIKI</h4>
                            <span>Siêu ưu đãi mỗi ngày</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </div >
    );
};

export default Register;
const register = css`    
    background: rgb(248, 248, 248);
    display: flex;
    width: 100%;
    position: relative;
    
    .form{
        width: 500px;
        padding: 40px 45px 24px;
        background: rgb(255, 255, 255);
        border-radius: 20px 0px 0px 20px;
    }
    .image {
        background: linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%);
        width: 300px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        border-radius: 0px 20px 20px 0px;  
    }
    .content{
        margin: 30px 0px 0px;
        text-align: center;
    }
    .content h4{
        margin: 0px 0px 5px;
        color: rgb(11, 116, 229);
        font-size: 1.063rem;
        font-weight: 500;
    }
    .content span{
        font-size: 0.831rem;
        color: rgb(11, 116, 229);
        font-weight: 500;
    }
`