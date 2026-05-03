export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Privacy-First Domain Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Check Domains Anonymously.<br />
          <span className="text-[#58a6ff]">Stop Registrar Front-Running.</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          PrivacyWhois proxies your domain searches through rotating anonymous endpoints so registrars can&apos;t track, log, or front-run your ideas before you register them.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Private Access — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <p className="mt-5 text-xs text-[#6e7681]">
          No logs. No tracking. Cancel anytime.
        </p>
      </section>

      {/* Feature Pills */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🔒", title: "Zero Registrar Tracking", desc: "Searches never touch registrar servers directly." },
            { icon: "🔄", title: "Rotating Proxies", desc: "Each query uses a fresh anonymous endpoint." },
            { icon: "⚡", title: "Real-Time Results", desc: "WHOIS + DNS checks in under 2 seconds." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to search domains privately.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited anonymous domain searches",
              "WHOIS + DNS availability checks",
              "Rotating proxy network",
              "Bulk domain checking (up to 50 at once)",
              "Search history (stored locally only)",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Searching Privately
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does registrar front-running actually happen?",
              a: "When you search for a domain on a registrar's site, that query is logged. Some registrars (or data brokers they sell to) register popular searched domains before you can, then resell them at a premium. PrivacyWhois routes your searches through anonymous proxies so your queries are never tied to your identity or IP."
            },
            {
              q: "Is this legal to use?",
              a: "Absolutely. Using a proxy to query public WHOIS and DNS records is entirely legal. You're simply accessing publicly available information through an intermediary — the same way a VPN protects your browsing. We don't circumvent any access controls."
            },
            {
              q: "What TLDs can I check?",
              a: "PrivacyWhois supports all major TLDs including .com, .net, .org, .io, .co, .ai, .app, .dev, and hundreds more via our WHOIS and DNS lookup infrastructure. New TLD support is added regularly."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        <p>© {new Date().getFullYear()} PrivacyWhois. Built for entrepreneurs who protect their ideas.</p>
      </footer>
    </main>
  );
}
