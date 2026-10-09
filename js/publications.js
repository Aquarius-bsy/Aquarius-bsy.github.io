// Add new papers to the top of this list as your research grows.
window.SITE_PUBLICATIONS = [
  {
    year: "2026",
    type: "ICML 2026 Spotlight · Third author",
    title: "Toward Stable Value Alignment: Introducing Independent Modules for Consistent Value Guidance",
    authors: "Wenhao Chen, Sirui Sun, Shengyuan Bai, Guojie Song",
    venue: "ICML 2026 · PMLR 306",
    summary: "提出 Stable Value Guidance Transformer（SVGT），通过独立价值模块与显式行为引导，提升大语言模型价值表达的一致性。",
    links: [
      { label: "PMLR", href: "https://proceedings.mlr.press/v306/chen26dw.html" },
      { label: "arXiv", href: "https://arxiv.org/abs/2605.11712" }
    ]
  }
];

(function () {
  var root = document.querySelector("[data-publication-list]");
  if (!root) return;

  var items = window.SITE_PUBLICATIONS || [];
  if (!items.length) {
    root.innerHTML = '<div class="empty-state"><span class="prompt">$</span> no publications yet — more to come.</div>';
    return;
  }

  root.innerHTML = items.map(function (item) {
    var links = (item.links || []).map(function (link) {
      return '<a href="' + link.href + '" rel="noopener noreferrer">' + link.label + ' ↗</a>';
    }).join("<span class=\"muted\"> · </span>");
    return '<article class="publication"><div class="publication-year">' + item.year + '</div><div><div class="publication-meta">' + item.type + ' · ' + item.venue + '</div><h3>' + item.title + '</h3><p class="publication-authors">' + item.authors + '</p><p>' + item.summary + '</p><div class="publication-links">' + links + '</div></div></article>';
  }).join("");
})();
