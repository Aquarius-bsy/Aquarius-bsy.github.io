(function () {
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function normalizePath(pathname) {
    var path = pathname.replace(/index\.html$/, "");
    if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
    return path || "/";
  }

  var current = normalizePath(location.pathname);
  document.querySelectorAll("[data-nav] a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var target = normalizePath(new URL(href, location.href).pathname);
    var isHome = target === "/";
    var match = isHome
      ? current === "/"
      : current === target || current.indexOf(target + "/") === 0;
    if (match) link.setAttribute("aria-current", "page");
  });

  function renderPosts() {
    var root = document.querySelector("[data-post-list]");
    if (!root || !window.SITE_POSTS) return;

    var limit = Number(root.getAttribute("data-limit")) || window.SITE_POSTS.length;
    var base = root.getAttribute("data-base") || "";
    var posts = window.SITE_POSTS.slice(0, limit);

    root.innerHTML = posts
      .map(function (post) {
        return (
          '<a class="post-item" href="' +
          base +
          post.href +
          '">' +
          "<time datetime=\"" +
          post.date +
          "\">" +
          post.date +
          "</time>" +
          "<div>" +
          "<h3>" +
          post.title +
          "</h3>" +
          "<p>" +
          post.summary +
          "</p>" +
          "</div>" +
          "</a>"
        );
      })
      .join("");
  }

  renderPosts();

  var typeTarget = document.querySelector("[data-typewriter]");
  if (!typeTarget) return;

  var text = typeTarget.getAttribute("data-typewriter") || "";
  var caret = document.querySelector(".caret");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    typeTarget.textContent = text;
    if (caret) caret.classList.add("is-done");
    return;
  }

  var i = 0;
  function tick() {
    typeTarget.textContent = text.slice(0, i);
    i += 1;
    if (i <= text.length) {
      window.setTimeout(tick, 28);
    } else if (caret) {
      caret.classList.add("is-done");
    }
  }
  tick();
})();
