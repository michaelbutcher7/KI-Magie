/* =========================================================
   KI-Magie - main.js
   Navigation, Tabs, Prompt-Copy, Smooth Scrolling
   ========================================================= */

(function () {
  // ---------- Mobile Nav Toggle ----------
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
  }

  // ---------- Active Nav Highlighting ----------
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    const href = a.getAttribute("href") || "";
    const target = href.split("/").pop();
    if (target === path) a.classList.add("active");
    if (path === "" && (target === "index.html" || target === "../index.html")) a.classList.add("active");
  });

  // ---------- Dropdown Active Propagation ----------
  // If a link inside a dropdown is active, mark its trigger as active too.
  document.querySelectorAll(".nav-dropdown a.active").forEach(function (link) {
    const group = link.closest(".nav-group");
    if (!group) return;
    const trigger = group.querySelector(".nav-trigger");
    if (trigger) trigger.classList.add("has-active");
  });

  // ---------- Dropdown Toggle (click to open, esc to close) ----------
  const triggers = document.querySelectorAll(".nav-trigger");
  triggers.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const expanded = btn.getAttribute("aria-expanded") === "true";
      triggers.forEach(function (other) { other.setAttribute("aria-expanded", "false"); });
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    });
  });
  // Close on outside click
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-group")) {
      triggers.forEach(function (btn) { btn.setAttribute("aria-expanded", "false"); });
    }
  });
  // Close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      triggers.forEach(function (btn) { btn.setAttribute("aria-expanded", "false"); });
    }
  });

  // ---------- Lernideen Tabs ----------
  document.querySelectorAll(".lernideen").forEach(function (root) {
    const buttons = root.querySelectorAll(".tab-btn");
    const panels = root.querySelectorAll(".tab-panel");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const target = btn.getAttribute("data-target");
        buttons.forEach(function (b) { b.classList.remove("active"); });
        panels.forEach(function (p) { p.classList.remove("active"); });
        btn.classList.add("active");
        const panel = root.querySelector('[data-panel="' + target + '"]');
        if (panel) panel.classList.add("active");
      });
    });
  });

  // ---------- Copy Prompt to Clipboard ----------
  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const wrapper = btn.closest(".prompt-box");
      if (!wrapper) return;
      const text = wrapper.querySelector(".prompt-content")?.innerText || wrapper.innerText;
      navigator.clipboard.writeText(text.trim()).then(function () {
        const original = btn.innerText;
        btn.innerText = "Kopiert!";
        btn.classList.add("copied");
        setTimeout(function () {
          btn.innerText = original;
          btn.classList.remove("copied");
        }, 1500);
      }).catch(function () {
        btn.innerText = "Fehler";
        setTimeout(function () { btn.innerText = "Kopieren"; }, 1500);
      });
    });
  });

  // ---------- TOC Active On Scroll ----------
  const tocLinks = document.querySelectorAll(".toc a");
  if (tocLinks.length > 0) {
    const sections = Array.from(tocLinks).map(function (l) {
      const id = l.getAttribute("href");
      if (!id || !id.startsWith("#")) return null;
      return document.querySelector(id);
    }).filter(Boolean);

    if (sections.length > 0 && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            tocLinks.forEach(function (l) { l.classList.remove("active"); });
            const link = document.querySelector('.toc a[href="#' + e.target.id + '"]');
            if (link) link.classList.add("active");
          }
        });
      }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

      sections.forEach(function (s) { observer.observe(s); });
    }
  }

  // ---------- Year in footer ----------
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
