// Light by default; the header button switches to dark and remembers the choice.
const btn = document.querySelector(".theme-toggle");
function apply(dark) {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  const src = dark ? "/assets/brand/mark-dark.svg" : "/assets/brand/mark.svg";
  for (const el of document.querySelectorAll(".mark")) el.setAttribute(el.tagName === "image" ? "href" : "src", src);
  btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  btn.setAttribute("aria-pressed", dark);
}
btn.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  try { localStorage.theme = dark ? "dark" : "light"; } catch (e) {}
  apply(dark);
});
apply(document.documentElement.dataset.theme === "dark");
