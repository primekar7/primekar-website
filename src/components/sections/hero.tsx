import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { LinkButton } from "@/components/ui/link-button";
import { appExperienceAnchor } from "@/lib/content/site";
import styles from "./hero.module.css";

/**
 * Homepage hero — approved mountain/Lexus scene (single scene; three more
 * scenes — airport, family, corporate — are planned but intentionally not
 * built yet, per scope).
 *
 * Server Component, zero client JavaScript. The Lexus is static — it renders
 * in its final parked position on first paint, no entrance animation, no
 * timers, no IntersectionObserver.
 *
 * Assets (public/images/hero/, verified byte-identical from the approved
 * cleaned pair — docs/source-material/assets/hero-refs/):
 *   - primekar-mountain-hero-background.png — real photography, full-bleed
 *   - lexus-lx600-stopped.png — real transparent cutout (RGBA verified), NOT
 *     an illustration. lexus-lx600-moving.png is kept on disk for a possible
 *     future hero scene but is not referenced or loaded here.
 *
 * Typed for future scenes: `HeroScene` describes everything a scene needs
 * (background, vehicle, copy, info block). Only `mountainScene` is rendered
 * for now — no dots, no placeholder slides, no "coming soon".
 */
type HeroScene = {
  background: { src: string; alt: string };
  vehicle: {
    stopped: string;
    tier: "Executive" | "Elite XL";
  };
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  description: string;
  info: {
    title: string;
    bullets: readonly string[];
  };
};

const mountainScene: HeroScene = {
  background: {
    src: "/images/hero/primekar-mountain-hero-background.png",
    alt: "",
  },
  vehicle: {
    stopped: "/images/hero/lexus-lx600-stopped.png",
    tier: "Executive",
  },
  eyebrow: "Calgary & Alberta",
  headlineLead: "Mountain destinations,",
  headlineAccent: "handled with comfort.",
  description:
    "Premium pre-scheduled transportation to Banff, Canmore, Lake Louise and beyond — travel in comfort, arrive refreshed.",
  info: {
    title: "Mountain travel without the stress",
    bullets: ["Professional drivers.", "Premium vehicles.", "Peace of mind."],
  },
};

const trustItems = [
  "Calgary-based",
  "Executive & Elite XL",
  "Scheduled through the app",
  "Serving YYC Airport & Alberta",
];

function MountainIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 20 10 6l4 7 2-3 5 10Z" />
      <path d="m8.5 11 1.5 2.6" />
    </svg>
  );
}

function Hero() {
  const scene = mountainScene;

  return (
    <section className={styles.hero}>
      <div className={styles.bgLayer}>
        <Image
          src={scene.background.src}
          alt={scene.background.alt}
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
        />
      </div>
      <div aria-hidden="true" className={styles.scrimLeft} />
      <div aria-hidden="true" className={styles.scrimEdges} />

      <Container className={`${styles.inner} max-w-[1400px] lg:px-[48px]`}>
        <div className={styles.topRow}>
          <div>
            <span className={styles.eyebrow}>{scene.eyebrow}</span>
            <h1 className={styles.headline}>
              {scene.headlineLead}{" "}
              <span className={styles.accent}>{scene.headlineAccent}</span>
            </h1>
          </div>

          <div aria-hidden="true" className={styles.info}>
            <div className={styles.infoTop}>
              <span className={styles.infoIcon}>
                <MountainIcon />
              </span>
              <span className={styles.infoTitle}>{scene.info.title}</span>
            </div>
            <span className={styles.infoDivider} />
            <ul className={styles.infoList}>
              {scene.info.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.desc}>{scene.description}</p>
        <div className={styles.ctas}>
          <LinkButton
            size="cta"
            className={styles.ctaButton}
            href={appExperienceAnchor}
          >
            Download the App
          </LinkButton>
          <LinkButton
            size="cta"
            variant="outline"
            className={styles.ctaButton}
            href="#services"
          >
            Explore Services
          </LinkButton>
        </div>
      </Container>

      <div className={styles.vehicleStage}>
        <div aria-hidden="true" className={styles.vehicleWrap}>
          <div className={styles.vehicleShadow} />
          <div className={styles.vehicleReflection}>
            <div className={styles.vehicleReflectionInner}>
              <Image
                src={scene.vehicle.stopped}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 680px"
                className={styles.vehicleImg}
              />
            </div>
          </div>
          <Image
            src={scene.vehicle.stopped}
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 100vw, 680px"
            className={styles.vehicleImg}
          />
        </div>
      </div>

      <div className={styles.trustStrip}>
        <Container>
          <div className={styles.trustRow}>
            {trustItems.map((item) => (
              <span key={item} className={styles.trustItem}>
                <span>&#9670;</span>
                {item}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

export { Hero };
