import "./ContactForm.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Sand a message to us!</h1>
            <form action="">
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Messege" tow='4'></textarea>
                <button>Send Messege</button>
            </form>
        </div>
    )
}
export default ContactForm