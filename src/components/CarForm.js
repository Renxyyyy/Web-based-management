import './CarForm.css'
import { useState} from "react"


function App() {

    const [formData, setFormData] = useState({
      Name: '',
      Phone: '',
      Vehicle: '',
      Email: '',
      Platenumber: '',
    })

    const [formError, setformError] = useState ({})

  const onChangeHandler = (event) => {

    console.log(event)
    setFormData(()=> ({
      ...formData,
      [event.target.name]: event.target.value
    }))
  }

  const validateForm = () => {
    let err = {}

    if(formData.Name === ''){
      err.Name = 'Name is required!'
    }
    if(formData.Phone === ''){
      err.Phone = 'Phone Nunmber is required!'
    }
    if(formData.Vehicle === ''){
      err.Vehicle = 'Vehicle is required!'
    }
    if(formData.Email === ''){
      err.Email = 'Email is required!'
    }
    if(formData.Platenumber === ''){
      err.Platenumber = 'Plate number is required!'
    }

    setformError({...err})
    
    return Object.keys(...err).length < 1;
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log("Form Data:", formData)
    let isValid = validateForm()

    if(isValid){
      alert('Submitted')
    }else{
      alert("In valid Form")
    }
    console.log(isValid)

  }
  return (
    <div className="App">
      <div className='Header'>
      <h1>Car Sticker Register</h1>
      </div>
      <form className='form' onSubmit={onSubmitHandler}>
      <div className='form-group'>
        <label htmlFor="Name" className='form-label'>Name:</label>
      <input type="Form-control" name="name" onChange={onChangeHandler} />
      <span className='non-valid'>{formError.Name}</span>
      </div>
      <div className='form-group'>
        <label htmlFor="Phone" className='form-label'>Phone Number:</label>
      <input type="Form-control"  name="phone" onChange={onChangeHandler}  />
      <span className='non-valid'>{formError.Phone}</span>
      </div>
      <div className='form-group'>
      <label htmlFor="Vehicle" className='form-label'>Types of Vehicle:</label>
      <select className='form-select' name='vehicle' onChange={onChangeHandler} >
            <option value=""></option>
            <option value="Van">Van</option>
            <option value="Car">Car</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Others">Others</option>
          </select>
          <span className='non-valid'>{formError.Vehicle}</span>
      </div>
      <div className='form-group'>
        <label htmlFor="Email" className='form-label'>Email:</label>
      <input type="email"  name="text" onChange={onChangeHandler}  />
      <span className='non-valid'>{formError.Email}</span>
      </div>
      <div className='form-group'>
        <label htmlFor="Platenumber" className='form-label'>Plate Number:</label>
      <input type="Form-control"  name="text" onChange={onChangeHandler}  />
      <span className='non-valid'>{formError.Platenumber}</span>
      </div>
      <div className='form-group'>
        <button className='btn' type='submit'>Submit</button>

        <p className='Note'>Note: Only limited to 4 stickers per household</p>
        <p className='Note'>You will be notified via Text or Email of your expired sticker</p>

      </div>
      </form>
    </div>
  );
}

export default App;
