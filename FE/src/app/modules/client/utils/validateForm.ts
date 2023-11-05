import * as yup from "yup"

export const schema = yup.object().shape({
    fullname: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    phoneNumber: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    city: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    district: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    commune: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    locationDetail: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
})

export const validateLogin = yup.object().shape({
    email: yup.string().required('bạn cần nhập đầy đủ thông tin'),
    password: yup.string().required('bạn cần nhập đầy đủ thông tin')
})
export const validateRegister = yup.object().shape({
    email: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    password: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    phoneNumber: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    birthday: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    fullname: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    nickname: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    address: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    gender: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    confirmPass: yup.string().required('Bạn cần nhập đầy đủ thông tin').oneOf([yup.ref('password')]),
})
export const validateManageInfo = yup.object().shape({
    email: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    phoneNumber: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    birthday: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    fullname: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    nickname: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    address: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    gender: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
})
export const validateUpdatePassword = yup.object().shape({
    password: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    // newPassword: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    confirmNewPassword: yup.string().required('Bạn cần nhập đầy đủ thông tin').oneOf([yup.ref('password')]),
})
export const validateForgotPassword = yup.object().shape({
    email: yup.string().required('Bạn cần nhập đầy đủ thông tin')
})
export const validateSupport = yup.object().shape({
    name: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    phoneNumber: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    email: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    topic: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    note: yup.string().required('Bạn cần nhập đầy đủ thông tin')
})

