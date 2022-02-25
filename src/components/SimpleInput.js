// import { useEffect, useRef, useState } from 'react'

// const SimpleInput = () => {
// 	const [enteredName, setEnteredName] = useState('')
// 	const [enteredNameTouched, setenteredNameTouched] = useState(false)
// 	const [formIsValid, setformIsValid] = useState(false)

// 	 const enteredNameIsValid = enteredName.trim() !== '' // true fasle деген значенияны сактайт
// 	 const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

// 	 if(enteredNameIsValid){
// 		 setformIsValid(false)
// 	 }else(
// 		 setformIsValid(true)
// 	 )

// 	//  useEffect(() => {
// 	// 	 if(enteredNameIsValid) {
// 	// 		 setformIsValid(true)
// 	// 	 }else{
// 	// 		 setformIsValid(false)
// 	// 	 }
// 	//  }, [enteredNameIsValid])

// 	const nameInputBlurHandler = (event) => {
// 		setenteredNameTouched(true)
// 	};

// 	const nameInputHandler = (event) => {  
// 		setEnteredName(event.target.value) 
// 	}

// 	const fromSubmitHandler = (event) => {
// 		event.preventDefault()
// 		setenteredNameTouched(true)
// 		if(!enteredNameIsValid) return;
// 		setEnteredName('')
// 		setenteredNameTouched(false)
// 	}
// 	const nameInputClass = !nameInputIsInvalid
// 		? 'form-control'
// 		: 'form-control invalid'

// 	return (
// 		<form onSubmit={fromSubmitHandler}>
// 			<div className={nameInputClass}>
// 				{console.log(enteredName)}
// 				<label htmlFor='name'>Your Name</label>
// 				<input
// 				    value={enteredName}
// 					type='text'
// 					id='name'
// 					onChange={nameInputHandler}
// 					onBlur={nameInputBlurHandler}
// 				/>
// 				{nameInputIsInvalid && <p>Name must not be empty</p>}
// 			</div>
// 			<div className='form-actions'>
// 				<button disabled={!formIsValid}>Submit</button>
// 			</div>
// 		</form>
// 	)
// }

// export default SimpleInput
