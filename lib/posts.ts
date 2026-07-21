import { Category } from "./categories";

export type Post = {
  title: string;
  slug: string;
  category: Category;
  date: string;
  number: number;
  location?: string;
  content: string[];
};

export const posts: Post[] = [
  {
    title: "The quiet disappearance of the neighborhood noticeboard",
    slug: "the-quiet-disappearance-of-the-neighborhood-noticeboard",
    category: "observations",
    date: "2026-07-14",
    number: 7,
    location: "Taichung, Taiwan",
    content: [
      "There used to be a corkboard outside the wet market near my apartment, the kind with a warped plastic roof and a padlock nobody bothered to lock. Lost cats, tutoring flyers, a folding table for sale, a hand-drawn map to a temple fair. I walked past it most mornings for two years and never once saw it empty. Last month I noticed it had been empty for a while, and I couldn't tell you when the last flyer came down.",
      "The obvious explanation is the one everyone reaches for first: everything moved to a group chat, a neighborhood app, a local Facebook page administered by someone's uncle. And that's true, mostly. But it doesn't explain why the board itself stayed up, screwed to its post, holding nothing. If the function had simply migrated, I'd expect the board to be removed, repurposed, argued over in a city council meeting about street clutter. Instead it just sits there, present and useless, like a phone booth.",
      "I think what actually happened is narrower and stranger than \"technology replaced it.\" The noticeboard required a specific kind of trust — that a stranger walking past would read carefully enough to notice your cat, your tutoring rate, your table. That trust didn't get replaced by an app; it got replaced by a different trust, in an algorithm's willingness to show your post to the right hundred people. Nobody voted on this. It just became easier to believe in the feed than in the walk.",
      "I've started photographing empty noticeboards wherever I find them, which is a strange hobby to explain to people. What I'm actually looking for, I think, is the moment the object outlives its function and becomes pure architecture — a hook with nothing on it, still bolted to the wall out of a kind of civic inertia. Taichung has dozens of them if you start looking. I suspect your neighborhood does too.",
    ],
  },
  {
    title: "Three paragraphs on why old maps lie on purpose",
    slug: "three-paragraphs-on-why-old-maps-lie-on-purpose",
    category: "readings",
    date: "2026-07-07",
    number: 6,
    content: [
      "Cartographers have a word for the fake streets they insert into their maps to catch plagiarists: trap streets. A dead-end alley that doesn't exist, a cul-de-sac with a name nobody in the city has heard, planted specifically so that if a rival publisher copies your map wholesale, the theft is provable in court. I learned this from a footnote in a book about medieval trade routes and then spent an entire evening falling down a hole about it, which is exactly the kind of evening I want more of.",
      "What got me wasn't the legal cleverness of it, though that's satisfying enough on its own. It was the realization that every map I've ever trusted was making a hundred small decisions I never noticed — what counts as a road worth drawing, whose border gets a solid line and whose gets dashed, which neighborhood gets labeled and which gets swallowed into the name of a bigger one next door. A trap street is just the most honest version of a distortion that's happening everywhere on the page, all the time, on purpose, for reasons that have nothing to do with the territory.",
      "There's an old cliché that the map is not the territory, usually deployed to sound wise about abstraction in general. But I don't think people sit with the second half of it enough: the map was never trying to be the territory. It was trying to be useful to whoever commissioned it, which is a different and much more interesting project. Every map is an argument, and the trap streets are just the part of the argument that got caught.",
      "I keep an old fold-out map of Taipei from a used bookstore in Ximending, printed sometime in the eighties judging by the phone number format still stamped on the back. Half the roads have different names now. I have no way of knowing if any of it was ever a trap. I like it more for not knowing.",
    ],
  },
  {
    title: "A week of writing everything by hand first",
    slug: "a-week-of-writing-everything-by-hand-first",
    category: "experiments",
    date: "2026-06-30",
    number: 5,
    content: [
      "The rule was simple and, I thought going in, mildly punishing: for one week, nothing gets typed until it's been written by hand first. Emails, notes, this very dispatch, even the grocery list. I bought a stack of legal pads on Monday morning feeling like I was about to relearn how to hold a pencil, which, it turns out, I basically was.",
      "The first two days were slower in a way that made me irritable. A reply that would've taken ninety seconds to type took four minutes to draft by hand and then retype, and I kept catching myself resenting the extra step, treating the handwriting as friction rather than as the actual work. By Wednesday something shifted. I noticed I was writing shorter sentences on paper — not because I was tired, but because the pen doesn't let you get away with a clause you don't need. Typing lets you pile qualifiers on top of a sentence and clean it up later. A legal pad makes you decide before you commit.",
      "The email drafts were where the difference showed up most. On a screen I'll write three paragraphs to say something that fits in three lines, because deleting feels like admitting the first draft was wrong. On paper, crossing out a line costs something — you can see the failed attempt sitting right there, which somehow makes you more careful about attempting it in the first place. I sent shorter, plainer emails all week. Nobody complained. If anything the replies got shorter and plainer too, like the format was contagious.",
      "I won't keep doing it for everything — the grocery list experiment was genuinely a waste of a legal pad — but I've kept it for anything I'd call a first draft. The paper doesn't make me a better writer. It just removes the option of pretending I've thought something through before I actually have.",
    ],
  },
  {
    title: "Thirty days without opening a single tab before noon",
    slug: "thirty-days-without-opening-a-single-tab-before-noon",
    category: "experiments",
    date: "2026-06-23",
    number: 4,
    content: [
      "For thirty days, no browser before noon. Not news, not email, not the weather, not the one search that always feels harmless and never is. I could use the phone to call people and I could use a paper notebook for everything else, but the laptop stayed shut and the browser app got moved off the home screen into a folder three swipes deep, which sounds like a small thing and was, in practice, the entire experiment.",
      "The first week I underestimated how much of my morning was structured around the browser without me registering it as a choice. Coffee, then a tab, then another tab, then somehow forty minutes gone before I'd decided to do anything at all. Removing it didn't create a void so much as expose one that was already there — I just hadn't noticed because the tabs were filling it competently.",
      "What replaced it, eventually, was not more focused work, which is the answer I expected and would have liked to report. What replaced it was noticing things. I started actually looking at the walk to get coffee instead of looking at my phone during it. I finished a physical book I'd been half-reading for four months. None of this is a productivity story — my actual output in the mornings didn't obviously improve. But the quality of my attention before noon changed in a way I can feel more than measure.",
      "The thirty days are over and I haven't fully gone back. I still open the browser earlier than I'd like some mornings. But the folder is still three swipes deep, and that friction, small as it is, has been enough to make me ask the question — do I actually want this tab open right now — often enough that the answer is no more than it used to be.",
    ],
  },
  {
    title: "Vending machines as honest infrastructure",
    slug: "vending-machines-as-honest-infrastructure",
    category: "observations",
    date: "2026-06-16",
    number: 3,
    content: [
      "There's a vending machine on the corner near the train station that sells hot corn soup in a can, and I think about it more than is reasonable for a piece of infrastructure that costs forty dollars in change. It has one job. It does the job in full view of everyone, with a lit-up panel that tells you exactly what's available and what isn't — the little red light under SOLD OUT is one of the most honest pieces of design I've encountered all year.",
      "Compare that to almost anything else I interact with in a day. An app tells you a product is \"low stock\" to create urgency it may not mean. A website says a form is \"processing\" for exactly as long as it takes to feel deliberate rather than broken. A vending machine has none of this vocabulary available to it. It's either got the can or it doesn't, and it tells you before you put your money in, not after.",
      "I don't want to overstate the case for a box that dispenses soup — it's not a moral achievement, it's a mechanical limitation. It can't lie to you because it doesn't have the parts to. But I think that limitation is worth noticing precisely because so much of what we now call infrastructure has traded the mechanical honesty of the vending machine for the soft, revisable honesty of software, where almost everything can be quietly adjusted after the fact and usually is.",
      "The corn soup, for the record, is good. Slightly too sweet, comes out close to boiling, costs more than it should. But it has never once told me it was something it wasn't.",
    ],
  },
  {
    title: "The forgotten art of the printed timetable",
    slug: "the-forgotten-art-of-the-printed-timetable",
    category: "readings",
    date: "2026-06-09",
    number: 2,
    content: [
      "I found a stack of old bus timetables at a paper fair, the pocket-sized fold-out kind that used to sit in a plastic rack by the door of every terminal. Someone had priced them at almost nothing, which felt right — nobody collects these on purpose, they just survive by accident in the drawer of someone who meant to throw them out and didn't.",
      "What struck me, reading through them, is how much editorial judgment went into a document I used to think of as pure data. Somebody decided which routes got the front fold and which got buried on the back panel. Somebody decided that a forty-five minute wait deserved a footnote explaining the reason, and that a twenty-minute wait didn't need explaining at all. A timetable, it turns out, is not a neutral list of times. It's a small argument about what the reader deserves to know without asking.",
      "The app that replaced it is, by every reasonable measure, better — live, accurate, personalized to where you're actually standing. But it also erased the editorial layer entirely. The app doesn't decide what matters; it shows you everything and lets the ranking algorithm imply an answer. I miss the version where a human being had clearly sat down and decided, on behalf of every rider, what was worth printing first.",
      "I've kept three of the timetables pinned above my desk, all for routes that no longer exist in the form printed. They're wrong now, technically. I like them anyway, the way you like an old photograph knowing the light has changed.",
    ],
  },
  {
    title: "Publishing this magazine with zero analytics installed",
    slug: "publishing-this-magazine-with-zero-analytics-installed",
    category: "experiments",
    date: "2026-06-02",
    number: 1,
    content: [
      "This is the first dispatch, so it seems fair to say plainly what the experiment is: no analytics. No page view counter, no scroll-depth tracking, no little dashboard I can refresh at midnight to see if anyone read this. I've built enough of those dashboards for other people's projects to know exactly how they change the thing being measured, and I wanted to find out what happens to my own writing without one watching over my shoulder.",
      "The uncomfortable truth is that I don't actually know if this is being read right now, by you or by anyone. There's no number telling me otherwise, which is the point, and which is also genuinely uncomfortable in a way I didn't fully anticipate when I decided this. I'm used to writing toward a number. Writing toward nothing in particular is a different muscle, and for the first few drafts of this piece I kept catching myself second-guessing sentences based on how they'd perform, a metric that doesn't exist here and never will.",
      "What I'm hoping happens, eventually, is that the writing gets better for it — not because an audience of zero is more honest than an audience of ten thousand, but because I stop being able to tell the difference from the inside. Every piece gets written the same way regardless of what happens after, because nothing tells me what happened after. It's a small forcing function for a kind of discipline I don't otherwise have.",
      "If you're reading this, you found it some way I'll never know about, and I mean that as a genuine thank you rather than a rhetorical flourish. There's no counter ticking up because of it. But I'm glad you're here.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev: Post | null; next: Post | null } {
  const sorted = [...posts].sort((a, b) => b.number - a.number);
  const index = sorted.findIndex((post) => post.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index < sorted.length - 1 ? sorted[index + 1] : null,
    next: index > 0 ? sorted[index - 1] : null,
  };
}
