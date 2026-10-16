/* Language switcher. English is read from the page markup at load time;
   Kinyarwanda comes from the dictionary below. Shared by every page. */
(function () {
  var RW = {
    nav_vision: "Icyerekezo",
    nav_do: "Ibyo dukora",
    nav_founder: "Uwashinze",
    nav_contact: "Twandikire",
    hero_label: "Ubukangurambaga kuri SIDA n'ubufashanye · Kanombe, Kigali",
    hero_title:
      "Ahantu hatekanye abakobwa bakiri bato <em>bavugira mu bwisanzure</em>, bakongera kwisanga mu muryango.",
    hero_lead:
      "Komeza Peer Circle ihuza abakobwa n'abagore bakiri bato, barimo n'abafite virusi itera SIDA, kugira ngo baganire mu bwisanzure ku buzima, bafashanye, kandi barwanye akato gatuma abantu bitandukanya.",
    hero_kiny: "Komeza, ntucike intege.",
    btn_join: "Injira mu itsinda",
    crumb_home: "Ahabanza",
    cta_label: "Tuandikire",
    vis_lead:
      "Icyo Komeza Peer Circle igaragaza, n'uko ryatangiye muri Kanombe.",
    intro_label: "Murakaza neza",
    intro_title: "Murakaza neza muri Komeza Peer Circle",
    intro_p:
      "Komeza Peer Circle ni itsinda ry'ubuntu, rihura buri cyumweru mu Umurenge wa Kanombe, Kigali. Abakobwa n'abagore bakiri bato, uko baba bahagaze kose ku bijyanye na virusi itera SIDA, baganira mu bwisanzure ku buzima n'imibereho myiza, bagafashanya, kandi barwanyisa akato mu muryango wacu.",
    cta_title: "Ufite ubugeni? Twandikire.",
    cta_p:
      "Dushimira abashakashatsi n'abatanga umugisha. Twandikire uwagira ikibazo cyangwa ufise ubugeni bwo gutsindikira ubujyanama.",
    card_vision_h: "Icyerekezo n'intego",
    card_vision_p: "Icyatumye twashyirwaho n'icyo twiteguye kugera.",
    card_do_h: "Ibyo dukora",
    card_do_p: "Guhura buri cyumweru, kuganira mu bwisanzure, no kurwanya akato.",
    card_founder_h: "Uwashinze",
    card_founder_p: "Menya UMULINGA G Jolly n'icyatumye yatangije itsinda.",
    card_contact_h: "Twandikire",
    card_contact_p: "Injira, witange cyangwa ufatanye natwe.",
    card_more: "Menya byinshi",
    vis_label: "Icyo tugamije",
    vis_title: "Icyerekezo n'intego",
    vis_h: "Icyerekezo cyacu",
    vis_p:
      "Umuryango aho buri mukobwa n'umugore ukiri muto, uko yaba ahagaze kose ku bijyanye na virusi itera SIDA, abaho mu bwisanzure, afite ubuzima bwiza n'agaciro, kandi ari umwe mu bagize umuryango byuzuye.",
    mis_h: "Intego yacu",
    mis_p:
      "Gushyiraho ahantu hatekanye kandi hubahiriza ibanga, aho abakobwa n'abagore bakiri bato baganira bisanzuye ku bijyanye na virusi itera SIDA, ubuzima n'imibereho myiza, bagafashanya, kandi bagasubira mu buzima bw'umuryango nta kato.",
    story_h: "Uko byatangiye",
    story_p1:
      "Mu muryango wacu, bamwe mu bakobwa bakiri bato bafite virusi itera SIDA bari barigunze, batacyitabira ibikorwa by'umuryango kubera ubwoba n'akato. Nta muntu wabivugagaho.",
    story_p2:
      "UMULINGA G Jolly yatangije itsinda ry'ubufashanye kugira ngo babone aho baganirira, bumvwe kandi bafashanye. Muri Nzeri 2025, ku bufatanye n'Ibiro by'Umurenge wa Kanombe, byatanze icyumba cy'inama, itsinda ryatangiye guhura buri cyumweru. Kugeza muri Werurwe 2026, abakobwa n'abagore bakiri bato 15 bari bamaze kwitabira.",
    do_label: "Ibikorwa byacu",
    do_title: "Ibyo dukora",
    do_lead:
      "Ibyo dukora buri cyumweru mu Kanombe, Kigali: gusangira uburambe, kuganira ku buzima, no gufashanya abagore bakiri bato kongera kwitabira umuryango.",
    do1_h: "Guhura buri cyumweru",
    do1_p:
      "Abakobwa n'abagore bakiri bato bahurira buri cyumweru mu cyumba cy'inama cy'Ibiro by'Umurenge wa Kanombe (Akarere ka Kicukiro), bakaganira ku byo banyuzemo kandi bagaterana inkunga.",
    do2_h: "Kuganira mu bwisanzure kuri SIDA n'ubuzima",
    do2_p:
      "Ibiganiro bivugisha ukuri ku bijyanye na virusi itera SIDA, uko umuntu yakomeza kugira ubuzima bwiza no kubaho neza, nta guca imanza.",
    do3_h: "Ubuzima bwo mu mutwe",
    do3_p:
      "Igihe n'umwanya wo kuganira ku muhangayiko, ubwoba n'amarangamutima, no gufashanya kubinyuramo.",
    do4_h: "Kurwanya akato",
    do4_p:
      "Gufasha abanyamuryango bari barigunze kongera kwitabira ibikorwa by'umuryango bafite icyizere.",
    s_who: "Abemerewe kwinjira",
    s_who_v:
      "Abakobwa n'abagore bakiri bato bo mu muryango wacu, uko baba bahagaze kose ku bijyanye na virusi itera SIDA",
    s_often: "Inshuro",
    s_often_v: "Rimwe mu cyumweru",
    s_where: "Aho duhurira",
    s_where_v: "Mu cyumba cy'inama cy'Ibiro by'Umurenge wa Kanombe, Kicukiro",
    s_start: "Byatangiye",
    s_start_v: "Nzeri 2025",
    s_reach: "Abamaze kwitabira",
    s_reach_v: "Abakobwa n'abagore bakiri bato 15 (Nzeri 2025 – Werurwe 2026)",
    s_cost: "Igiciro",
    s_cost_v: "Ni ubuntu",
    s_priv: "Ibanga",
    s_priv_v: "Ibivugiwe mu itsinda biguma mu itsinda",
    v1: "Ibanga",
    v2: "Kubahana",
    v3: "Kwisanga",
    v4: "Icyizere",
    f_label: "Uwashinze",
    f_title: "UMULINGA G Jolly",
    f_lead:
      "Uwo yashinze Komeza Peer Circle amaze kurangiza amashuri mu 2025.",
    f_p1: "Jolly yashinze Komeza Peer Circle amaze kurangiza amashuri mu 2025. Akunda cyane ubukangurambaga ku buzima mu muryango no kurwanya akato kajyanye na virusi itera SIDA, kugira ngo nta mukobwa ukiri muto uhura na byo wenyine.",
    f_p2:
      "Arateganya gukomeza kwagura itsinda no kugeza ubu buryo bw'ubufashanye ahandi hirya no hino mu Rwanda.",
    c_label: "Fatanya natwe",
    c_title: "Injira, witange cyangwa ufatanye natwe",
    c_p1: "Niba uri umukobwa cyangwa umugore ukiri muto wifuza kwinjira, cyangwa uri umukozi wo mu rwego rw'ubuzima, umuyobozi cyangwa umuryango wifuza gushyigikira itsinda, twandikire.",
    c_p2: "Ibiganiro byose bigirwa ibanga.",
    c_phone: "Telefoni",
    c_email: "Imeli",
    c_loc: "Aho duherereye",
    c_loc_v: "Umurenge wa Kanombe, Akarere ka Kicukiro, Kigali, Rwanda",
    c_hours: "Igihe cy'ibikorwa",
    c_hours_v: "Buri cyumweru",
    tag: "Nta wusigara inyuma",
    foot: "© 2026 Komeza Peer Circle · Yashinzwe na UMULINGA G Jolly",
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var EN = {};
  nodes.forEach(function (el) {
    EN[el.getAttribute("data-i18n")] = el.innerHTML;
  });
  var buttons = document.querySelectorAll(".lang-switch button");

  function setLang(lang) {
    var dict = lang === "rw" ? RW : EN;
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.documentElement.lang = lang;
    var img = document.querySelector(".portrait");
    if (img)
      img.alt =
        lang === "rw"
          ? "UMULINGA G Jolly, washinze Komeza Peer Circle"
          : "UMULINGA G Jolly, founder of Komeza Peer Circle";
    var nav = document.querySelector("nav");
    if (nav)
      nav.setAttribute(
        "aria-label",
        lang === "rw" ? "Ibice by'urubuga" : "Main",
      );
    buttons.forEach(function (b) {
      b.setAttribute(
        "aria-pressed",
        b.getAttribute("data-lang") === lang ? "true" : "false",
      );
    });
    try {
      localStorage.setItem("komeza-lang", lang);
    } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      setLang(b.getAttribute("data-lang"));
    });
  });
  var saved = null;
  try {
    saved = localStorage.getItem("komeza-lang");
  } catch (e) {}
  if (saved === "rw") setLang("rw");
})();
