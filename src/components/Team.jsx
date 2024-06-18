/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useEffect } from 'react'
import tilkesh from '../assets/TeamImg/tilkesh.webp'
import mohit from '../assets/TeamImg/mohit.webp'
import sourabh from '../assets/TeamImg/sourabh.webp'
import anuj from '../assets/TeamImg/anuj.webp'
// import Deep from '../assets/TeamImg/Deep1.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Team.css'
const Team = () => {
  useEffect(()=>{
    AOS.init(
      {
        duration:"700",
        delay:"300"
      }
    );
},[])
  return (
    <div className='Team' >
      <h1 className='team_heading_size' data-aos="zoom-in-down">Meet Our Co-Founders </h1>
      <p className=' team-sub-head' data-aos="zoom-in-down" style={{color:"black"}}>
        We believe in the power of collaboration, innovation, and
        customer-centricity. Get to know the faces behind the scenes who make it all
        possible.      </p>
      <div className='team_profile'>


        <article className='teamtrycard' data-aos="zoom-in-down">
          <div className="teamtrycard__inner">
            <div className="teamtrycard__body teamtrycard__body--front">
              <img src={tilkesh} alt="John Smith" className="team-member-photo" />
              <h4 className="team-member-name">Tilkesh Bhatia</h4>
              <p className="team-member-title">Director</p>
            </div>
            <div className="teamtrycard__body teamtrycard__body--back">
              <p className="team-member-description">
                Bringing forth the best possible results to clients through
                innovative ideas defines Tilkesh Bhatia. An M. Tech. from the prestigious IIT
                BHU and a former investment banker with an overall experience of ten years,
                he has been instrumental in unlocking unique possibilities for a sustainable
                future and lasting change. A numbers guy, Tilkesh is responsible for the
                company’s finance portfolio, which also includes risk management, internal
                audit as well as investor relations. Tilkesh believes in achieving meaningful
                progress by offering world-class services and integrated solutions through
                robust and seamless internal processes.
              </p>
            </div>
          </div>
        </article>
        <article className='teamtrycard' data-aos="zoom-in-down">
          <div className="teamtrycard__inner">
            <div className="teamtrycard__body teamtrycard__body--front">
              <img src={sourabh} alt="John Smith" className="team-member-photo" />
              <h4 className="team-member-name">Sourabh Khandelwal</h4>
              <p className="team-member-title">Director</p>
            </div>
            <div className="teamtrycard__body teamtrycard__body--back">
              <p className="team-member-description">
                Sourabh has successfully fostered the marketing and
                creative side of the business to achieve demonstrable results. His passion for
                bringing a global perspective to brand building and advertising can be seen in
                the marketing efforts that are put by E-Savari to make that change and
                innovation visible. With more than nine years of experience in sales and
                marketing, Sourabh is a graduate in B.Tech from the well-known Technocrats
                Institute of Technology and is responsible for E-Savari’s accelerated growth in
                the markets it is present in through his creative efforts and advertising &
                communications acumen.              </p>
            </div>
          </div>
        </article>

        <article className='teamtrycard' data-aos="zoom-in-down">
          <div className="teamtrycard__inner">
            <div className="teamtrycard__body teamtrycard__body--front">
              <img src={anuj} alt="John Smith" className="team-member-photo" />
              <h4 className="team-member-name">Anuj Jain</h4>
              <p className="team-member-title">Director</p>
            </div>
            <div className="teamtrycard__body teamtrycard__body--back">
              <p className="team-member-description">
                As someone who has over the years specialized in the nuances of
                IoT, Anuj is the go-to man when it comes to technological innovation, product
                research and development, and technical know-how of e-vehicles. An M. Tech.
                from the coveted Maulana Azad National Institute of Technology (MANIT),
                Anuj has a deep understanding of analytics, is a strategic and
                transformational leader who looks forward to taking challenges, and is
                conditioned to adapt to the ever-changing EV industry, which is growing both
                in numbers as well as technological advancements by the day. With more than
                four years of EV experience, Anuj is credited with establishing the electric 3W
                market in Madhya Pradesh for E-Savari and looks to stretch the business
                model beyond state boundaries in the foreseeable future.       </p>
            </div>
          </div>
        </article>



        <article className='teamtrycard' data-aos="zoom-in-down">
          <div className="teamtrycard__inner">
            <div className="teamtrycard__body teamtrycard__body--front">
              <img src={mohit} alt="John Smith" className="team-member-photo" />
              <h4 className="team-member-name">Mohit Kumar</h4>
              <p className="team-member-title">Director</p>
            </div>
            <div className="teamtrycard__body teamtrycard__body--back">
              <p className="team-member-description">
                With more than four years of experience in the automobile
                vertical, Mohit, a Law graduate, has a knack for people management. Right
                from contributing towards sales, he looks into the legal framework of the
                business too and is also responsible for the day-to-day operations of E-Savari.
                Selling a whopping 2500 E3W vehicle is a testimony to his sales competence.
                Besides, the Purchase of e-vehicles also falls under his gamut, and no wonder
                he has been in the thick of things with the company getting into an expansion
                mode now. While providing continued business support, Mohit also looks into
                talent optimization, talent retention, and ensures to manage the resources to
                the best of their efficiency.
              </p>
            </div>
          </div>
        </article>


      </div>

      {  /* <p>
        We have some open position on our team! <span style={{ color: 'blue', cursor: 'pointer' }}> View Open Position</span>
   </p>*/}
    </div>
  )
}

export default Team