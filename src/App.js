import React, { useRef } from 'react';
// import './App.css';
import emailjs from '@emailjs/browser';
import './css/main.css';

function App() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        if(form.current.elements['groupme'].checked){
            emailjs.sendForm('default_service', 'template_nmf4x8v', form.current, 'RQIljlZoRi3Bq2GJv')
            .then((result) => {
                console.log("Sent email for groupme signup status: " + result.status + " content: " + result.text)
            }, (error) => {
                console.log(error)
            });
        }
      };
  return (
        // < !--Wrapper -- >
        <div id="wrapper" className="divided">

            {/* <!-- Banner --> */}
            <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div className="content">
                    <h1>Cathedral Young Adults</h1>
                    <p className="major">Our mission is to call young adults to discipleship with Jesus Christ, to sanctify them
                    through formation in our community groups, and to send them out as disciples of Christ as we walk alongside them in
							Spiritual Accompaniment.</p>
                  <ul className="actions" id="event-button-action">
                        <li><a href="/events" className="button fit large wide smooth-scroll-middle icon major fa-calendar-alt">See Upcoming Events</a></li>
                    </ul><ul className="actions">
                        <li><a href="#first" className="button large wide smooth-scroll-middle">Learn More</a></li>
                        <li><a href="#join" className="button primary large wide smooth-scroll-middle">Join Now</a></li>
                    </ul>
                </div>
                <div className="image" id="banner-image-box">
                    <img id="banner-image" src="images/cya_group.jpg" alt="" />
                </div>
            </section>

            {/* <!-- One --> */}
            <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
                <div className="content">
                    <h2>Our Vision</h2>
                    <p>We want to be a community where young adults in the city of Austin and particularly at the parish of St. Mary’s
                                Cathedral: </p>
                    <ul>
                        <li>encounter the Lord in the sacraments, interior prayer, and the community</li>
                        <li>choose to accept the invitation of Jesus Christ to be Intentional Disciples</li>
                        <li>form bonds of friendship and love that increase the joys and virtues of their lives</li>
                        <li>strive to become holy through participation in the sacraments, prayer, community, and formation</li>
                        <li>go out in service to the parish, the community, and the world</li>
                        <li>continue to call, encourage, and teach others to do the same.</li>
                    </ul>
                </div>
                <div className="image">
                    <img src="images/stmarys_outside.jpg" alt="" />
                </div>
            </section>

            {/* <!-- Two --> */}
            <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                <div className="content">
                    <h2>Who We Welcome</h2>
                    <p>While the group is primarily made up of single Catholics in their 20s and 30s and events are geared toward
                    this demographic, anyone between the ages of 18-40 is welcome to join, including young married couples. Our members
                    cover the spectrum in their perspectives on the faith, but whether you are a devout Catholic or haven't been to
                                church in years, we will welcome you with open arms. </p>
                </div>
                <div className="image">
                    <img src="images/stmarys_inside.jpg" alt="" />
                </div>
            </section>


            {/* <!-- Three --> */}
            <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="third">
                <div className="content">
                    <h2>Our Core Team</h2>
                    <p>The Cathedral Young Adults Core Team serves the CYA by providing foundational events and structure for the community. 
                        The team consists of Director, Coordinator, Human Pillar, Spiritual Pillar, Intellectual Pillar, Apostolic Pillar, Men's Liaison,
                        Women's Liaison, and Social Media Coordinator. Click below to learn how each of these roles serves the community and how to apply.
                    </p>
                    <a href="/core-team" className="button primary large wide smooth-scroll-middle icon major">Learn more</a>
                </div>
                <div className="image">
                    <img src="images/stmarys_stained_glass.jpg" alt="" />
                </div>
            </section>

            {/* <!-- Form --> */}
            <section className="wrapper style1 align-center" id="join">
                <div className="inner medium">
                    <h2>Get connected</h2>
                    Fill out the form below to keep up with everything going on in our group. <br/>
                        <div className="align-left" width="820px">
                            <form onSubmit={sendEmail} ref={form} method="post" action="https://app.flocknote.com/group/369373/addToGroupFromOutside" target="_blank" id="cya_signup">
                                <div className="fields">
                                    <div className="field half">
                                        <input type="name" name="fname" placeholder="First Name" required/>
                                    </div>
                                    <div className="field half">
                                        <input type="name" name="lname" placeholder="Last Name" required/>
                                    </div>
                                    <div className="field half">
                                        <input type="email" name="email" placeholder="Email Address" required/>
                                    </div>
                                    <div className="field half">
                                        <input type="tel" name="mobile_phone" placeholder="Mobile Phone" />
                                    </div>
                                    <div className="field">
                                        <input type="checkbox" id="code_of_conduct" name="code_of_conduct" required/>
                                        <label htmlFor="code_of_conduct">
                                      I agree to the <a target="_blank" rel="noopener noreferrer"
                                                href="https://docs.google.com/document/d/1-NB4Bdusq8EdElQR4nSKkO9gXjpGOXFSdalEldRGimU/edit?usp=sharing">Code of Conduct</a>.
                                        </label>
                                    </div>
                                    <div className="field">
                                        <input type="checkbox" id="groupme" name="groupme"/>
                                        <label htmlFor="groupme">
                                        Join our GroupMe (recommended) - This is our community board where you'll see all the latest CYA events and updates. </label>
                                    </div>
                                </div>
                                <button type="submit" value="submit">Sign Me Up</button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* <!-- Footer --> */}
                <footer className="wrapper style1 align-center">
                        <div className="inner">
                            <ul className="icons">
                                <li><a href="https://www.instagram.com/cya_atx/" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
                                <li><a href="https://www.facebook.com/groups/stmaryyoungadults/" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
                                <li><a href="mailto:cathedralyoungadults@smcaustin.org" className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
                                <li><a href="https://github.com/jknoebel/cya-website" className="icon brands style2 fa-github"><span className="label">Github</span></a></li>
                            </ul>
                            <p>&copy; St Mary Cathedral. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                        </div>
                    </footer>

			</div>
  );
}

export default App;
