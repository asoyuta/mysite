type Props = {
  error: never
}

const ErrorMessage = ({ error }: Props) => {
  return (
    <div className="error-message">
      {console.log(error)}
      <p>{error}</p>
    </div>
  )
}

export default ErrorMessage
