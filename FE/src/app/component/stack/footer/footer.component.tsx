import { css } from '@emotion/react'
import React, { FunctionComponent } from 'react'
import { FaFacebook, FaYoutube, FaTelegram } from 'react-icons/fa';


interface FooterComponentProps {
    props?: any
}

const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
    return (
        <footer css={cssFooter}>
            <div className='div1'>
                <div className='div2'>
                    <div className='block'>
                        <h4 className='h4'>Hỗ trợ khách hàng</h4>
                        <p className='hotline'>
                            "hotline:   "
                            <a href="#">1900-6035</a><br />
                            <span className='small-text'>(1000 đ/phút, 8-21 kể cả T7, CN)</span>
                        </p>
                        <a href="#" className='small-text'>Các câu hỏi thường gặp</a>
                        <a href="#" className='small-text'>Gửi yêu cầu hỗ trợ</a>
                        <a href="#" className='small-text'>Hướng dẫn dặt hàng</a>
                        <a href="#" className='small-text'>Phương thức vận chuyển</a>
                        <a href="#" className='small-text'>Chính sách đổi trả</a>
                        <a href="#" className='small-text'>Hướng dẫn trả góp</a>
                        <a href="#" className='small-text'>Chính sách hàng nhập khẩu</a>
                        <a href="#" className='small-text'>Hỗ trợ khách hàng: hotro@kiki.vn</a>
                        <a href="#" className='small-text'>Báo lỗi bảo mật: security@kiki.vn</a>
                    </div>
                    <div className='block'>
                        <h4 className='h4'>Về Kiki</h4>
                        <a href="#" className='small-text'>Giới thiệu về kiki</a>
                        <a href="#" className='small-text'>Kiki Blog</a>
                        <a href="#" className='small-text'>Tuyển dụng</a>
                        <a href="#" className='small-text'>Chính sách bảo mật thanh toán</a>
                        <a href="#" className='small-text'>Chính sách bảo mật thông tin cac nhân</a>
                        <a href="#" className='small-text'>Chính sách giải quyết khiếu nại</a>
                        <a href="#" className='small-text'>Điều khoản sử dụng</a>
                        <a href="#" className='small-text'>Giới thiệu xu kiki</a>
                        <a href="#" className='small-text'>Gửi Astra nhận xu</a>
                        <a href="#" className='small-text'>Tiếp thị liên kết</a>
                        <a href="#" className='small-text'>Bán hàng doanh nghiệp</a>
                        <a href="#" className='small-text'>Điều kiện vận chuyển</a>

                    </div>
                    <div className='block'>
                        <h4 className='h4'>Hợp tác liên kết</h4>
                        <a href="#" className='small-text'>Quy chế hoạt động sàn GDTMDT </a>
                        <a href="#" className='small-text'>Bán hàng cùng kiki</a>
                        <h4 className='h4'>Chứng nhận bởi</h4>
                        <div className='logoChungNhan'>
                            <img className='logo1' src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" />
                            <img className='logo2' src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" />
                        </div>
                    </div>
                    <div className='block'>
                        <h4 className='h4'>Phương thức thanh toán</h4>
                        <p className='payment'></p>
                        <h4 className='h4'>Dịch vụ giao hàng</h4>
                    </div>
                    <div className='block'>
                        <h4 className='h4'>Kết nối với chúng tôi</h4>
                        <p className='icon'>
                            <span className='text-[32px] text-blue-500'>
                                <FaFacebook />
                            </span>
                            <span className='text-[32px] text-blue-400'>
                                <FaTelegram />
                            </span>
                            <span className='text-[32px] text-red-500'>
                                <FaYoutube />
                            </span>

                        </p>

                        <h4 className='h4'>Tải ứng dụng trên điện thoại</h4>
                        <div className='app'>
                            <img className='w-40' src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" alt="" /><br />
                            <img className='w-40' src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='div3'></div>
                <div className='div4'>
                    <div className='text-div4'>
                        <div className='text4'>
                            <p className='small-text'> Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh</p>
                            <p className='small-text'>Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng</p>
                            <p className='small-text'>Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022</p>
                            <p className='small-text'>© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent

const cssFooter = css`
    width: 1440px;
    margin: auto;
    margin-top: 16px;
    font-size: 12px;
    line-height: 16px;
    font-weight: normal;
    color: rgb(128, 128, 137);
    background-color: white;
    font-family: var(--ff-beviet);
    font-size: 1.4rem;
    
    @media (min-width: 0) and (max-width: 739px) {
        max-width:100%; 
        position: absolute;               
    }
    .div1{padding: 16px 0px};

    .div2{    
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 0 16px;
        @media (min-width: 0) and (max-width: 739px) {            
           display:block;
           text-align:center;           
        }
    };

    .block{ width: 268px, margin:auto};

    .h4{
        font-size: var(--fs-7);
        line-height: var(--fs-8);
        font-weight: 500;
        color: rgb(56, 56, 61);
        margin-bottom: 12px;
        margin-top: 0px;
        display: block;
        margin-block-start: 1.33rem;
        margin-block-end: 1.33rem;       
    };

    .hotline{margin-bottom: 8px};

    .hotline a{
        color: rgb(56, 56, 61);
        font-weight: 500;
    };

    .small-text{
        display: block;
        margin-bottom: 8px;
        color: rgb(128, 128, 137);        
    };

    .div3{
        content: " ";
        height: 1px;
        background-color: rgb(235, 235, 240);
        width: 1240px;
        margin-right: auto;
        margin-left: auto;
    };

    .div4{
        padding: 16px 0px;
        background-color: rgb(255, 255, 255);    
    };
    .div4 .text-div4{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding:10px
    }

    .logoChungNhan{
        width: 226px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        @media (min-width: 0) and (max-width: 739px) {
            justify-content:center;
            margin:auto
        }
    };
    .logoChungNhan .logo1{
        width:32px;
        height:32px
    }
    .logoChungNhan .logo2{
        width: 83px;
        height:32px
    }
    .payment{
        font-size: 0.75rem;
        line-height: 1rem;
        color: rgb(128, 128, 137);
        margin-bottom: 12px;
        margin-top: 0px;
    }
    .icon{
        display:flex;
        padding:10px;
        @media (min-width: 0) and (max-width: 739px) {
            justify-content:center
        }
    }
    .icon span{
        padding:7px
    }
    .app img{
        @media (min-width: 0) and (max-width: 739px) {
            width: 100%
        }
    }
    .div4 .text-dive4 .text4{
        @media (min-width: 0) and (max-width: 739px) {
            display:block;
            text-align:center
        }
    }
`