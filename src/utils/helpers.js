export function toggleMobileMenu(ref) {
    document.body.classList.toggle("max-h-screen");
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("relative");
    ref.current.classList.toggle("opacity-100");
    ref.current.classList.toggle("pointer-events-auto");
}