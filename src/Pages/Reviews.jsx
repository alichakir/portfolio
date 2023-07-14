import React, { useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Styles from '../styles/Reviews.module.css'
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job,text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  const [error, setError] = useState();
  const [show,setShow] = useState(false)
  const [nameerror, setusernameError] = useState();
  const [emailerror, setemailError] = useState();
  const [roleerror, setroleError] = useState();
  const [reviewerror, setreviewError] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    review: "",
  });

//validation
  const { username, email, role, review } = formData;
  console.log(username);

  const HandleToogle =() =>{
    setShow(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || email.trim() === "" || role.trim() === "" || review.trim() === "") {
      setError("Veulliez remplir tous les rubriques.");
      return;
    }
    setError()

    if (!/^[a-zA-Z\s]+$/.test(username)) {
      setusernameError("Votre Nom doit contenir juste des lettres.");
      return;
    }
    setusernameError()


    if (!/\S+@\S+\.\S+/.test(email)) {
      setemailError("Enter une adresse email valide.");
      return;
    }
    setemailError()

    if (!/^[a-zA-Z\s]+$/.test(role)) {
      setroleError("Veullier entrer un role valide");
      return;
    }
    setroleError()

    if (review.length < 10) {
      setreviewError("Vous devez entez au moin 10 caractère.");
      return;
    }
    setreviewError()

 
    console.log(formData);


    setFormData({
      username: "",
      email: "",
      phone: "",
      review: "",
    });
    alert('Merci !')
  };

  return (
   <main className={` mb-24 ${Styles.mm}`} >
        <article className={Styles.review}>
      <h4 className={Styles.author}>{name}</h4>
      <p className={Styles.job}>{job}</p>
      <p className={Styles.info}>{text}</p>
      <div className={Styles.button_container}>
        <button className={Styles.prev_btn} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={Styles.next_btn} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className={Styles.random_btn} onClick={randomPerson}>
        slide
      </button>
    </article>
<div className='flex justify-between items-center flex-wrap gap-8 ' >
<button   class="bg-blue-500 my-4 text-white font-bold py-4 px-4 rounded-full inline-flex items-center" onClick={HandleToogle} >
Ajouter
</button>
<button   class="bg-red-500 my-4 text-white font-bold py-4 px-4 rounded-full inline-flex items-center">
Supprimer
</button>
<button   class="bg-yellow-300 my-4 text-white font-bold py-4 px-4 rounded-full inline-flex items-center">
Modifier
</button>
</div>
{show &&
  <div className="bg-white mt-12 w-1/2 min-w-[300px] relative rounded-lg p-8 sm:p-12 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Your Name"
                    onChange={handleChange}
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                    required
                  />
                  {nameerror && <p className="text-red-500">{nameerror}</p>}
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={handleChange}
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                    required
                  />
                  {emailerror && <p className="text-red-500">{emailerror}</p>}
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="role"
                    value={role}
                    placeholder="Your Job"
                    onChange={handleChange}
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                  />
                  {roleerror && <p className="text-red-500">{roleerror}</p>}
                </div>
                <div className="mb-6">
                  <textarea
                    name="review"
                    value={review}
                    rows="6"
                    placeholder="Your Review"
                    onChange={handleChange}
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
                    required
                  ></textarea>
                  {reviewerror && (
                    <p className="text-red-500">{reviewerror}</p>
                  )}
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full text-blue-500 font-semibold text-[24px] bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90"
                  >
                    Envoyer
                  </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
              </form>
              </div>
 }
    
   </main>

  );
};

export default Review;