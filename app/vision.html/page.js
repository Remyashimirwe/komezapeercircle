import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { pageMetadata, StructuredData } from "../site-page";

export const metadata = pageMetadata("vision");

export default function VisionPage() {
  return (
    <>
      <StructuredData pageKey="vision" />
      <Header active="vision" />
      <main id="top">
      <section className="block" style={{ borderTop: "0" }}>
        <div className="wrap">
          <p className="crumbs"><a href="/" data-i18n="crumb_home">Home</a> / <span aria-current="page">Vision</span></p>
          <span className="label" data-i18n="vis_label">Why we exist</span>
          <h1 data-i18n="vis_title">Vision and mission</h1>
          <p className="lead" data-i18n="vis_lead">What Komeza Peer Circle stands for, and how it began in Kanombe.</p>
          <div className="vm">
            <div>
              <h2 data-i18n="vis_h">Our vision</h2>
              <p data-i18n="vis_p">A community where every young woman, whatever her HIV status, lives openly, healthily and with dignity, as a full part of community life.</p>
            </div>
            <div>
              <h2 data-i18n="mis_h">Our mission</h2>
              <p data-i18n="mis_p">To create a safe, confidential space where young women can talk honestly about HIV, health and well-being, support one another, and return to community life free of stigma.</p>
            </div>
          </div>
          <div className="prose" style={{ marginTop: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "10px" }} data-i18n="story_h">How it started</h2>
            <p data-i18n="story_p1">In our community, some young girls living with HIV were isolating themselves and missing community activities because of fear and stigma. Nobody was talking about it.</p>
            <p data-i18n="story_p2">UMULINGA G Jolly started a peer wellness group so they would have a place to talk, be heard and support each other. In September 2025, with the support of the Kanombe Sector office, which provided a meeting room, the group began meeting every week. By March 2026, 15 young women had taken part.</p>
          </div>
          <p style={{ marginTop: "28px" }}><a className="btn ghost" href="/what-we-do.html" data-i18n="card_do_h">What we do</a></p>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
