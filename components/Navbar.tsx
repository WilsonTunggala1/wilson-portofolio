"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const sections = ["Home", "About", "Projects", "Experience", "Skills", "Contact", "CV"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -65% 0px" });
    sections.forEach(name => { const element = document.getElementById(name.toLowerCase()); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  function scrollTo(id: string) {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    target?.focus({ preventScroll: true });
    setOpen(false);
  }
  useEffect(() => {
    function escape(event: KeyboardEvent) { if (event.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return <header className="site-header"><div className="container nav-inner">
    <button onClick={() => scrollTo("home")} className="brand" aria-label="Wilson Tunggala, scroll to home">Wilson Tunggala</button>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={23}/> : <Menu size={23}/>}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
      {sections.map(name => <button key={name} onClick={() => scrollTo(name.toLowerCase())} aria-current={active === name.toLowerCase() ? "location" : undefined} className={name === "CV" ? "nav-cv" : active === name.toLowerCase() ? "active" : ""}>{name}</button>)}
    </nav>
  </div></header>;
}
