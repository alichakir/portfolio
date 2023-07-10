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

  return (
   <main className={`-mt-16 mb-24 ${Styles.mm}`} >
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
        surprise me
      </button>
    </article>
   </main>

  );
};

export default Review;