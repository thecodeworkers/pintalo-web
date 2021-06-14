import { LoginView } from './elements'

const Login = ({ content }) => {
  return (
    <div>
      {
        content && (
          <LoginView data={content}/>
        )
      }
    </div>
  )
}

export default Login
