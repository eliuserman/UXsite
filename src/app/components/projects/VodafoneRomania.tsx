import { useNavigate } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Building2, Sparkles, Users, Building, Zap, RefreshCw, Briefcase, XCircle, Frown, Trash2, CheckCircle, Layers, ThumbsUp } from "lucide-react";
import vfroExcited from "@/assets/vfro_excited.png";
import vfroPuzzled from "@/assets/vfro_puzzled.png";
import vfroStressed from "@/assets/vfro_stressed.png";
import vfroImpact from "@/assets/vfro_impact.png";
import vfroSuccess from "@/assets/vfro_success.png";
import vfroOob from "@/assets/vfro_oob.png";
import vfroApp1 from "@/assets/vfro_app1.png";
import vfroApp2 from "@/assets/vfro_app2.png";
import vfroApp3 from "@/assets/vfro_app3.png";

const stations = [
  {
    id: "kickoff",
    phase: "Aug 2018 · Kickoff",
    color: "blue",
    title: "Congrats! We have a new project",
    body: "On Aug. 18, I was assigned to lead UX of Vodafone Romania's new retail app. The brief sounded straightforward — and I was genuinely excited to deliver something top-notch.",
    photo: vfroExcited,
    photoAlt: "Eli — excited, thumbs up",
    quote: "Excited to deliver top-notch retail solution!",
  },
  {
    id: "constraint",
    phase: "The Constraint",
    color: "amber",
    title: "Mmm… wait a minute",
    body: "Then came the brief's fine print: follow MTEL as-is and translate it to Vodafone style. No fresh thinking. No OOB. Just copy a competitor's app.",
    photo: vfroPuzzled,
    photoAlt: "Eli — puzzled, skeptical",
    quote: "Why MTEL and not our best OOB?",
  },
  {
    id: "plan",
    phase: "The Plan",
    color: "blue",
    title: "How it started",
    body: "The project kicked off with a clear sequential path — using MTEL as the reference, translating it to Vodafone style over two weeks in Israel, then flying to Romania to present VFRO Design 1.",
    flow: [
      { label: "Pre-sell", type: "gray" },
      { label: "MTEL", type: "blue" },
      { label: "VFRO Design 1", type: "blue" },
      { label: "Flying to RO", type: "gray" },
      { label: "Rejected ✕", type: "red" },
      { label: "Reset", type: "gray" },
    ],
  },
  {
    id: "mismatch",
    phase: "The Problem",
    color: "red",
    title: "MTEL does not fit Vodafone Romania",
    body: "Once the design reached the Vodafone business team, it became immediately clear that MTEL was fundamentally incompatible with VFRO's actual business.",
    cards: [
      { Icon: Building, color: "text-blue-600", bg: "bg-blue-50", title: "Different business", desc: "VFRO had a unique product structure and commercial model that MTEL never addressed" },
      { Icon: Zap, color: "text-amber-600", bg: "bg-amber-50", title: "Other functionalities", desc: "MTEL's feature set simply didn't map to what Vodafone Romania actually needed" },
      { Icon: RefreshCw, color: "text-purple-600", bg: "bg-purple-50", title: "Wrong flow", desc: "The user journey assumptions from MTEL didn't match VFRO's business processes at all" },
    ],
  },
  {
    id: "whyfail",
    phase: "Root Cause",
    color: "red",
    title: "So, why did it fail?",
    body: "Two systemic failures contributed to the rejection — both rooted in skipping the business layer entirely.",
    cards: [
      { Icon: Briefcase, color: "text-slate-600", bg: "bg-slate-50", title: "Sell pitched to IT", desc: "The pre-sell focused on backend similarity between MTEL and VFRO — not business requirements" },
      { Icon: XCircle, color: "text-red-500", bg: "bg-red-50", title: "No business validation", desc: "Requirements gathering with the Vodafone business team never happened before design began" },
    ],
  },
  {
    id: "impact",
    phase: "The Impact",
    color: "red",
    title: "The cost of the wrong assumption",
    body: "Three work-weeks of design went down the drain, and the client relationship took a serious hit.",
    photo: vfroImpact,
    photoAlt: "Eli — frustrated and stressed",
    cards: [
      { Icon: Frown, color: "text-red-500", bg: "bg-red-50", title: "Frustrated client", desc: "Complaints about Amdocs' professionality for failing to understand VFRO's business" },
      { Icon: Trash2, color: "text-gray-500", bg: "bg-gray-100", title: "Wasted work efforts", desc: "3 full work-weeks of design scrapped entirely" },
    ],
  },
  {
    id: "recovery",
    phase: "The Recovery",
    color: "purple",
    title: "Recovering — starting fresh with OOB",
    body: "Reset. A week in Romania to properly understand the real business. Then back to Israel to build the right solution — this time starting from Amdocs' OOB product as the foundation.",
    photo: vfroStressed,
    photoAlt: "Eli — determined, recovering",
    quote: "Working on the new concept based on OOB",
    flow: [
      { label: "Reset + week in RO", type: "gray" },
      { label: "OOB concept", type: "blue" },
      { label: "VFRO Design 2", type: "blue" },
      { label: "Validation with VF", type: "gray" },
      { label: "Approved ✓", type: "green" },
    ],
  },
  {
    id: "design",
    phase: "The Design",
    color: "blue",
    title: "From OOB to Vodafone Romania",
    body: "Side by side — the Amdocs OOB baseline on the left, and the tailored VFRO retail app on the right, adapted to Vodafone Romania's business flows and brand.",
    appImages: [vfroOob, vfroApp1],
  },
  {
    id: "success",
    phase: "The Outcome",
    color: "green",
    title: "It's a success!",
    body: "The delivered mockups created satisfaction all the way to the highest management levels, and significantly increased Vodafone Romania's confidence in Amdocs as their digital partner.",
    photo: vfroSuccess,
    photoAlt: "Eli — celebrating success",
    appImages: [vfroApp2, vfroApp3],
    quote: "XDC team delivered high-quality mock-ups which created customer satisfaction of the solution (till highest management levels) and increased their confidence in their selection of Amdocs as their partner to fulfill their Digital roadmap.",
    quoteAuthor: "Dror Lichtemberg, VFRO Service Partner",
  },
  {
    id: "insights",
    phase: "Takeaways",
    color: "purple",
    title: "Insights",
    body: "Two hard-won lessons that now inform how I approach every new project.",
    cards: [
      { Icon: CheckCircle, color: "text-green-600", bg: "bg-green-50", title: "Early business validation", desc: "Never assume technical similarity means product similarity. Validate with the business team before design starts — every time." },
      { Icon: Layers, color: "text-blue-600", bg: "bg-blue-50", title: "Start with OOB", desc: "The out-of-the-box product exists for a reason. Customise from a solid, proven baseline — don't copy a competitor." },
    ],
  },
];

