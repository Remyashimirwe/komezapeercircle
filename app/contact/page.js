import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { pageMetadata, StructuredData } from "../site-page";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <StructuredData pageKey="contact" />
      <Header active="contact" />
      <main id="top">
      <section className="block" style={{ borderTop: "0" }}>
        <div className="wrap">
          <p className="crumbs"><a href="/" data-i18n="crumb_home">Home</a> / <span aria-current="page">Contact</span></p>
          <span className="label" data-i18n="c_label">Get involved</span>
          <h1 data-i18n="c_title">Join, volunteer or partner with us</h1>
          <p className="lead" data-i18n="c_p1">If you are a young woman who would like to join, or a health worker, leader or organisation who would like to support the circle, please get in touch.</p>
          <div className="contact" style={{ marginTop: "28px" }}>
            <div>
              <span className="label" data-i18n="c_label">Get involved</span>
              <h2 style={{ marginBlock: "10px 16px" }} data-i18n="c_title">Join, volunteer or partner with us</h2>
              <p data-i18n="c_p2">Every conversation is kept confidential.</p>
            </div>
            <ul>
              <li><span data-i18n="c_phone">Phone</span><strong><a href="tel:+250784337672">+250 784 337 672</a></strong></li>
              <li><span data-i18n="c_loc">Location</span><strong data-i18n="c_loc_v">Kanombe Sector, Kicukiro District, Kigali, Rwanda</strong></li>
              <li><span data-i18n="c_hours">Meets</span><strong data-i18n="s_often_v">Once a week</strong></li>
              <li><span data-i18n="s_cost">Cost</span><strong data-i18n="s_cost_v">Free</strong></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
