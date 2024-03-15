import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactCom = () => {

    const form = useRef();

    const [userData, setUserdata] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const inputUserdata = (e) => {
        const { name, value } = e.target;
        setUserdata((preValue) => {
            return { ...preValue, [name]: value };
        })
    };

    const submitUserData = async (e) => {
        e.preventDefault();
        if (!userData.fullName) {
            alert("Plzz fill your full-name");
        }
        else if (!userData.email) {
            alert("Plzz fill your email");
        }
        else if (!userData.message) {
            alert("Plzz fill your message");
        }
        else {
            emailjs.sendForm('service_uzuzpnh', 'template_z2i3d4n',
                form.current, { publicKey: 'TF7ODsiFd15yEI2iv', }
            ).then(() => {
                alert('SUCCESS!');
            },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
            setUserdata({
                fullName: "",
                email: "",
                message: "",
            });
        }


    }

    return (
        <>
            <section className='contact-section' id='contact'>
                <div className=' container h-100 '>

                    <div className='row d-flex justify-content-center'>
                        {/* <div className=' col-0 col-lg-5'></div> */}
                        <div className=' col-12 col-lg-6 text-center'>
                            <h1 className='contact-main-h1 mt-5 mb-2'>Contact</h1>
                        </div>
                    </div>

                    <div className='row h-100 d-flex justify-content-center'>
                        {/* <div className=' co-12 col-lg-5 contact-left-div'>
                            <div className='w-100 h-100'>
                                <div className='contact-heading-margin'>
                                    <h2>Let's Chat</h2>
                                </div>
                                <div>
                                    <p className='contact-tagline'>Let's create something together🤟</p>
                                </div>

                                <div>
                                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi, maxime sit ipsa modi doloribus vel tempore nulla numquam ea.</p>
                                </div>

                                <div className=' d-flex justify-content-center'>
                                    <div className="row contact-width-control1">
                                        <div className='col-2 contact-iconfont'>
                                            <div className='contact-icon-div2'>
                                                <i className="fa-regular fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div className='col-10'>
                                            <p className='mb-0'>Mail me at</p>
                                            <p className='mb-0 contact-mail'>Contact@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' contact-main-control'>
                                    <div className="row mt-3 contact-width-control2">
                                        <div className='col-12'>
                                            <div className='contact-icon-div3'>
                                                <div className='contact-icons-shape'>
                                                    <a href="https://twitter.com/SachinK45099263" target="_sachin" aria-label="SachinK45099263">
                                                        <i className=" fab fa-twitter contact-transform"></i>
                                                    </a>
                                                </div>
                                                <div className='contact-icons-shape'>
                                                    <a href="https://www.facebook.com/sachin.fandan.146" target="_sachin" aria-label="sachin.fandan.146">
                                                        <i className=" fab fa-facebook contact-transform"></i>
                                                    </a>
                                                </div>
                                                <div className='contact-icons-shape'>
                                                    <a href="https://www.instagram.com/sachin.kumar_1905_/" target="_sachin" aria-label="sachin.kumar_1905_">
                                                        <i className=" fab fa-instagram contact-transform"></i>
                                                    </a>
                                                </div>
                                                <div className='contact-icons-shape'>
                                                    <a href="https://www.linkedin.com/in/sachin-kumar-7606742a7/" target="_sachin" aria-label="sachin.kumar_1905_">
                                                        <i className="fa-brands fa-linkedin contact-transform"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className=' co-12 col-lg-6 h-100 d-flex align-items-center'>
                            <div className='w-100'>
                                <form ref={form} onSubmit={submitUserData}>
                                    <div>
                                        <div>
                                            <input type='text' name='fullName' id='' placeholder='First Name' autoComplete='nope' className=' input-fields ' maxLength={50} onChange={inputUserdata} value={userData.fullName} />
                                        </div>
                                        <div>
                                            <input type='text' name='email' id='' placeholder='Email' autoComplete='nope' className='input-fields ' maxLength={50} onChange={inputUserdata} value={userData.email} />
                                        </div>
                                        <div>
                                            <textarea type='text' name='message' id='' placeholder='Write your message...' autoComplete='off' className=' input-fields textarea-my' onChange={inputUserdata} value={userData.message} />
                                        </div>
                                        <div>
                                            <button type='submit' title='submit' className=' w-100 contact-submit-btn'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactCom;
