import React, { useState, useRef } from "react";
import classes from "../homepage_compos/homepageStyles.module.css";
import RoleCard from "./RoleCard";

export default function CaptionCarousel() {
  let companyName = "Inspiring Go";

  const cardSliderRef = useRef(null);

  const data = [
    {
      title: "JobSeeker",
      text: "Are you jobseeker who's in need of a placement ? Our platform offers every job listings. We believe you deserves access to the information they need to make carrer decisions and obviuosly succeed.",
      image: "images/jobseeker_womensmile.jpg",
      buttonname: "Join Now",
    },
    {
      title: "Company Ally",
      text: "We believe that our collaboration could be mutually beneficial for both of us.To provide you with detailed information, we encourage you to join us. Transparency is key to building a successful partnership.",
      image: "images/companydealing.jpg",
      buttonname: "Become Company Ally",
    },
    {
      title: "Mentor Team",
      text: "As a mentor with our team, you will have the opportunity to guide and support the students. With your help, we can make our service more reachable. Join as mentor and make a difference in the lives of students.",
      image: "images/mentors.jpg",
      buttonname: "Apply Here",
    },
  ];

  return (
    <section className={"p-6 pt-10"}>
      <h2 className={classes.middle_heads_dark} id="roles">
        Roles For You
      </h2>
      <div className={classes.centerpara}>
        <p>
          <span style={{ fontWeight: 600 }}>{companyName}</span> is an
          innovative web-based company that is dedicated to connecting students
          with qualified tutors and job seekers with fulfilling careers. With a
          mission to make education and career advancement accessible to
          everyone, <span style={{ fontWeight: 600 }}>{companyName}</span> has
          created a platform that simplifies the process of finding tutors and
          jobs. By providing quality tutors and job opportunities, they empower
          individuals to achieve their goals and improve their lives
        </p>
      </div>
      <div ref={cardSliderRef} className={classes.opptrs4u} id="roles">
        {data.map((card, index) => (
          <RoleCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
