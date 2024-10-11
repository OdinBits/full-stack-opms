import * as Yup from 'yup';

export const loginFormSchema = Yup.object({
    // name: Yup.string().required("name required"),
    email: Yup.string().email().matches(/\.com$/, 'Email should end with ".com"').required("Email required"),
    password: Yup.string().required("Password required"),
    // message: Yup.string().required("message required")
})