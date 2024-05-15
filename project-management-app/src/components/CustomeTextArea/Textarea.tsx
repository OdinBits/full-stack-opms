import React from 'react';
import { INVALID_USER_COLOR } from '../../constant/constant';
import { CustomTextareaProps } from '../../interfaces/customTextArea';
import { ErrorMessage, Field } from 'formik';

const CustomTextarea: React.FC<CustomTextareaProps> = ({
    id, name, value, placeholder, style, onChange, onBlur, error, errorMessage
}) => {
    return (
        <>
            <Field as='textarea'
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                style={style}
                onChange={onChange}
                onBlur={onBlur}
            />
            <ErrorMessage name={name}>{(msg) => <div style={INVALID_USER_COLOR}>{msg}</div>}</ErrorMessage>
        </>
    );
};

export default CustomTextarea;
