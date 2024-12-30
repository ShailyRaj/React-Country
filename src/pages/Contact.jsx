// import { useState } from "react";

export const Contact = () => {

    {/* shardha maam approach */}
    // let [formData, setFormData] = useState(
    //     {
    //         username: "",
    //         email: "",
    //         message: "",
    //     }
    // )
    // const handleFormData = (event) => {
    //     setFormData((currData) => {
    //         return {
    //             ...currData, [event.target.name]: event.target.value
    //         }
    //     })
    // } 
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(formData);
    //     setFormData({
    //         username: "",
    //         email: "",
    //         message: "",
    //     })
    // }

    const handleFormSubmit = (formData) => {
        // console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">

                {/* shardha maam approach */}
                {/* <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your Name" name="username" value={formData.username} onChange={handleFormData} />
                    <input type="email" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleFormData} />
                    <textarea type="text" rows="10" placeholder="Enter your Message" name="message" value={formData.message} onChange={handleFormData} ></textarea>
                    <button type="submit" >Send</button>
                </form> */}

                <form action={handleFormSubmit}>
                    <input type="text" className="form-control" placeholder="Enter your Name" name="username" required autoComplete="off"  />
                    <input type="email" className="form-control" placeholder="Enter your Email" name="email" required autoComplete="off" />
                    <textarea type="text" className="form-control" rows="10" placeholder="Enter your Message" name="message" required autoComplete="off" ></textarea>
                    <button type="submit" >Send</button>
                </form>
            </div>
        </section>
    )
}