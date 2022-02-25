import { useState } from 'react'

const BasicForm = (props) => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredLastName, setEnteredLastName] = useState('')
	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredNameTouched, setenteredNameTouched] = useState(false)
	const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false)
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim() !== '' 
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched

  const enteredLastNameIsValid = enteredLastName.trim() !== ''
  const lastnameInputIsInValid = !enteredLastNameIsValid && enteredLastNameTouched

  const enteredEmailIsValid = enteredEmail.trim() !== '' 
  const emailnameInputIsValid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false
  if(enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
    formIsValid = true
  }
  
  const nameInputBlurHandler = () => {
		setenteredNameTouched(true)
	};
  const lastnameBlurHandler = () => {
    setEnteredLastNameTouched(true)
  } 
  const emailnameBlurHandler = () => {
    setEnteredEmailTouched(true)
  }

	const nameInputHandler = (event) => {
		setEnteredName(event.target.value)
	}
	const lastnameInputHandler = (event) => {
		setEnteredLastName(event.target.value)
	}
	const emailInputHandler = (event) => {
		setEnteredEmail(event.target.value)
	}

	const formSubmitHandler = (event) => {
		event.preventDefault()
		setenteredNameTouched(true)
    setEnteredLastNameTouched(true)
    setEnteredEmailTouched(true)
		if (!enteredNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid) return;
		setEnteredName('')
    setEnteredLastName('')
    setEnteredEmail('')
		setenteredNameTouched(false)
    setEnteredLastNameTouched(false)
    setEnteredEmailTouched(false)
	}

	const nameInputClasss = !nameInputIsInValid
		? 'form-control'
		: 'form-control invalid'
  const lastnameInputClass = !lastnameInputIsInValid
    ? 'form-control'
		: 'form-control invalid'
  const emailnameInputClass = !emailnameInputIsValid
    ? 'form-control'
    : 'form-control invalid'
	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<div className={nameInputClasss}>
					<label htmlFor='name'>First Name</label>
					<input 
            type='text' 
            id='name' 
            value={enteredName}
            onChange={nameInputHandler} 
            onBlur={nameInputBlurHandler}
          />
          {nameInputIsInValid && <p>Name must not be empty</p>}
				</div>
				<div className={lastnameInputClass}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
            value={enteredLastName}
						onChange={lastnameInputHandler}
            onBlur={lastnameBlurHandler}
					/>
          {lastnameInputIsInValid && <p>Last Name must not be empty</p>}
				</div>
			</div>
			<div className={emailnameInputClass}>
				<label htmlFor='name'>E-Mail Address</label>
				<input 
            type='text' 
            id='name' 
            value={enteredEmail}
            onChange={emailInputHandler} 
            onBlur={emailnameBlurHandler}
          />
          {emailnameInputIsValid && <p>Email must not be empty</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid} type='submit'>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm
