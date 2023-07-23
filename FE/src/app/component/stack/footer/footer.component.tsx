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
                        <div className='logoCertification'>
                            <img className='logo1' src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" />
                            <img className='logo2' src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" />
                        </div>
                    </div>
                    <div className='block'>
                        <h4 className='h4'>Phương thức thanh toán</h4>
                        <div className='payment'>
                            <img src="data:image/jpeg;base64,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" alt="" />
                            <img src="data:image/png;base64,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" alt="" />
                            <img src="data:image/png;base64,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" alt="" />
                            <img src="data:image/png;base64,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" alt="" />
                        </div>
                        <h4 className='h4'>Dịch vụ giao hàng</h4>
                        <div className='shiper'>
                            <img className='w-[100px]' src="data:image/jpeg;base64,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" alt="" />
                        </div>
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
                            <img className='w-60' src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" alt="" /><br />
                            <img className='w-60' src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" alt="" />
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
    
    
    .div1{padding: 16px 0px};

    .div2{    
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 0 16px;
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

    .logoCertification{
        width: 226px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    };
    .logoCertification .logo1{
        width:32px;
        height:32px
    }
    .logoCertification .logo2{
        width: 83px;
        height:32px
    }
    .payment{
        font-size: 0.75rem;
        line-height: 1rem;
        color: rgb(128, 128, 137);
        margin-bottom: 12px;
        margin-top: 0px;
        display:flex;                
    }
    .payment img{
        width:37px;        
        padding:4px;        
    }
    .shiper{
        margin:auto
    }
    .icon{
        display:flex;
        padding:10px;
    }
    .icon span{
        padding:7px
    }

    @media (min-width: 0) and (max-width: 739px) {
        max-width:100%; 
        position: absolute;       
        .div2{
            display:block;
           text-align:center; 
        };
        .logoCertification{
            justify-content:center;
            margin:auto
        };
        .icon{
            justify-content:center
        };
        .app img{            
                width: 200px ;
                margin:auto             
        };
        
        .div4 .text-dive4 .text4{        
            display:block;
            text-align:center        
        };
        .shiper img{
            width: 100px;            
            margin:auto
        }
        .payment{
            justify-content:center
        }
    }
`