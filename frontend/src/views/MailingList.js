import { Form } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
// import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { redirect } from 'react-router-dom'

const mailerUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const response = await axios.post(mailerUrl, data)
  console.log(response)
  toast.success(response.data.msg)
  return redirect('/')
  // return null
}

const MailingList = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>
      {/* last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
        />
      </div>
      {/* name */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
      >
        SIGN UP!
      </button>
    </Form>
  )
}

export default MailingList
