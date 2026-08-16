export const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <p className="mb-4">
        I work one layer above the feature. My job is the shape of the system:
        where code lives, what it&apos;s allowed to depend on, and what has to
        stay true as a codebase grows past the point where any one person can
        hold it in their head.
      </p>
      <p className="mb-4">
        In practice that means monorepo architecture. I design Turborepo estates
        where several applications and a set of shared packages coexist without
        turning into either four copies of the same code or one library that
        nobody can change safely. Package topology, dependency direction,
        versioned contracts, build graph and caching — that&apos;s the surface I
        own.
      </p>
      <p className="mb-4">
        The last decade got me here: a video platform at over a million daily
        actives, a multi-tenant newsroom platform behind KPN and Smart, and an
        estate of international brand sites running from a single repository.
        Different products, one recurring problem — how do you let multiple
        teams move fast without the system drifting apart underneath them.
      </p>
      <p className="mb-4">
        That problem got sharper, not softer, once generation became cheap. When
        a team can produce a thousand lines an hour, authorship stops being the
        bottleneck and coherence becomes it. I&apos;m interested in the
        constraint layer: the typed contracts, enforced boundaries and review
        gates that make fast output safe to keep.
      </p>
      <p className="mb-4">
        I trained as an economist before I wrote software professionally, which
        is probably why I argue architecture in trade-offs rather than
        preferences. Every boundary buys something and costs something. I&apos;d
        rather tell you what it costs.
      </p>
    </section>
  );
};
