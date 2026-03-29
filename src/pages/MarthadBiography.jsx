import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Menu,
  X,
  ChevronRight,
  Scroll,
  Swords,
  Shield,
  BookMarked,
  Play,
} from "lucide-react";

const sections = [
  { id: "early-life", label: "Early Life", icon: Scroll },
  { id: "incident", label: "The Incident with \u2018Anaq", icon: Shield },
  { id: "martyrdom", label: "His Martyrdom", icon: Swords },
  { id: "references", label: "References", icon: BookMarked },
];

export default function MarthadBiography() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("early-life");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileNavOpen(false);
  };

  return (
    <>
      {/* Sub-navigation for biography sections */}
      <div className="sticky top-[53px] z-40 border-b border-slate-800/60 bg-[#0F172A]/90 backdrop-blur-xl -mt-px">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-2.5">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs text-slate-500 no-underline transition-colors hover:text-sand-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Biographies
          </Link>

          <div className="h-4 w-px bg-slate-800" />

          {/* Desktop section nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`rounded-lg px-3 py-1 text-xs transition-colors cursor-pointer ${
                  activeSection === id
                    ? "bg-sand-300/10 text-sand-300"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="ml-auto text-slate-400 md:hidden cursor-pointer"
          >
            {mobileNavOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>

        {mobileNavOpen && (
          <nav className="border-t border-slate-800/60 bg-[#0F172A]/95 px-6 py-3 backdrop-blur-xl md:hidden">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                  activeSection === id
                    ? "bg-sand-300/10 text-sand-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sand-300/[0.04] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sand-300/20 bg-sand-300/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-sand-300 uppercase">
            <Scroll className="h-3.5 w-3.5" />
            Companion of the Prophet (&#xFDFA;)
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Marthad bin Abi Marthad
            <br />
            <span className="text-sand-300">Al-Ghanawi</span>
            <span className="ml-2 text-2xl font-normal text-sand-200/70 md:text-3xl">
              رضي الله عنه
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Emigrant, veteran of Badr, and martyr in the path of Allah
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => scrollTo("early-life")}
              className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-sand-300/40 hover:bg-sand-300/10 hover:text-sand-300 cursor-pointer"
            >
              Begin reading
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto max-w-[72ch] px-6 py-16 md:py-24">
        {/* Early Life */}
        <section id="early-life" className="mb-20">
          <SectionHeading icon={Scroll} label="Early Life" />
          <ContentCard>
            <p className="mb-5 leading-[1.85] text-slate-300">
              He is Marthad bin Abi Marthad Al-Ghanawi, a Companion (
              <em className="text-sand-200 not-italic font-medium">Sahabi</em>
              ), and his father was also a Companion. He was among the earliest
              Muslims (
              <em className="text-sand-200 not-italic font-medium">
                As-Sabiqoon Al-Awwaloon
              </em>
              ) and the Emigrants (
              <em className="text-sand-200 not-italic font-medium">
                Muhajireen
              </em>
              ). When he migrated to Al-Madinah, the Messenger of Allah (&#xFDFA;)
              established a bond of brotherhood between him and Aws bin As-Samit,
              the brother of &lsquo;Ubadah bin As-Samit. Marthad Al-Ghanawi
              participated in the Battle of Badr and fought exceptionally well in
              it.
            </p>
            <p className="leading-[1.85] text-slate-300">
              Marthad was known for his strength, intensity, and courage. For
              this reason, he undertook one of the most dangerous missions:
              secretly transporting Muslim prisoners and the oppressed from
              Makkah to Al-Madinah.
            </p>
          </ContentCard>
        </section>

        {/* The Incident with 'Anaq */}
        <section id="incident" className="mb-20">
          <SectionHeading
            icon={Shield}
            label="The Incident with &lsquo;Anaq"
          />
          <ContentCard>
            <p className="mb-5 leading-[1.85] text-slate-300">
              During one of his missions, he had promised a prisoner in Makkah to
              carry him from Makkah to Al-Madinah. However, as he was going to
              him, a woman from the prostitutes of Makkah named &lsquo;Anaq
              spotted him in one of the neighborhoods. This &lsquo;Anaq was a
              female companion of his during the Days of Ignorance (
              <em className="text-sand-200 not-italic font-medium">
                Jahiliyyah
              </em>
              ). When she saw him, she recognized him and invited him to spend
              the night with her as he used to do during{" "}
              <em className="text-sand-200 not-italic font-medium">
                Jahiliyyah
              </em>
              . But he refused and said to her:
            </p>

            <blockquote className="my-6 border-l-2 border-sand-300/40 pl-5 text-slate-200 italic">
              &ldquo;O &lsquo;Anaq, indeed Allah, the Exalted and Majestic, has
              made fornication (Zina) impermissible.&rdquo;
            </blockquote>

            <p className="mb-5 leading-[1.85] text-slate-300">
              At this, &lsquo;Anaq shouted at the top of her voice, exposing
              him: &ldquo;O people of Makkah, this is Marthad who carries away
              the prisoners from Makkah!&rdquo; Her voice echoed among the
              people of the neighborhood who were lying in wait to do Marthad
              every kind of evil and harm.
            </p>

            <p className="mb-5 leading-[1.85] text-slate-300">
              Marthad narrated: &ldquo;Eight men pursued me, and I took the path
              of Al-Khandamah (a mountain in Makkah). I reached a cave and
              entered it. They came until they stood right above my head, but
              Allah blinded them from seeing me, and they returned. I went back
              to my companion and carried him, and he was a heavy man. I freed
              him from his restraints and then continued carrying him until I
              reached Al-Madinah.&rdquo;
            </p>

            <p className="mb-5 leading-[1.85] text-slate-300">
              &ldquo;I came to the Messenger of Allah (&#xFDFA;) and asked:
              &lsquo;O Messenger of Allah, may I marry &lsquo;Anaq?&rsquo; The
              Messenger of Allah (&#xFDFA;) remained silent and did not reply to
              me until this verse was revealed:&rdquo;
            </p>

            <div className="my-6 rounded-xl border border-sand-300/15 bg-sand-300/[0.04] px-6 py-5 text-center">
              <p
                className="mb-3 text-xl leading-relaxed text-sand-200"
                dir="rtl"
                lang="ar"
              >
                &#x200F;
                {"\u0627\u0644\u0632\u0651\u064E\u0627\u0646\u0650\u064A \u0644\u0627 \u064A\u064E\u0646\u0643\u0650\u062D\u064F \u0625\u0650\u0644\u0651\u064E\u0627 \u0632\u064E\u0627\u0646\u0650\u064A\u064E\u0629\u064B \u0623\u064E\u0648\u0652 \u0645\u064F\u0634\u0652\u0631\u0650\u0643\u064E\u0629\u064B"}
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                &ldquo;The fornicator does not marry except a [female] fornicator
                or polytheist&rdquo;
              </p>
              <p className="mt-1 text-xs text-slate-500">[An-Nur: 3]</p>
            </div>

            <p className="leading-[1.85] text-slate-300">
              The Messenger of Allah (&#xFDFA;) recited it to me and said:
              &ldquo;Do not marry her.&rdquo;
            </p>
          </ContentCard>
        </section>

        {/* Martyrdom */}
        <section id="martyrdom" className="mb-20">
          <SectionHeading icon={Swords} label="His Martyrdom" />
          <ContentCard>
            <p className="leading-[1.85] text-slate-300">
              Marthad passed away in the month of Safar in the third year of the
              Hijrah, according to the most well-known opinions. This occurred
              during the Expedition of Ar-Raji&rsquo;, where he was the
              commander of a detachment consisting of six men&mdash;and it is
              also said ten. One hundred men, fully equipped with weapons and
              gear, came out against them. Marthad did not succumb nor did he
              surrender to captivity. He and his companions fought as hard as
              they could until he eventually fell as a martyr (
              <em className="text-sand-200 not-italic font-medium">Shaheed</em>)
              on the battlefield.
              <sup className="ml-0.5 text-sand-300">
                <a href="#ref-1" className="hover:text-sand-200 no-underline">
                  [1]
                </a>
              </sup>
            </p>
          </ContentCard>
        </section>

        {/* Watch the Video */}
        <section className="mb-20">
          <SectionHeading icon={Play} label="Watch the Video" />
          <a
            href="https://youtu.be/uj2ol_BT78Y"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-800/20 no-underline transition-all hover:border-sand-300/30 hover:bg-slate-800/40"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="https://img.youtube.com/vi/uj2ol_BT78Y/maxresdefault.jpg"
                alt="Watch: Marthad bin Abi Marthad Al-Ghanawi"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand-300/90 shadow-lg transition-transform group-hover:scale-110">
                  <Play className="h-7 w-7 fill-[#0F172A] text-[#0F172A] ml-1" />
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm font-medium text-slate-300 group-hover:text-sand-300 transition-colors">
                Watch on YouTube
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Authentic Biographies &middot; Marthad bin Abi Marthad Al-Ghanawi
              </p>
            </div>
          </a>
        </section>

        {/* References */}
        <section id="references">
          <SectionHeading icon={BookMarked} label="References" />
          <div
            id="ref-1"
            className="rounded-2xl border border-slate-800/60 bg-slate-800/20 p-6 md:p-8"
          >
            <p className="mb-4 text-xs font-semibold tracking-widest text-sand-300/60 uppercase">
              [1] Primary Sources
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-400">
              <li className="border-l-2 border-slate-700 pl-4">
                <span className="font-medium text-slate-300">
                  Ibn &lsquo;Abd al-Barr
                </span>
                : <em>Al-Isti&lsquo;ab fi Ma&lsquo;rifat al-Ashab</em>{" "}
                (Investigation: &lsquo;Ali Muhammad Al-Bijawi, Dar Al-Jil,
                Beirut, 1st Edition, 1412 AH / 1992 CE, 3/1383-1386).
              </li>
              <li className="border-l-2 border-slate-700 pl-4">
                <span className="font-medium text-slate-300">
                  Ibn al-Athir
                </span>
                : <em>Usd al-Ghabah</em> (Investigation: &lsquo;Ali Muhammad
                Mu&lsquo;awwad, &lsquo;Adil Ahmad &lsquo;Abd al-Mawjud, Dar
                Al-Kutub Al-&lsquo;Ilmiyyah, 1st Edition, 1415 AH / 1994 CE,
                5/132).
              </li>
              <li className="border-l-2 border-slate-700 pl-4">
                <span className="font-medium text-slate-300">Al-Maqrizi</span>:{" "}
                <em>Imta&lsquo; al-Asma&lsquo;</em> (Investigation: Muhammad
                &lsquo;Abd al-Hamid An-Numaisi, Dar Al-Kutub
                Al-&lsquo;Ilmiyyah, Beirut, 1st Edition, 1420 AH / 1999 CE,
                1/185).
              </li>
              <li className="border-l-2 border-slate-700 pl-4">
                <span className="font-medium text-slate-300">Ibn Hajar</span>:{" "}
                <em>Al-Isabah fi Tamyiz al-Sahabah</em> (Investigation:
                &lsquo;Adil Ahmad &lsquo;Abd al-Mawjud and &lsquo;Ali Muhammad
                Mu&lsquo;awwad, Dar Al-Kutub Al-&lsquo;Ilmiyyah, Beirut, 1st
                Edition, 1415 AH, 6/55-56).
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

function SectionHeading({ icon: Icon, label }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sand-300/10">
        <Icon className="h-4 w-4 text-sand-300" />
      </div>
      <h2
        className="text-xl font-semibold tracking-tight text-white"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
    </div>
  );
}

function ContentCard({ children }) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-800/20 p-6 md:p-8">
      {children}
    </div>
  );
}
