// import { useRef, useState } from 'react'

// const SimpleInput = () => {
// 	const [enteredName, setEnteredName] = useState('')
// 	// const [enteredNameValid, setenteredNameValid] = useState(false)
// 	const [enteredNameTouched, setenteredNameTouched] = useState(false)
// 	// const nameInputRef = useRef(null)
// 	 const enteredNameIsValid = enteredName.trim() !== '' // true fasle деген значенияны сактайт
// 	 const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

// 	const nameInputBlurHandler = (event) => { //Это функция когда биз инпутка тийгенде проверка иштеш керек
// 		// setenteredNameTouched(true)
// 	    // if (enteredName.trim() === ''){
// 		// 	setenteredNameValid(false)
// 		// 	return;
// 		// }
// 		// setenteredNameValid(true)
// 	};

// 	const nameInputHandler = (event) => {  
// 		setEnteredName(event.target.value) //А здес когда инрутка жазып баштаган да проверка
// 		// if(enteredName.trim() !== ''){
// 		// 	setenteredNameValid(true)
// 		// }
// 	}

// 	const fromSubmitHandler = (event) => {
// 		event.preventDefault()
// 		setenteredNameTouched(true)
// 		// if (enteredName.trim() === '') {
// 		// 	setenteredNameValid(false)
// 		// 	return
// 		// }
// 		// setenteredNameValid(true)
// 		// const enteredValueRef = nameInputRef.current.value
// 		// console.log(enteredValueRef)
// 		setEnteredName('')
// 	}
// 	// const nameInputIsInvalid =  !enteredNameValid && enteredNameTouched
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
// 					// ref={nameInputRef}
// 					onBlur={nameInputBlurHandler}
// 				/>
// 				{nameInputIsInvalid && <p>Name must not be empty</p>}
// 			</div>
// 			<div className='form-actions'>
// 				<button>Submit</button>
// 			</div>
// 		</form>
// 	)
// }

// export default SimpleInput