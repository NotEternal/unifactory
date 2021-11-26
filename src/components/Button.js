import { Button as BSButton } from 'react-bootstrap'

export function Button(props) {
  const {
    onClick,
    pending,
    children,
    disabled,
    className = '',
    ...other
  } = props

  return (
    <BSButton
      variant="primary"
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...other}
    >
      {pending ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>{' '}
          Pending
        </>
      ) : (
        children
      )}
    </BSButton>
  )
}
