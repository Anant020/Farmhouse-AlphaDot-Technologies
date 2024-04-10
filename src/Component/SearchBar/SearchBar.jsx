import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import './SearchBar.css';
import { addDays } from 'date-fns';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  checkinDate: Yup.date().required('Check-In Date is required'),
  checkoutDate: Yup.date().required('Check-Out Date is required')
    .when('checkinDate', (checkinDate, schema) => {
      return schema.test('checkOutAfterCheckIn', 'Check-out date must be after the check-in date',
        function (checkoutDate) {
          if (checkinDate && checkoutDate) {
            return new Date(checkoutDate) > new Date(checkinDate);
          }
          return true;
        });
    })
    .test('is-after-checkin', 'Check-out date must be after check-in date', function (value) {
      const { checkinDate } = this.parent;
      return addDays(new Date(checkinDate), 1) <= new Date(value);
    }),
  guestCount: Yup.number()
    .typeError('Number of Guests must be a number')
    .positive('Number of Guests must be a positive number')
    .required('Number of Guests is required'),
});


function SearchBar() {
  const today = new Date();           // 05-03
  const tomorrow = addDays(today, 1); // 05-03
  const trip = addDays(tomorrow, 4); // 05-03
  return (
    <div className="card my-2  d-flex rounded-5  align-items-center border-3 border-opacity-50 cardborder ">
      <Formik
        initialValues={{
          checkinDate: '',
          checkoutDate: '',
          guestCount: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }} >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="py-2">
            <div className="row SearchMain">
              <div className="col-md-2 d-flex flex-column mt-2 px-2 w-auto mx-4 ">
                <label htmlFor="checkinDate" className="form-label">
                  Check-In Date
                </label>
                <DatePicker
                  className="form-control border-0 p-0 datepicker w feildMain"
                  selected={values.checkinDate}
                  onChange={(date) => {
                    setFieldValue('checkinDate', date);
                    setFieldValue('checkoutDate', '');
                  }}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}

                  placeholderText={tomorrow.toISOString().split('T')[0]} // 05-03
                />
                <ErrorMessage name="checkinDate" className="error" />
              </div>

              <div className="col-md-2 d-flex  flex-column pt-2 ps-2 border rounded-1 w-auto mx-4 pe-0 ">
                <label htmlFor="checkoutTime" className="form-label ">
                  Check-In Time
                </label>
                <div className='dropdown '>
                  <Field as="select" name="checkinTime" className="form-select border-0 p-0  ">
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">10:00 PM</option>
                  
                </Field>
                </div>
              </div>




              <div className="col-md-2 d-flex flex-column mt-2 px-2 w-auto mx-4">
                <label htmlFor="checkoutDate" className="form-label">
                  Check-Out Date
                </label>
                <DatePicker
                  className="form-control border-0 p-0 datepicker feildMain"
                  selected={values.checkoutDate}
                  onChange={(date) => setFieldValue('checkoutDate', date)}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date(values.checkinDate)}
                  placeholderText={trip.toISOString().split('T')[0]} // 05-03
                />
                <ErrorMessage name="checkoutDate" component="div" className="error" />
              </div>

              <div className="col-md-2 d-flex  flex-column pt-2 ps-2 border rounded-1 w-auto mx-4 pe-0 ">
                <label htmlFor="checkoutTime" className="form-label">
                  Check-Out Time
                </label>
                <div className='dropdown p-0'>
                  <Field as="select" name="checkoutTime" className="form-select border-0 p-0 " >
                  <option value="10:00 AM">09:00 PM</option>
                  <option value="11:00 AM">09:00 AM</option>
                  
                </Field>
                </div>
              </div>

              <div className="col-md-2 d-flex flex-column mt-2 px-2 w-auto mx-4">
                <label htmlFor="guestCount" className="form-label">
                  Number of Guests
                </label>
                <Field
                  type="number"
                  className="form-control  border-0 p-0 datepicker feildMain"
                  id="guestCount" min='1' step='1'
                  name="guestCount"
                  placeholder="0"
                />
                {/* <ErrorMessage name="guestCount" component="div" className="error col-md-4" /> */}
              </div>


              <div className="col-md-2 d-flex  flex-column mt-2 p-2  w-auto mx-4 ">
                <label htmlFor="checkoutTime" className="form-label">
                  Choose city
                </label>
                <div className='dropdownplace h-auto'>
                <Field as="select" name="checkinTime" className="form-select border-0 p-0 h-auto">
                  <option value="Indore">Indore</option>
                  <option value="Ujjain">Ujjain</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Betul">Betul</option>
                  <option value="Khandwa">Khandwa</option>
                  
                </Field>
                </div>
              </div>


              <div className="col-md-2 d-flex align-items-center justify-content-center w-auto mx-4 btnMain">
                <div className='btn btn-primary btn-block rounded-pill border-0 py-2 px-4 '>
                  <Link to={`/PropertyList`}
                    type="submit"
                    className="text-decoration-none text-light"
                    disabled={isSubmitting}
                  >
                    Search
                  </Link>
                </div>
              </div>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SearchBar;




























