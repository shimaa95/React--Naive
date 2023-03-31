import { Formik } from 'formik';
import React from 'react';


function AppForm({initialValues,validationSchema,onSubmit,children}) {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >

        {() => (
            <>
            {children}
            </>
        )}
        </Formik>
    );
}

export default AppForm;