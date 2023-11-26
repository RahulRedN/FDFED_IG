import React, { useState, useRef } from "react";
import classes from "../homepage_compos/homepageStyles.module.css";
import RoleCard from "./RoleCard";

export default function CaptionCarousel() {
  let companyName = "Inspiring Go";
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const arrLen = 3;
    setCurrentIndex((prev) => {
      const newIdx = (prev + 1) % arrLen;
      cardSliderRef.current.style.transform = `translate(-${newIdx * 33.3}%)`;
      return newIdx;
    })};



  const handlePrev = () => {
    const arrLen = 3;
    setCurrentIndex((prev) => {
      const newIdx = (prev - 1 + arrLen) % arrLen;
      cardSliderRef.current.style.transform = `translate(-${newIdx * 33.3}%)`;
      return newIdx;
    })};

  const cardSliderRef = useRef(null);
  //     //animations for oppcards intersection observer
  // const obsodd = new IntersectionObserver((entries)=>
  // {
  //   entries.forEach((entry)=>
  //   {
  //     console.log(entry);
  //     if(entry.isIntersecting)
  //     {
  //       entry.target.classList.add('animate1');
  //     }
  //   });
  // });

  // const oppodd = document.querySelectorAll('.hidden1');
  // oppodd.forEach((card)=> obsodd.observe(card));

  // //even

  // const obseven = new IntersectionObserver((entries)=>
  // {
  //     entries.forEach((entry)=>
  //     {
  //     console.log(entry);
  //     if(entry.isIntersecting)
  //     {
  //         entry.target.classList.add('animate2');
  //     }
  // });
  // });
  // const oppeven = document.querySelectorAll('.hidden2');
  // oppeven.forEach((card)=> obseven.observe(card));

  const data = [
    {
      title: "Student",
      text: "Are you a student who's struggling to find a tutor or unsure about Fee. Our platform offers tutors from different fields of study, you can search for tutors based on specific preferences and contact them.",
      image: "images/student_mansmile.jpg",
      buttonname: "Join now",
    },
    {
      title: "JobSeeker",
      text: "Are you jobseeker who's in need of a placement ?. Our platform offers every job listings. We believe you deserves access to the information they need to make carrer decisions and obviuosly succeed.",
      image: "images/jobseeker_womensmile.jpg",
      buttonname: "Join Now",
    },
    {
      title: "Tutor",
      text: "Your expertise & domain knowledge could be just what our students need to achieve their goals. We invite you to seize the opportunity to share what you know. Join us today and help students reach new heights of success.",
      image: "images/tutoring.jpeg",
      buttonname: "Get oppurtunity to teach here",
    },
    {
      title: "Company Ally",
      text: "We believe that our collaboration could be mutually beneficial for both of us. To provide you with detailed information, we encourage you to join us.We believe that transparency is key to building a successful partnership.",
      image: "images/companydealing.jpg",
      buttonname: "Become Company Ally",
    },
    {
      title: "Mentor Team",
      text: "As a mentor with our team, you will have the opportunity to guide and support the students.With your help, we can make our service more reachable. Join as mentor and make a difference in the lives of students.",
      image: "images/mentors.jpg",
      buttonname: "Apply Here",
    },
  ];

  return (
    <section className={classes.last_info}>
      <h2 className={classes.middle_heads_dark} id="roles">
        Roles For You
      </h2>
      <div className={classes.centerpara}>
        <p>
          <span style={{ color: "rgb(250, 196, 60)" }}>{companyName}</span> is
          an innovative web-based company that is dedicated to connecting
          students with qualified tutors and job seekers with fulfilling
          careers. With a mission to make education and career advancement
          accessible to everyone,{" "}
          <span style={{ color: "rgb(250, 196, 60)" }}>{companyName}</span> has
          created a platform that simplifies the process of finding tutors and
          jobs. By providing quality tutors and job opportunities, they empower
          individuals to achieve their goals and improve their lives
        </p>
      </div>
      <div className={classes.parentSlide}>
        <div ref={cardSliderRef} className={classes.opptrs4u} id="roles">
          {data.map((card, index) => (
            <RoleCard key={card.title} card={card}/>
          ))}
        </div>
      </div>
      <div className={classes.buttons}>
        <button className={classes.prev_button} onClick={() => handlePrev()}>
          &#10094;
        </button>
        <button className={classes.next_button} onClick={() => handleNext()}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
