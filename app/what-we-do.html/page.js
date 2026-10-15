import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { pageMetadata, StructuredData } from "../site-page";

export const metadata = pageMetadata("work");

export default function WhatWeDoPage() {
  return (
    <>
      <StructuredData pageKey="work" />
      <Header active="what-we-do" />
      <main id="top">
      <section className="block" style={{ borderTop: "0" }}>
        <div className="wrap">
          <p className="crumbs"><a href="/" data-i18n="crumb_home">Home</a> / <span aria-current="page">What we do</span></p>
          <span className="label" data-i18n="do_label">Our work</span>
          <h1 data-i18n="do_title">What we do</h1>
          <p className="lead" data-i18n="do_lead">What we do every week in Kanombe, Kigali — sharing experience, talking about health, and helping young women take part in community life again.</p>
          <div className="do-list">
            <div className="do-item">
              <div className="ic"><svg viewBox="0 0 24 24"><circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" /><path d="M2 20c1-4 4-5 6-5s5 1 6 5M12 20c1-3 2-5 4-5s4 1 5 5" /></svg></div>
              <div>
                <h2 data-i18n="do1_h">Weekly peer circle</h2>
                <p data-i18n="do1_p">Young women meet every week in the meeting room of the Kanombe Sector office (Kicukiro District) to share experiences and encourage each other.</p>
              </div>
            </div>
            <div className="do-item">
              <div className="ic"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z" /></svg></div>
              <div>
                <h2 data-i18n="do2_h">Open talk about HIV and health</h2>
                <p data-i18n="do2_p">Honest conversations about HIV, staying healthy and living well, without judgement.</p>
              </div>
            </div>
            <div className="do-item">
              <div className="ic"><svg viewBox="0 0 24 24"><path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z" /></svg></div>
              <div>
                <h2 data-i18n="do3_h">Mental well-being</h2>
                <p data-i18n="do3_p">Time and space to talk about stress, fear and feelings, and to support each other through them.</p>
              </div>
            </div>
            <div className="do-item">
              <div className="ic"><svg viewBox="0 0 24 24"><path d="M4 12h16M12 4v16" /><circle cx="12" cy="12" r="9" /></svg></div>
              <div>
                <h2 data-i18n="do4_h">Ending stigma</h2>
                <p data-i18n="do4_p">Helping members who had withdrawn take part again in community activities, with confidence.</p>
              </div>
            </div>
          </div>

          <div className="session">
            <dl>
              <dt data-i18n="s_who">Who can join</dt><dd data-i18n="s_who_v">Young women in our community, whatever their HIV status</dd>
              <dt data-i18n="s_often">How often</dt><dd data-i18n="s_often_v">Once a week</dd>
              <dt data-i18n="s_where">Where</dt><dd data-i18n="s_where_v">Meeting room at the Kanombe Sector office, Kicukiro</dd>
              <dt data-i18n="s_start">Started</dt><dd data-i18n="s_start_v">September 2025</dd>
              <dt data-i18n="s_reach">Young women reached</dt><dd data-i18n="s_reach_v">15 (September 2025 – March 2026)</dd>
              <dt data-i18n="s_cost">Cost</dt><dd data-i18n="s_cost_v">Free</dd>
              <dt data-i18n="s_priv">Privacy</dt><dd data-i18n="s_priv_v">What is shared in the circle stays in the circle</dd>
            </dl>
          </div>

          <div className="values">
            <span><b>·</b><span data-i18n="v1">Confidentiality</span></span>
            <span><b>·</b><span data-i18n="v2">Respect</span></span>
            <span><b>·</b><span data-i18n="v3">Belonging</span></span>
            <span><b>·</b><span data-i18n="v4">Hope</span></span>
          </div>

          <p style={{ marginTop: "28px" }}><a className="btn" href="/contact.html" data-i18n="btn_join">Join the circle</a></p>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
