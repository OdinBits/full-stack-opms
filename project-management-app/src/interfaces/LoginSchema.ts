import * as Yup from 'yup';

export const loginSchema = Yup.object({
    username: Yup.string().email().matches(/\.com$/, 'Email should end with ".com"').required("Valid Email Required"),
    password: Yup.string().required("Password Required")
});