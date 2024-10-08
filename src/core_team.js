import React from 'react';
import './css/main.css';
import './css/core_team.css'

function CoreTeam() {
  return (
        //  < !--Wrapper -- >
    <div id="wrapper" className="divided">
        <section className="wrapper style1 align-center">
            <h2>CYA Leadership Team</h2>
            <p>The Cathedral Young Adults Core Team serves the CYA by providing foundational events and structure for the community. </p>
            <div className="items style1 medium onscroll-fade-in" id="roles">
                <section><div className="inner">
                    <span className="icon solid style2 major fa-sitemap"></span>
                    <h3 className="role">Director</h3>
                    <p>
                        The Director plans overall goals and vision of CYA and leads CYA core team. She works with the Coordinator and the priests
                        to cultivate mission and organize Pillars. She organizes and runs the core team meetings.
                        She should have these gifts/qualities: organization, zeal for souls, administration, pastor, wisdom, creativity, decisive
                        <br/>Current Director: Tianna Chorba
                    </p>
                </div></section>
                <section ><div className="inner">
                    <span className="icon solid style2 major fa-clipboard"></span>
                    <h3 className="role">Coordinator</h3>
                    <p>
                    The Coordinator works with the Director and the priests to execute vision and organize Pillars, providing support as needed.
                    He provides a practical perspective to Director for decision making. He manages the CYA schedule and new member flow. 
                    He owns the CYA email and does administration for the CYA online community.
                    He should have these gifts/qualities: administration, organization, reliable, responsible, diligent, detail-oriented, (tech-savvy)
                    <br/>Current Coordinator: Alexander Goessler
                    </p>
                </div></section>
                <section><div className="inner">
                    <span className="icon solid style2 major fa-lightbulb"></span>
                    <h3 className="role">Intellectual Pillar</h3>
                    <p>
                    The Intellectual Pillar organizes group studies and events for intellectual formation, studying books,
                    Liturgical themes, and theology. They may coordinate speaker events on Church teachings. They should help
                    create an environment for virtuous friendships to form within the community.
                    They should have these gifts/qualities: enthusiasm for Catholic intellectual formation and virtues, desire to model virtuous friendships, 
                    long-term planning, experience leading small group discussions
                    <br/>Current Members: Qui Ton
                    </p>
                </div></section>
                <section><div className="inner">
                    <span className="icon solid style2 major fa-users"></span>
                    <h3 className="role">Human Pillar</h3>
                    <p>
                    The Human Pillar organizes social events, such as coffee and donuts after Mass or whole-community outdoors events.
                    They seek out new faces at events and plug them into the group.
                    They should have these gifts/qualities: hospitality, zeal for souls, faith, boldness, charismatic, mercy
                    <br/>Current Members: Joseph McConnell, Emily Mauer, Kevin Nguyen
                    </p>
                </div></section>
                <section><div className="inner">
                    <span className="icon solid style2 major fa-place-of-worship"></span>
                    <h3 className="role">Spiritual Pillar</h3>
                    <p>
                    The Spiritual Pillar organizes spiritual events for the community, especially Adoration, both scheduling and music.
                    They may potentially coordinate retreats for the CYA with Director/Coordinator.
                    They should have these gifts/qualities: enthusiasm for Sacraments and prayer, understanding and appreciation of Liturgy
                    <br/>Current Member: Georges Alsankary
                    </p>
                </div></section>
                <section><div className="inner">
                    <span className="icon solid style2 major fa-hand-holding-heart"></span>
                    <h3 className="role">Apostolic Pillar</h3>
                    <p>
                    The Apostolic Pillar organizes CYA outreach and volunteering both within and outside of the parish (Parent’s Night Out, service events/drives).
                    They also encourage connect CYA members to service commitments within the parish to deliver Communion, to serve in the Mass, etc.
                    They should have these gifts/qualities: zeal for souls, organization/administration, love of service
                    <br/>Current Members: Nicole Chorba, Patrick Reed
                    </p>
                </div></section>
                <section><div className="inner">
                    <span className="icon regular style2 major fa-handshake"></span>
                    <h3 className="role">Welcome Committee</h3>
                    <p>
                    Welcome Committee consists of one male and one female leader. 
                    They lead the efforts to welcome new members into the CYA community.
                    Their focus should be on inviting the new members to CYA and parish events as well as coordinating the quarterly welcome events. 
                    They should have these gifts/qualities: zeal for souls, hospitality, friendliness
                    <br/>Current Members: Sam Burks, Ashley Krus
                    </p>
                </div></section>
                <section><div className="inner">
                    <span className="icon solid style2 major brands fa-instagram"></span>
                    <h3 className="role">Social Media Coordinator</h3>
                    <p>
                    The Social Media Coordinator is responsible for creating and sharing media on our platforms. 
                    She should create and share graphics for events from the pillars on social media, with help from the respective pillar
                    She is also the first responder to inquiries through social media, especially important for new members.
                    She should have these gifts/qualities: creativity, social media savvy, responsible, welcoming
                    <br/>Current Coordinator: Charlotte Lannon
                    </p>
                </div></section>
            </div>
        </section>
        {/* <!-- Form --> */}
        <section className="wrapper style1 align-center" id="apply">
            <div className="inner">
                <h2>Interested in Serving on the Core Team?</h2>
                Click below to submit an application to join<p/>
                <ul className="actions" id="apply_buttons">
                    <li><a href="https://forms.gle/eRj6q1AoKUxiHVnx6" target="_blank" className="button primary large wide smooth-scroll-middle">Apply Now</a></li>
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
