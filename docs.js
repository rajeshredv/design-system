// Documentation page helpers — shared by every docs page.

// ---- Page nav -----------------------------------------------------------
// Rendered into <nav data-doc-nav></nav>. Add new pages here only.
const DOC_PAGES = [
  ["button.html", "Button"],
  ["icon-buttons.html", "Icon buttons"],
  ["toggle.html", "Toggle"],
  ["selection.html", "Checkbox & radio"],
  ["menus.html", "Dropdowns & menus"],
  ["feedback.html", "Badges, tags & chips"],
  ["dialogs.html", "Dialogs"],
  ["app-patterns.html", "App patterns"],
];

document.querySelectorAll("[data-doc-nav]").forEach((nav) => {
  const current = location.pathname.split("/").pop() || "button.html";
  nav.innerHTML = DOC_PAGES.map(
    ([href, label]) => `<a href="${href}"${href === current ? ' aria-current="page"' : ""}>${label}</a>`
  ).join("");
});

// ---- Theme switch -------------------------------------------------------
// Follows the OS until the user flips the switch; the choice is remembered.
const THEME_KEY = "ds-theme";
const root = document.documentElement;
const osDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  if (theme) root.dataset.theme = theme;
  else delete root.dataset.theme;
}

applyTheme(localStorage.getItem(THEME_KEY));

document.querySelectorAll("[data-theme-switch]").forEach((input) => {
  const sync = () => {
    input.checked = root.dataset.theme ? root.dataset.theme === "dark" : osDark.matches;
  };
  sync();
  osDark.addEventListener("change", sync);
  input.addEventListener("change", () => {
    const theme = input.checked ? "dark" : "light";
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  });
});

// ---- Light / dark comparison -------------------------------------------
// <div class="compare"><section class="compare__panel">…</section></div>
// gets a second, dark copy of the panel so both themes show side by side.
document.querySelectorAll(".compare").forEach((compare) => {
  const light = compare.querySelector(".compare__panel");
  const dark = light.cloneNode(true);
  light.dataset.theme = "light";
  dark.dataset.theme = "dark";
  light.insertAdjacentHTML("afterbegin", '<div class="compare__title">Light</div>');
  dark.insertAdjacentHTML("afterbegin", '<div class="compare__title">Dark</div>');
  // Cloned controls must not share ids or form groups with the originals.
  dark.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
  compare.append(dark);
});
