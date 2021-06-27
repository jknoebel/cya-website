import React from 'react';
import Content from './content/index.yml'
import Link from 'next/link'

function App() {
  return (
        // < !--Wrapper -- >
        <div id="wrapper" className="divided">

            {/* <!-- Banner --> */}
            <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div className="content">
                    <h1>{Content.Banner.Title}</h1>
                    <p className="major">{Content.Banner.Body}</p>
                  <ul className="actions" id="event-button-action">
                        <li><Link href="/events"><a className="button fit large wide smooth-scroll-middle icon major fa-calendar-alt">{Content.Banner.Button.Event}</a></Link></li>
                    </ul><ul className="actions">
                        <li><a href="#first" className="button large wide smooth-scroll-middle">{Content.Banner.Button.Learn}</a></li>
                        <li><a href="#join" className="button primary large wide smooth-scroll-middle">{Content.Banner.Button.Join}</a></li>
                    </ul>
                </div>
                <div className="image" id="banner-image-box">
                    <img id="banner-image" src="images/cya_group.jpg" alt="" />
                </div>
            </section>

            { Content.Section.map(function(section) {
                return (
                    <section className={`spotlight style1 orient-${section.Orient} content-align-left image-position-center onscroll-image-fade-in`} id="first">
                        <div className="content">
                            <h2>{section.Title}</h2>
                            <p>{section.Body} </p>
                            { section.List && 
                            <ul>
                            { section.List.map(function(element) {
                                return (<li>{element}</li>)
                            })}  
                            </ul>
                            }
                        { section.Button && 
                            <Link href={section.Button.path}><a className="button primary large wide smooth-scroll-middle icon major">{section.Button.text}</a></Link>
                        }
                        </div>
                        <div className="image">
                            <img src={section.Image} alt="" />
                        </div>
                    </section>
                )
            })}

            {/* <!-- Form --> */}
            <section className="wrapper style1 align-center" id="join">
                <div className="inner medium">
                    <h2>{Content.Form.Title}</h2>
                    {Content.Form.Body} <br/>
                        <div className="align-left" width="820px">
                            <form method="post" action="https://app.flocknote.com/group/369373/addToGroupFromOutside" target="_blank" id="cya_signup">
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
                                </div>
                                <button type="submit" value="submit">{Content.Form.Button}</button>
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