const dotColors: Record<string, string> = {
  blue:   "bg-blue-500",
  amber:  "bg-amber-500",
  red:    "bg-red-500",
  green:  "bg-green-500",
  purple: "bg-purple-500",
};

const flowColors: Record<string, string> = {
  gray:  "bg-gray-100 text-gray-600 border border-gray-200",
  blue:  "bg-blue-50 text-blue-700 border border-blue-200",
  red:   "bg-red-50 text-red-600 border border-red-200",
  green: "bg-green-50 text-green-700 border border-green-200",
};

export function VodafoneRomania() {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="py-12">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Building2 size={18} className="text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Company</div>
                <div className="text-gray-900">Amdocs</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                <Users size={18} className="text-red-500" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Client</div>
                <div className="text-gray-900">Vodafone Romania</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <Sparkles size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Role</div>
                <div className="text-gray-900">UX Lead</div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6 font-[Actor]">Vodafone Romania<br />Retail App</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-6">
            A story of assumption, failure, recovery, and a hard-won lesson about the importance of early business validation over technical shortcuts.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Telecom", "Retail App", "UX/UI Design", "Amdocs OOB", "Stakeholder Management"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{tag}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-16">
        <div className="relative pl-6">
          {/* Spine */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200" />

          {stations.map((station) => (
            <motion.div
              key={station.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative mb-16 last:mb-0"
            >
              {/* Phase label with inline bullet */}
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${dotColors[station.color]}`} />
                <div className="text-xs font-medium uppercase tracking-widest text-gray-400">{station.phase}</div>
              </div>

              {/* Title */}
              <h2 className="text-2xl lg:text-3xl text-gray-900 mb-3 font-[Actor]">{station.title}</h2>

              {/* Body */}
              <p className="text-gray-600 leading-relaxed mb-5 max-w-2xl">{station.body}</p>

              {/* Photo + quote bubble */}
              {station.photo && (
                <div className="flex items-start gap-5 mb-5">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={station.photo} alt={station.photoAlt} className="w-full h-full object-cover object-top" />
                  </div>
                  {station.quote && (
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl rounded-tl-none px-5 py-4 flex-1">
                      <p className="text-gray-700 italic text-sm leading-relaxed">"{station.quote}"</p>
                    </div>
                  )}
                </div>
              )}

              {/* Flow steps */}
              {station.flow && (
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {station.flow.map((step, si) => (
                    <div key={si} className="flex items-center gap-2">
                      <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${flowColors[step.type]}`}>
                        {step.label}
                      </span>
                      {si < station.flow!.length - 1 && (
                        <span className="text-gray-300 text-sm">→</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Cards with Lucide icons */}
              {station.cards && (
                <div className={`grid gap-4 mb-5 ${station.cards.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}>
                  {station.cards.map((card, ci) => {
                    const { Icon, color, bg, title, desc } = card as any;
                    return (
                      <motion.div
                        key={ci}
                        whileHover={{ y: -3 }}
                        className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
                      >
                        <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center mb-3`}>
                          <Icon size={18} className={color} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">{title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* App screenshots */}
              {station.appImages && (
                <div className="grid grid-cols-2 gap-4 mb-5">
                  {station.appImages.map((img, ii) => (
                    <motion.div
                      key={ii}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
                    >
                      <img src={img} alt={`Screen ${ii + 1}`} className="w-full h-auto object-cover" />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Quote block (client testimonial) */}
              {station.quoteAuthor && station.quote && (
                <div className="border-l-4 border-blue-400 bg-blue-50 rounded-r-2xl px-6 py-5 mt-2">
                  <p className="text-gray-800 italic text-sm leading-relaxed mb-3">"{station.quote}"</p>
                  <cite className="text-xs text-gray-500 not-italic">— {station.quoteAuthor}</cite>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
            className="px-8 py-4 bg-transparent border border-white text-white rounded-xl hover:bg-white/10 transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
