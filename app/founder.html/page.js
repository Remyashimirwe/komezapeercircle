import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { pageMetadata, StructuredData } from "../site-page";

export const metadata = pageMetadata("founder");

export default function FounderPage() {
  return (
    <>
      <StructuredData pageKey="founder" />
      <Header active="founder" />
      <main id="top">
      <section className="block" style={{ borderTop: "0" }}>
        <div className="wrap founder">
          <img className="portrait" alt="UMULINGA G Jolly, founder of Komeza Peer Circle" width="560" height="700"
            src="/founder.jpg" />
          <div className="prose">
            <p className="crumbs"><a href="/" data-i18n="crumb_home">Home</a> / <span aria-current="page">Founder</span></p>
            <span className="label" data-i18n="f_label">Founder</span>
            <h1 data-i18n="f_title">UMULINGA G Jolly</h1>
            <p className="lead" data-i18n="f_lead">Founder of Komeza Peer Circle, after finishing her studies in 2025.</p>
            <p data-i18n="f_p1">Jolly founded Komeza Peer Circle after finishing her studies in 2025. She is passionate about community health education and about ending the stigma around HIV, so that no young woman has to face it alone.</p>
            <p data-i18n="f_p2">She plans to keep growing the circle and to bring this model of peer support to more communities across Rwanda.</p>
            <p style={{ marginTop: "20px" }}><a className="btn ghost" href="/contact.html" data-i18n="nav_contact">Contact</a></p>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
