

function ContactForm() {

    const handleSubmission = (e) => {  
        e.preventDefault()
        // const firstName = e.target.name['first-name'].value
        // const lastName = e.target.name['last-name'].value
        // const age = e.target.name['age'].value
        // const log = `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`
        // console.log(log);
        // console.log(e);

        const fd = new FormData(e.target)

        // for (const entry of fd.entries()) {
        //     console.log(entry);
        // }

        console.table(Object.fromEntries(fd));
   
        
    }



  return (
    <>
    <div>ContactForm</div>
    <form onSubmit={handleSubmission}>
        <input type='text' name="first-name" placeholder="First Name" /> <br /> 
        <input type="text" name='last-name' placeholder="Last Name" />  <br />
        <input type='number' name='age' placeholder="Age" /> <br />
        <button type="submit" name='submit-button' >Submit</button>   



    </form>


    </>
  )
}

export default ContactForm