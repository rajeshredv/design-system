// Documentation page helpers — shared by button.html and toggle.html.

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
