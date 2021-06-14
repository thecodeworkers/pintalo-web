import { RegisterView } from './elements'

const Register = ({ content }) => {
  return (
    <div>
      {
        content && (
          <RegisterView data={content}/>
        )
      }
    </div>
  )
}

export default Register
