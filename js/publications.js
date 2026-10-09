// Add new papers to the top of this list as your research grows.
window.SITE_PUBLICATIONS = [
  // {
  //   year: "2026",
  //   type: "preprint",
  //   title: "Your paper title",
  //   authors: "Your Name, Collaborator Name",
  //   venue: "arXiv",
  //   summary: "One sentence describing the contribution.",
  //   links: [{ label: "paper", href: "https://arxiv.org/" }]
  // }
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
