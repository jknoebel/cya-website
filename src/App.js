import React from 'react';
import './App.css';

function App() {
  return (
        // < !--Wrapper -- >
        <div id="wrapper" class="divided">

            {/* <!-- Banner --> */}
            <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div class="content">
                    <h1>Cathedral Young Adults</h1>
                    <p class="major">Our mission is to call young adults to discipleship with Jesus Christ, to sanctify them
                    through formation in our community groups, and to send them out as disciples of Christ as we walk alongside them in
							Spiritual Accompaniment.</p>
                    <ul class="actions stacked">
                        <li>
                            <a href="#first" class="button large wide smooth-scroll-middle">Learn More</a>
                            <a href="#contact" class="button primary large wide smooth-scroll-middle">Join Now</a>
                        </li>
                    </ul>
                </div>
                <div class="image" id="banner-image-box">
                    <img id="banner-image" src="images/cya_group.jpg" alt="" />
                </div>
            </section>

            {/* <!-- One --> */}
            <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
                <div class="content">
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
                <div class="image">
                    <img src="images/stmarys_outside.jpg" alt="" />
                </div>
            </section>

            {/* <!-- Two --> */}
            <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                <div class="content">
                    <h2>Who We Welcome</h2>
                    <p>While the group is primarily made up of single Catholics in their 20s and 30s and events are geared toward
                    this demographic, anyone between the ages of 18-40 is welcome to join, including young married couples. Our members
                    cover the spectrum in their perspectives on the faith, but whether you are a devout Catholic or haven't been to
                                church in years, we will welcome you with open arms. </p>
                </div>
                <div class="image">
                    <img src="images/stmarys_inside.jpg" alt="" />
                </div>
            </section>

            {/* <!-- Form --> */}
            <section class="wrapper style1 align-center" id="contact">
                <div class="inner medium">
                    <h2>Get connected</h2>
                    Fill out the form below to keep up with everything going on in our group. <br/>
                        <div class="align-left" width="820px">
                            <form method="post" action="https://app.flocknote.com/group/369373/addToGroupFromOutside" target="_blank">
                                <div class="fields">
                                    <div class="field half">
                                        <input type="name" name="fname" placeholder="First Name" />
                                    </div>
                                    <div class="field half">
                                        <input type="name" name="lname" placeholder="Last Name" />
                                    </div>
                                    <div class="field half">
                                        <input type="email" name="email" placeholder="Email Address" />
                                    </div>
                                    <div class="field half">
                                        <input type="tel" name="mobile_phone" placeholder="Mobile Phone" />
                                    </div>
                                    <div class="field">
                                        <input type="checkbox" name="code_of_conduct" />
                                        <label for="code_of_conduct">
                                            I agree to the <a target="_blank"
                                                href="https://docs.google.com/document/d/1-NB4Bdusq8EdElQR4nSKkO9gXjpGOXFSdalEldRGimU/edit?usp=sharing">Code of Conduct</a>.
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" value="submit">Sign Me Up</button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* <!-- Footer --> */}
                <footer class="wrapper style1 align-center">
                        <div class="inner">
                            <ul class="icons">
                                {/* <!-- <li><a href="https://twitter.com/StMaryCYA" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li> --> */}
                                <li><a href="https://www.facebook.com/groups/stmaryyoungadults/" class="icon brands style2 fa-facebook-f"><span class="label">Facebook</span></a></li>
                                <li><a href="mailto:cathedralyoungadults@smcaustin.org" class="icon style2 fa-envelope"><span class="label">Email</span></a></li>
                                <li><a href="https://github.com/jknoebel/cya-website" class="icon brands style2 fa-github"><span class="label">Github</span></a></li>
                            </ul>
                            <p>&copy; St Mary Cathedral. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                        </div>
                    </footer>

			</div>
  );
}

export default App;
