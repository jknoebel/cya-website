import React from 'react';
import Content from './content/core-team.yml'

function CoreTeam() {
  return (
        //  < !--Wrapper -- >
    <div id="wrapper" className="divided">
        <section className="wrapper style1 align-center">
            <h2>{Content.Banner.title}</h2>
            <p>{Content.Banner.body}</p>
            <div className="items style1 medium onscroll-fade-in" id="roles">
            { Content.Roles.map(function(role_row) {    
                return (
                    role_row.map(function(role) {
                        return (
                            <section><div className="inner">
                            <span className={`icon solid style2 major fa-${role.icon}`}></span>
                            <h3 className="role">{role.name}</h3>
                            <p>{role.body}<br/>{role.members}</p>
                            </div></section>
                        )
                    })
                )
            })}
            </div>
        </section>
        {/* <!-- Form --> */}
        <section className="wrapper style1 align-center" id="apply">
            <div className="inner">
                <h2>{Content.Apply.title}</h2>
                {Content.Apply.body}<p/>
                <ul className="actions" id="apply_buttons">
                { Content.Apply.Buttons[0].visible &&
                    <li><a href={Content.Apply.Buttons[0].path} target="_blank" className="button large wide smooth-scroll-middle">{Content.Apply.Buttons[0].text}</a></li>
                }
                { Content.Apply.Buttons[1].visible &&
                    <li><a href={Content.Apply.Buttons[1].path} target="_blank" className="button primary large wide smooth-scroll-middle">{Content.Apply.Buttons[1].text}</a></li>
                }
                </ul>
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

export default CoreTeam;
