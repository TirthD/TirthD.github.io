export default function Footer() {
  return (
    <footer className="relative z-10 py-8 text-center bg-[#000000] border-t border-white/10">
      <p className="text-xs text-[#86868b]">
        Designed &amp; Built by Tirth Dave &middot; {new Date().getFullYear()}
      </p>
    </footer>
  );
}