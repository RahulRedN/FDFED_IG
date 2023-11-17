
import '../Styles/Faqs.css';
import faqsData from '../Public/faqsData';

const Faqs = () => {
  return (
    <div className='box'>
      <div className="box-content">
        <p className="heading">Frequently asked questions</p>
        
        <div className="faqs">
          {faqsData.map((faq, index) => (
            <div key={faq.id}>
              <details className='faq-details'>
                <summary>{faq.Faq_Que}</summary>
                <p className="text">{faq.Faq_Ans}</p>
              </details>
              {index < faqsData.length - 1 && <hr className="faq-divider" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
