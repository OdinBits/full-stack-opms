import * as Yup from 'yup';

export const addProjectSchema = Yup.object({
    projectInfo: Yup.string()
        .matches(/^[a-zA-Z0-9\s]*$/, 'Project Theme should not contain special characters')
        .required("Project Theme is required"),
    reason: Yup.string().required("reason is required"),
    priority: Yup.string().required("priority is required"),
    type: Yup.string().required("type is required"),
    division: Yup.string().required("division is required"),
    category: Yup.string().required("category is required"),
    department: Yup.string().required("department is required"),
    location: Yup.string().required("location is required"),
    startDate: Yup.date().required("Start Date is required"),
    endDate: Yup.date().required('End Date is required')
        .test('endDate', 'End Date must be greater than Start Date', function (value) {
            const startDate = this.parent.startDate;
            if (startDate && value) {
                return new Date(value) > new Date(startDate);
            }
            return true;
        }),
});
