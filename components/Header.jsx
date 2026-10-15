const links = [
  ["vision", "/vision.html", "nav_vision", "Vision"],
  ["what-we-do", "/what-we-do.html", "nav_do", "What we do"],
  ["founder", "/founder.html", "nav_founder", "Founder"],
  ["contact", "/contact.html", "nav_contact", "Contact"],
];

export default function Header({ active }) {
  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="/" aria-label="Komeza Peer Circle">
          <svg width="22" height="28" viewBox="0 0 22 28" aria-hidden="true">
            <path
              d="M11 2c-5 0-7 6-3 13l-6 11M11 2c5 0 7 6 3 13l6 11M8 15c2 3 4 3 6 0"
              stroke="var(--ribbon)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          Komeza
        </a>
        <div className="top-right">
          <nav aria-label="Main">
            <ul>
              {links.map(([key, href, translation, label]) => (
                <li key={key}>
                  <a
                    href={href}
                    data-i18n={translation}
                    aria-current={active === key ? "page" : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lang-switch" role="group" aria-label="Language / Ururimi">
            <button type="button" id="lang-en" data-lang="en" aria-pressed="true">
              English
            </button>
            <button type="button" id="lang-rw" data-lang="rw" aria-pressed="false">
              Kinyarwanda
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
