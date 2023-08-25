

const Aboutus = () => {
    return (
    
    
     <div>
      <header>
        {/* Include the content of 'partials/navbar' here */}
      </header>

      <div className="aboutus">
        <h1>About Inspiring Go</h1>
        <p>
          <span className="symbol">&#9755;</span>Your success is our top priority
          <span className="symbol">&#9754;</span>
        </p>
      </div>

      <div
        style={{
          backgroundImage: "url('resources/backgrounddiv.jpg')",
          margin: '14px',
          borderRadius: '20px',
        }}
      >
        <div className="headingstory">
          <div>
            <h2 style={{ textAlign: 'justify', color: '#0a0a5a', fontSize: '50px', paddingLeft: '6%', paddingTop: '6%' }}>Our Story</h2>
          </div>

          <p>
            Welcome to Inspiringo! We are a leading consultancy company dedicated to helping students reach their academic and professional goals. Our team of experienced tutors specialize in providing top-notch tutoring and coaching services for competitive exams.
            At Inspiringo, we understand the importance of preparing for competitive exams and have developed a comprehensive tutoring and coaching program to help students succeed. Our tutors are highly knowledgeable and experienced in the areas of math, science, English, and social studies, and they will work with you to develop an individualized plan to help you reach your goals.
            We also offer a variety of other services, including essay writing and career counseling. Our tutors are dedicated to helping students achieve their dreams and will work with you to identify your strengths and weaknesses, develop strategies for success, and provide necessary guidance and support along the way.
            We are committed to delivering the highest quality of service and we strive to make our tutoring experience as enjoyable and beneficial as possible. Our team is here to help you succeed and we are confident that you will find our services to be valuable and effective. Thank you for choosing Inspiringo for your tutoring needs.
          </p>
        </div>
      </div>

      <div className="storycard-container">
        <div className="storycard" style={{ backgroundColor: '#C9EEFF' }}>
          <img src="/resources/work.png" alt="Card Image" />
          <p>Best Work Efforts</p>
        </div> 

        <div className="storycard" style={{ backgroundColor: '#efe92d' }}>
          <img src="/resources/tutor.png" alt="Card Image" />
          <p>Providing Best Tutors</p>
        </div>

        <div className="storycard" style={{ backgroundColor: 'aqua' }}>
          <img src="/resources/tutor.png" alt="Card Image" />
          <p>25+ years experience</p>
        </div>

        <div className="storycard" style={{ backgroundColor: '#00AFBC' }}>
          <img src="/resources/educator.png" alt="Card Image" />
          <p>Best Place to Newbies</p>
        </div>
      </div>

      <div style={{ backgroundImage: "url('resources/backgrounddiv.jpg')", margin: '14px', borderRadius: '20px' }}>
        <div>
          <h2 style={{ color: '#0a0a5a', textAlign: 'center', fontSize: '50px', margin: '80px 0px 40px 0px', paddingTop: '3%' }}>What makes us different</h2>
        </div>

 </div>
</div>

)};




     
  export default Aboutus