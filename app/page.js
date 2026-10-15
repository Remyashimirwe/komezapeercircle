import Header from "../components/Header";
import Footer from "../components/Footer";
import { pageMetadata, StructuredData } from "./site-page";

export const metadata = pageMetadata("home");

export default function HomePage() {
  return (
    <>
      <StructuredData pageKey="home" />
      <Header active="home" />
      <main id="top">
      <div className="wrap hero">
        <div>
          <span className="label" data-i18n="hero_label">HIV awareness &amp; peer support · Kanombe, Kigali</span>
          <h1 data-i18n="hero_title">A safe circle where young women <em>speak openly</em> and belong again.</h1>
          <p className="lead" data-i18n="hero_lead">Komeza Peer Circle brings young women together, including young women living with HIV, to talk freely about health, support each other, and end the stigma that keeps people apart.</p>
          <p className="kiny" data-i18n="hero_kiny">“Komeza” means keep going.</p>
          <p style={{ marginTop: "24px" }}>
            <a className="btn" href="/contact" data-i18n="btn_join">Join the circle</a>
            <a className="btn ghost" href="/what-we-do" data-i18n="nav_do">What we do</a>
          </p>
        </div>
        <div className="ribbon-art" aria-hidden="true">
          <svg viewBox="0 0 240 300">
            <circle cx="120" cy="140" r="112" fill="var(--ribbon-soft)" />
            <path className="draw"
              d="M120 40c-38 0-52 46-22 104L52 252M120 40c38 0 52 46 22 104l46 108M98 144c14 22 30 22 44 0"
              stroke="var(--ribbon)" strokeWidth="20" fill="none" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <span className="label" data-i18n="intro_label">Welcome</span>
          <h2 data-i18n="intro_title">Welcome to Komeza Peer Circle</h2>
          <div className="prose">
            <p data-i18n="intro_p">Komeza Peer Circle is a free, confidential group that meets every week in Kanombe Sector, Kigali. Young women — whatever their HIV status — talk openly about health and well-being, support one another, and help end stigma in our community.</p>
          </div>
          <div className="cards">
            <a className="card" href="/vision">
              <h2 data-i18n="card_vision_h">Vision &amp; mission</h2>
              <p data-i18n="card_vision_p">Why we exist and what we are working towards.</p>
              <span className="arrow" data-i18n="card_more">Learn more →</span>
            </a>
            <a className="card" href="/what-we-do">
              <h2 data-i18n="card_do_h">What we do</h2>
              <p data-i18n="card_do_p">The weekly circle, open talk, mental well-being and ending stigma.</p>
              <span className="arrow" data-i18n="card_more">Learn more →</span>
            </a>
            <a className="card" href="/founder">
              <h2 data-i18n="card_founder_h">Our founder</h2>
              <p data-i18n="card_founder_p">Meet UMULINGA G Jolly and why she started the circle.</p>
              <span className="arrow" data-i18n="card_more">Learn more →</span>
            </a>
            <a className="card" href="/contact">
              <h2 data-i18n="card_contact_h">Contact us</h2>
              <p data-i18n="card_contact_p">Join, volunteer or partner with the circle.</p>
              <span className="arrow" data-i18n="card_more">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="contact">
            <div>
              <span className="label" data-i18n="cta_label">Get in touch</span>
              <h2 style={{ marginBlock: "10px 16px" }} data-i18n="cta_title">Have a question? Talk to us.</h2>
              <p data-i18n="cta_p">We welcome enquiries from young women who want to join, and from health workers, leaders and organisations who want to support the circle.</p>
            </div>
            <ul>
              <li><span data-i18n="c_phone">Phone</span><strong><a href="tel:+250784337672">+250 784 337 672</a></strong></li>
              <li><span data-i18n="c_loc">Location</span><strong data-i18n="c_loc_v">Kanombe Sector, Kicukiro District, Kigali, Rwanda</strong></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
