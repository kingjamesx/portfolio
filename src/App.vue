<script setup lang="ts">
import crowd from "@/assets/images/crowd.png";
import devcareer from "@/assets/images/devcareer.png";
import asyncpay from "@/assets/images/async.png";

const email = "talk2james.uj@gmail.com";
const resume =
  "https://docs.google.com/document/d/1CCW1w02FjxLDFQt6id-8-80QjXY7F5kzvBN430xgsK8/edit?usp=sharing";

const projects = [
  {
    title: "Async Pay",
    description:
      "One integration to collect payments from Paystack, Flutterwave and more, with an embeddable dashboard to track every fund.",
    tags: ["Fintech", "Dashboard"],
    img: asyncpay,
    url: "https://www.asyncpay.io/",
  },
  {
    title: "Crowd",
    description:
      "Tools that help product teams understand their users, build meaningful experiences and drive growth.",
    tags: ["Analytics", "SaaS"],
    img: crowd,
    url: "https://crowdapp.io/",
  },
  {
    title: "Dev Careers",
    description:
      "Helps people breaking into tech choose a programming specialization, with learning resources for each path.",
    tags: ["Education"],
    img: devcareer,
    url: "https://devcareer.io/",
  },
];

const stack = ["TypeScript", "Vue", "Nuxt", "React", "Next.js", "SCSS", "Git"];

const socials = [
  { label: "GitHub", url: "https://github.com/kingjamesx" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jamesuyi/" },
  { label: "Twitter", url: "https://twitter.com/Kingjames_x" },
  { label: "Blog", url: "https://kingjames.hashnode.dev/" },
];

const year = new Date().getFullYear();
</script>

<template>
  <div class="page">
    <header class="nav">
      <a href="#top" class="nav-name">James Uyi</a>
      <nav class="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <p class="status"><span class="dot" aria-hidden="true"></span>Available for new projects</p>
        <h1>
          Frontend engineer crafting clear, considered interfaces.
        </h1>
        <p class="lede">
          I'm James Uyi Osayi, based in Lagos. I build fast, accessible web
          apps with a user-first eye for design, and teach JavaScript to people
          new to tech.
        </p>
        <div class="actions">
          <a class="btn btn-primary" :href="`mailto:${email}`">Get in touch</a>
          <a class="btn" :href="resume" target="_blank" rel="noopener">Résumé ↗</a>
        </div>
      </section>

      <section id="work" class="section">
        <h2 class="section-label">Selected work</h2>
        <ul class="projects">
          <li v-for="p in projects" :key="p.title">
            <a class="project" :href="p.url" target="_blank" rel="noopener">
              <div class="project-thumb">
                <img :src="p.img" :alt="`${p.title} screenshot`" loading="lazy" />
              </div>
              <div class="project-body">
                <div class="project-head">
                  <h3>{{ p.title }}</h3>
                  <span class="arrow" aria-hidden="true">↗</span>
                </div>
                <p>{{ p.description }}</p>
                <ul class="tags">
                  <li v-for="t in p.tags" :key="t">{{ t }}</li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </section>

      <section id="about" class="section about">
        <h2 class="section-label">About</h2>
        <div class="about-body">
          <p>
            I came to engineering from botany — a Lagos State University
            graduate who switched careers and never looked back. I went through
            the #Laptop4Developers front-end program and earned a certificate in
            Web Design &amp; Development from AltSchool Africa.
          </p>
          <p>
            Away from the keyboard you'll find me talking tech with friends,
            reading, or with music on.
          </p>
          <ul class="stack">
            <li v-for="s in stack" :key="s">{{ s }}</li>
          </ul>
        </div>
      </section>

      <section id="contact" class="section contact">
        <h2 class="section-label">Contact</h2>
        <div>
          <p class="contact-lede">Have a project in mind, or just want to say hi?</p>
          <a class="contact-email" :href="`mailto:${email}`">{{ email }}</a>
          <ul class="socials">
            <li v-for="s in socials" :key="s.label">
              <a :href="s.url" target="_blank" rel="noopener">{{ s.label }} ↗</a>
            </li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>© {{ year }} James Uyi</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.page {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 24px;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background: color-mix(in oklab, var(--bg) 85%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  &-name {
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  &-links {
    display: flex;
    gap: 24px;
    font-size: 0.9375rem;
    a {
      color: var(--muted);
      transition: color 150ms ease;
      &:hover {
        color: var(--fg);
      }
    }
  }
}

.hero {
  padding: 112px 0 96px;

  h1 {
    font-size: clamp(2.25rem, 6vw, 3.75rem);
    line-height: 1.05;
    letter-spacing: -0.035em;
    font-weight: 600;
    max-width: 16ch;
    margin: 20px 0 24px;
    text-wrap: balance;
  }
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: var(--muted);
  margin: 0;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px color-mix(in oklab, var(--accent) 20%, transparent);
}

.lede {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--muted);
  max-width: 56ch;
  margin: 0;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}
.btn {
  display: inline-flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  font-size: 0.9375rem;
  font-weight: 500;
  border: 1px solid var(--border);
  transition: background-color 150ms ease, transform 150ms ease;
  &:hover {
    background: var(--surface);
  }
  &:active {
    transform: scale(0.97);
  }
  &-primary {
    background: var(--fg);
    color: var(--bg);
    border-color: var(--fg);
    &:hover {
      background: var(--fg);
      opacity: 0.88;
    }
  }
}

.section {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 24px;
  padding: 64px 0;
  border-top: 1px solid var(--border);
}
.section-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted);
  margin: 4px 0 0;
}

.projects {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 40px;
}
.project {
  display: block;
  &-thumb {
    aspect-ratio: 2 / 1;
    border-radius: 12px;
    overflow: hidden;
    background: var(--surface);
    outline: 1px solid var(--border);
    outline-offset: -1px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left top;
      transition: transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }
  &-body {
    padding-top: 16px;
    p {
      margin: 6px 0 0;
      color: var(--muted);
      line-height: 1.55;
      max-width: 60ch;
    }
  }
  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
  }
  .arrow {
    color: var(--muted);
    transition: transform 200ms ease, color 200ms ease;
  }
  @media (hover: hover) {
    &:hover {
      img {
        transform: scale(1.02);
      }
      .arrow {
        color: var(--fg);
        transform: translate(2px, -2px);
      }
    }
  }
}

.tags,
.stack,
.socials {
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tags li,
.stack li {
  font-size: 0.8125rem;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
}

.about-body p {
  font-size: 1.0625rem;
  line-height: 1.7;
  margin: 0 0 16px;
  max-width: 60ch;
}

.contact-lede {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 1.0625rem;
}
.contact-email {
  font-size: clamp(1.375rem, 4vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-color: var(--border);
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
  transition: text-decoration-color 150ms ease;
  word-break: break-word;
  &:hover {
    text-decoration-color: var(--fg);
  }
}
.socials {
  margin-top: 24px;
  gap: 20px;
  a {
    color: var(--muted);
    font-size: 0.9375rem;
    &:hover {
      color: var(--fg);
    }
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 32px 0 48px;
  border-top: 1px solid var(--border);
  font-size: 0.875rem;
  color: var(--muted);
  a:hover {
    color: var(--fg);
  }
}

@media (max-width: 640px) {
  .page {
    padding: 0 16px;
  }
  .nav-links {
    gap: 16px;
  }
  .hero {
    padding: 64px 0 64px;
  }
  .section {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 48px 0;
  }
}
</style>
