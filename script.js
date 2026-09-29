// Mobile menu
const btn = document.getElementById("menu-btn"), nav = document.querySelector(".navbar");
btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });

// Active link on scroll
const links = [...nav.querySelectorAll("a")];
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => io.observe(s));
const header = document.querySelector(".header");
addEventListener("scroll", () => header.classList.toggle("sticky", scrollY > 20), { passive: true });

// Typing roles (static text if reduced motion)
const roles = ["Django REST API developer", "React developer", "Generative AI learner (LLMs, RAG)"];
const el = document.getElementById("typed");
if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = roles.join(" | "); }
else {
  let r = 0, c = 0, del = false;
  (function tick() {
    const w = roles[r];
    el.textContent = w.slice(0, c);
    if (!del && c === w.length) { del = true; return setTimeout(tick, 1400); }
    if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 70);
  })();
}

// Contact form: opens the visitor's email app with the message filled in
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, msg = document.getElementById("form-msg");
  if (!f.checkValidity()) { msg.textContent = "Please fill in every field with a valid email address."; return; }
  const body = `${f.message.value}\n\nFrom: ${f.name.value} (${f.email.value})`;
  location.href = `mailto:dhruvg753@gmail.com?subject=${encodeURIComponent(f.subject.value)}&body=${encodeURIComponent(body)}`;
  msg.textContent = "Your email app should open with the message ready to send.";
  f.reset();
});
