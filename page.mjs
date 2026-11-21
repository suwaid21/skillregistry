export const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SkillRegistry</title>
<style>:root {
  color-scheme: light;
  font-family: system-ui, sans-serif;
  color: #142820;
  background: #eef4ef;
  line-height: 1.55;
}
* { box-sizing: border-box; }
[hidden] { display: none !important; }
body { margin: 0; }
main { width: min(100% - 2rem, 950px); margin: 2rem auto; }
header, form, section {
  padding: clamp(1.2rem, 4vw, 2.4rem);
  border-radius: 1.3rem;
  margin-bottom: 1rem;
}
header { color: #f7fff9; background: #163c31; }
header p { max-width: 52ch; }
.brand { color: #bce8ca; font-weight: 700; margin-top: 0; }
h1 { font-size: clamp(2rem, 6vw, 3.9rem); line-height: 1.05; max-width: 17ch; margin: .7rem 0; letter-spacing: -.045em; }
h2 { margin: 0; line-height: 1.2; }
form, section { background: #fff; border: 1px solid #d5e2d8; }
.form-heading { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .8rem; margin-bottom: 1.3rem; }
.columns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
label { display: block; font-weight: 700; margin-bottom: .35rem; }
textarea, input { font: inherit; width: 100%; }
input[type="file"], textarea { padding: .65rem; border: 1px solid #859b8d; border-radius: .65rem; background: #f8fbf8; color: inherit; }
textarea { resize: vertical; display: block; }
button { font: inherit; font-weight: 700; border-radius: .65rem; border: 0; min-height: 44px; padding: .65rem 1rem; background: #176044; color: white; cursor: pointer; }
button.secondary { color: #174733; background: #e0eee5; }
button:disabled { opacity: .6; cursor: wait; }
:focus-visible { outline: 3px solid #976211; outline-offset: 3px; }
.help { margin: .45rem 0 .85rem; color: #465a50; font-size: .9rem; }
#status { color: #8a3829; margin-bottom: 0; }
#status:empty { display: none; }
.score { font-size: 3rem; font-weight: 800; line-height: 1; margin: .85rem 0 .4rem; }
a { color: #145c41; }
@media (max-width: 630px) {
  main { margin-top: 1rem; }
  .columns { grid-template-columns: 1fr; }
  #analyze { width: 100%; }
}

/* Dashboard */
:root { color: #17263c; background: #eef2f8; }
main { width: min(100% - 2rem, 1080px); }
header { background: #192b47; }
.brand { color: #a8def4; }
.extra-label { margin-top: .8rem; }
input[type="text"] { padding: .65rem; border: 1px solid #8591a5; border-radius: .65rem; color: inherit; }
form, section { border-color: #dce3ee; }
button { background: #3157a8; }
button.secondary { background: #e7eefc; color: #204384; }
.score-banner {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: clamp(1rem, 4vw, 2rem);
  padding: clamp(1rem, 3vw, 2rem);
  border-radius: 1rem;
  color: #fff;
  background: linear-gradient(120deg, #263e85, #6043a1);
}
.score-banner p { margin: .35rem 0 0; }
.score-banner .formula { color: #edf0ff; font-size: .9rem; }
.gauge {
  width: 7.6rem;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: radial-gradient(closest-side, #293e81 82%, transparent 84%),
              conic-gradient(#9be8ff var(--percent, 0%), #6978b0 0%);
}
.gauge .score { margin: 0; font-size: 1.8rem; }
.stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .65rem; margin: 1rem 0; }
.stats div { padding: .8rem; border-radius: .75rem; background: #eef2fa; }
.stats strong, .stats span { display: block; }
.stats strong { font-size: 1.45rem; }
.stats span { font-size: .85rem; }
.dashboard { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.cards { display: grid; gap: .6rem; list-style: none; padding: 0; }
.cards li { padding: .85rem; border: 1px solid #dce3ee; border-radius: .7rem; overflow-wrap: anywhere; }
.cards p { margin: .35rem 0; color: #43526a; font-size: .9rem; }
.badge { display: inline-block; margin-left: .45rem; padding: .12rem .45rem; border-radius: 1rem; font-size: .75rem; background: #e8eef8; }
.badge.required { background: #ffe9e4; color: #802e26; }
.badge.preferred { background: #dff3e9; color: #225e48; }
details { margin: 1rem 0; }
details summary { cursor: pointer; font-weight: 700; }
@media (max-width: 630px) {
  .dashboard, .score-banner { grid-template-columns: 1fr; }
  .gauge { width: 6.25rem; }
  .stats div { padding: .55rem; }
}
.consent { display:flex; align-items:flex-start; gap:.6rem; margin-top:1rem; } .consent input { width:auto; margin:.35rem 0 0; } .support {text-align:center;margin:2rem 0;} 
:root { color:#20252f; background:#f6f3ec; --ink:#171b25; --gold:#f6d479; }
header { background:#171b25; padding:clamp(1.2rem,5vw,3rem); border:1px solid #242831; }
header p { color:#e1dfd7; }
.brand-logo { display:block; width:min(21rem,100%); aspect-ratio:3.3; object-fit:cover; object-position:center 51%; border-radius:.6rem; }
h1 { max-width:19ch; }
button { background:#20283a; }
button.secondary { background:#eee8d9; color:#342e1f; }
form, section, .cards li { border-color:#e2dccc; }
.score-banner { background:linear-gradient(115deg,#19253d,#343035); }
.gauge { background:radial-gradient(closest-side,#212a3b 82%,transparent 84%),conic-gradient(#f6d479 var(--percent,0%),#68616a 0%); }
.nav, .actions { display:flex; flex-wrap:wrap; gap:.55rem; margin:0 0 1rem; }
.nav button[aria-current="page"] { background:#f6d479; color:#241f14; }
#courses a { font-weight:700; }
#courses, #history { padding:0; }
.account-actions { margin:.8rem 0; }
#save-controls label { margin-top:.9rem; }
input[type="text"] { padding:.65rem; border:1px solid #989387; border-radius:.65rem; }
.metric-line { font-variant-numeric:tabular-nums; }
#history .actions { margin:.6rem 0 0; }
#history button { min-width:5rem; }
[role="status"] { overflow-wrap:anywhere; }
@media (max-width: 630px) { .nav button { flex:1 1 8rem; } }

:root { background:#f2f1f7; color:#1c2140; --accent:#6345dc; }
main { width:min(100% - 2rem,1240px); }
header { background:radial-gradient(ellipse at top right,#4c3186,transparent 57%),#151729; display:grid; grid-template-columns:minmax(0,1.6fr) minmax(13rem,1fr); align-items:center; gap:1.8rem; }
header h1 { margin:.6rem 0; }
.brand-logo { width:min(24rem,100%); order:2; border:1px solid #ffffff26; }
button { background:#4431a4; }
button:hover { filter:brightness(1.09); }
button.secondary { background:#efebff; color:#362377; }
.nav { background:#fff; padding:.55rem; border:1px solid #e6e0f5; border-radius:1rem; }
.nav button { background:transparent; color:#393251; }
.nav button[aria-current="page"] { background:#261d49; color:#fff; }
form,section,.cards li { border-color:#e7e1f3; }
.score-banner { background:linear-gradient(110deg,#322289,#7545bf 80%,#8865dc); }
.gauge { background:radial-gradient(closest-side,#332385 82%,transparent 84%),conic-gradient(#ffe295 var(--percent,0%),#9b87d7 0%); }
.stats div { background:#f0ebfd; }
.stats strong { color:#362377; }
.breakdown { padding:1rem; border:1px solid #e7e1f3; border-radius:.9rem; margin:1rem 0; }
.breakdown h3 { margin:0 0 .65rem; }
.segments { display:flex; height:.75rem; border-radius:1rem; overflow:hidden; background:#eee9fb; }
.segments span { width:0; }
#bar-supported { background:#167953; }
#bar-partial { background:#ca7e0c; }
#bar-gap { background:#7948bb; }
#priority { font:inherit; background:#fff; color:inherit; border:1px solid #998bb6; border-radius:.6rem; padding:.55rem; min-height:44px; }
.file-actions { margin:.6rem 0 0; }
.support a + a { margin-left:1.5rem; }
.resume-preview { padding:clamp(1rem,4vw,2rem); background:white; border:1px solid #e7e1f3; border-radius:1rem; overflow-wrap:anywhere; }
.resume-preview h3 { font-size:1.6rem; margin:0; }
.resume-preview p { white-space:pre-wrap; }
#vault-list { padding:0; }
.course-progress { display:flex; gap:.5rem; align-items:center; margin-top:.7rem; font-size:.9rem; }
.course-progress input { width:auto; }
.vault-details { overflow-wrap:anywhere; }
@media (max-width:630px) { header { grid-template-columns:1fr; gap:.6rem; } .brand-logo { order:-1; width:min(17rem,100%); } }
@media print {
  body { background:white; color:black; }
  main { margin:0; width:100%; }
  body.print-resume header, body.print-resume nav, body.print-resume [data-panel]:not(#builder-view), body.print-resume #builder-view > :not(#builder-content), body.print-resume #builder-content > :not(.resume-preview), body.print-resume footer { display:none !important; }
  body.print-resume #builder-view, body.print-resume .resume-preview { box-shadow:none; border:0; margin:0; padding:0; }
  body.print-resume .resume-preview h4 { break-after:avoid; }
}
</style>
</head>
<body><main>
<header>
<img class="brand-logo" src="/logo.jpg" alt="SkillRegistry by Ahsun" width="330" height="100">
<div><h1>See how your experience fits the job.</h1>
<p>Compare your resume with a job posting. Get an evidence-based breakdown of what matches, what’s unclear, and what’s missing.</p></div>
</header>
<nav class="nav" aria-label="SkillRegistry">
<button type="button" data-view="match" aria-current="page">Job match</button>
<button type="button" data-view="dashboard">Dashboard</button>
<button type="button" data-view="learning">Learning</button>
<button type="button" data-view="builder">Résumé builder</button>
<button type="button" data-view="vault">Document vault</button>
<button type="button" data-view="account">Sign in</button>
</nav>
<div id="match-view" data-panel>
<form id="analyzer">
<div class="form-heading"><h2>Compare a resume</h2><button id="demo" class="secondary" type="button">Load a test example</button></div>
<div class="columns">
<div>
<label for="pdf">Resume PDF</label>
<input id="pdf" type="file" accept=".pdf,application/pdf">
<p class="help">PDFs with selectable text, up to 10 MB and 20 pages.</p>
<label for="resume">Resume text</label>
<textarea id="resume" rows="8" maxlength="12000" required placeholder="Paste your resume or choose a PDF to extract its text"></textarea>
<p class="help" id="pdf-status" role="status">Review this text and remove contact details before sending.</p>
</div>
<div>
<label for="job">Job description</label>
<textarea id="job" rows="12" maxlength="9000" required placeholder="Paste the duties and qualifications from a job posting"></textarea>
</div>
</div>
<label for="consent" class="consent"><input id="consent" required type="checkbox"><span>I agree to send the reviewed resume text and job description to Cloudflare Workers AI for this analysis.</span></label>
<p class="help">The PDF is read on your device. Submissions are saved as report excerpts only when you choose Save report. <a href="https://developers.cloudflare.com/workers-ai/platform/data-usage/" target="_blank" rel="noopener noreferrer">How Cloudflare handles AI data</a></p>
<button id="analyze" type="submit">Analyze requirements</button>
<p id="status" role="status"></p>
</form>
<section id="results" hidden aria-labelledby="results-title">
<div class="score-banner">
<div class="gauge" id="gauge"><p class="score" id="score"></p></div>
<div><h2 id="results-title" tabindex="-1">Job requirement coverage</h2><p id="summary"></p>
<p class="formula">Required ×3, unspecified ×2, preferred ×1. Partial evidence earns half credit.</p></div>
</div>
<div class="stats">
<div><strong id="supported-count"></strong><span>Supported</span></div>
<div><strong id="partial-count"></strong><span>Partial</span></div>
<div><strong id="gap-count"></strong><span>No evidence</span></div>
</div>
<div class="breakdown">
<h3>Skills gap overview</h3>
<div class="segments" aria-hidden="true"><span id="bar-supported"></span><span id="bar-partial"></span><span id="bar-gap"></span></div>
<p class="help" id="gap-overview"></p>
</div>
<label for="priority">Show requirements</label>
<select id="priority"><option value="all">All priorities</option><option value="required">Required only</option><option value="preferred">Preferred only</option></select>
<div class="dashboard">
<div><h3>Supported requirements</h3><ul id="matched" class="cards"></ul></div>
<div><h3>Partial or missing evidence</h3><ul id="missing" class="cards"></ul></div>
</div>
<p class="help">The AI selects up to 12 requirements. Read the quoted excerpts and check the original job posting before using the report to guide an application.</p>
<div class="actions">
<button id="learning-link" type="button">See recommended courses</button>
<button id="download" type="button" class="secondary">Download report</button>
</div>
<div id="save-controls">
<label for="report-title">Report name</label>
<input id="report-title" maxlength="100" type="text" placeholder="Example: Data analyst internship">
<p class="help">Saving stores the report, including quoted excerpts, in your signed-in account.</p>
<button id="save" type="button" class="secondary">Save report</button>
<p id="save-status" role="status"></p>
</div>
</section>
</div>
<section id="dashboard-view" data-panel hidden>
<h2>Dashboard</h2>
<p class="help">Open or delete your saved job matches.</p>
<div id="history-stats" class="stats" hidden>
<div><strong id="history-count"></strong><span>Recent reports</span></div>
<div><strong id="history-average"></strong><span>Average coverage</span></div>
<div><strong id="history-best"></strong><span>Highest coverage</span></div>
</div>
<p id="history-status" role="status"></p><ul id="history" class="cards"></ul>
</section>
<section id="learning-view" data-panel hidden>
<h2>Learning plan</h2>
<p class="help">Direct free lessons for detected gaps. Required skills appear first.</p>
<ul id="courses" class="cards"></ul>
</section>
<section id="builder-view" data-panel hidden>
<h2>Résumé builder</h2>
<p class="help">Draft a résumé using skills you can support with real examples.</p>
<div id="builder-content" class="columns">
<div>
<label for="draft-name">Name</label><input id="draft-name" type="text" maxlength="120" autocomplete="name">
<label for="draft-headline">Headline or contact details</label><input id="draft-headline" type="text" maxlength="180">
<label for="draft-skills">Skills</label><textarea id="draft-skills" maxlength="1000" rows="3"></textarea>
<label for="draft-experience">Experience and projects</label><textarea id="draft-experience" maxlength="6000" rows="6"></textarea>
<label for="draft-education">Education and certifications</label><textarea id="draft-education" maxlength="3000" rows="4"></textarea>
<div class="actions file-actions"><button id="draft-match" type="button">Use in job match</button><button id="draft-print" type="button" class="secondary">Print or save as PDF</button></div>
<p class="help" id="draft-status" role="status"></p>
</div>
<article class="resume-preview">
<h3 id="preview-name">Your name</h3><p id="preview-headline"></p>
<div id="preview-section-skills" hidden><h4>Skills</h4><p id="preview-skills"></p></div>
<div id="preview-section-experience" hidden><h4>Experience and projects</h4><p id="preview-experience"></p></div>
<div id="preview-section-education" hidden><h4>Education and certifications</h4><p id="preview-education"></p></div>
</article>
</div>
</section>
<section id="vault-view" data-panel hidden>
<h2>Document vault</h2>
<p class="help">Keep résumés and career documents private. The free site shares 1 GB of project storage. This vault accepts PDFs, Word documents, and text files up to 10 MiB each.</p>
<div id="vault-controls" hidden>
<label for="vault-file">Choose a document</label>
<input id="vault-file" type="file" accept=".pdf,.docx,.txt">
<div class="actions file-actions"><button id="vault-upload" type="button">Save to vault</button><button id="vault-refresh" type="button" class="secondary">Refresh</button></div>
</div>
<p id="vault-status" role="status"></p>
<ul id="vault-list" class="cards"></ul>
<button id="vault-more" class="secondary" type="button" hidden>Load more documents</button>
</section>
<section id="account-view" data-panel hidden>
<h2>Your account</h2>
<p id="account-state" role="status">Checking sign-in availability…</p>
<div class="actions account-actions">
<button type="button" id="google" hidden>Continue with Google</button>
<button type="button" id="github" class="secondary" hidden>Continue with GitHub</button>
<button type="button" id="linkedin_oidc" class="secondary" hidden>Continue with LinkedIn</button>
<button type="button" id="discord" class="secondary" hidden>Continue with Discord</button>
<button type="button" id="sign-out" class="secondary" hidden>Sign out</button>
</div>
</section>
<!--SUPPORT_LINK-->
</main><script type="module">
async function readPdf(file) {
  if (!/\\.pdf$/i.test(file.name) || file.size > 10 * 1024 * 1024) {
    throw new Error("Choose a PDF up to 10 MB, or paste your resume text.");
  }
  try {
    const cdn = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/";
    const pdfjs = await import(cdn + "pdf.min.mjs");
    pdfjs.GlobalWorkerOptions.workerSrc = cdn + "pdf.worker.min.mjs";
    const loading = pdfjs.getDocument({
      data: await file.arrayBuffer(),
      isEvalSupported: false,
      useWorkerFetch: false,
    });
    try {
      const document = await loading.promise;
      if (document.numPages > 20) return "";
      const pages = [];
      for (let i = 1; i <= document.numPages; i++) {
        const page = await document.getPage(i);
        const content = await page.getTextContent();
        pages.push(content.items.map((item) => (item.str ?? "") + (item.hasEOL ? "\\n" : " ")).join(""));
        page.cleanup();
      }
      return pages.join("\\n").trim();
    } finally {
      await loading.destroy();
    }
  } catch {
    throw new Error("This PDF couldn’t be read. Check your connection or paste the resume text. Password-protected PDFs need to be unlocked first.");
  }
}


const byId = (id) => document.getElementById(id);
const resume = byId("resume");
const job = byId("job");
const consent = byId("consent");
const pdfInput = byId("pdf");
const pdfStatus = byId("pdf-status");
const form = byId("analyzer");
const status = byId("status");
const results = byId("results");
const analyze = byId("analyze");
let readingPdf = false;

form.addEventListener("input", () => {
  resetReport();
  status.textContent = "";
});

byId("demo").addEventListener("click", () => {
  resume.value = "Built an automation that fetched records from three APIs every night, checked for missing values, and loaded the records into PostgreSQL. Used Git to review changes with my team.";
  job.value = "Required: Experience building data pipelines. At least two years of professional experience. Preferred: Experience with Git and Docker.";
  pdfInput.value = "";
  consent.checked = false;
  pdfStatus.textContent = "Example loaded. Review the text before sending.";
  resetReport();
  status.textContent = "";
});

pdfInput.addEventListener("change", async () => {
  const file = pdfInput.files[0];
  if (!file) return;
  readingPdf = true;
  for (const field of form.elements) field.disabled = true;
  consent.checked = false;
  resetReport();
  pdfStatus.textContent = "Extracting text…";
  try {
    const text = await readPdf(file);
    if (!text) throw new Error("No selectable text found, or the PDF exceeds 20 pages. Paste the resume text.");
    if (text.length > 12000) throw new Error("The extracted text exceeds 12,000 characters. Paste the relevant sections.");
    resume.value = text;
    pdfStatus.textContent = "Text extracted. Remove contact details and review it before sending.";
  } catch (error) {
    pdfStatus.textContent = error.message;
  } finally {
    pdfInput.value = "";
    readingPdf = false;
    for (const field of form.elements) field.disabled = false;
  }
});

function renderCards(id, items) {
  const list = byId(id);
  list.replaceChildren();
  if (!items.length) {
    const empty = document.createElement("li");
    empty.textContent = "No requirements in this group.";
    list.append(empty);
  }
  for (const item of items) {
    const card = document.createElement("li");
    const decision = document.createElement("strong");
    const badge = document.createElement("span");
    decision.textContent = {supported:"Supported", partial:"Partially supported", no_evidence:"No evidence found"}[item.status];
    badge.textContent = item.priority[0].toUpperCase() + item.priority.slice(1);
    badge.className = "badge " + item.priority;
    card.append(decision, badge);
    for (const text of [
      "Job posting: “" + item.jobQuote + "”",
      item.resumeQuote && "Resume evidence: “" + item.resumeQuote + "”",
      item.explanation,
    ]) {
      if (!text) continue;
      const line = document.createElement("p");
      line.textContent = text;
      card.append(line);
    }
    if (item.status !== "supported") {
      for (const course of currentReport?.courses ?? []) {
        if (!Array.isArray(course.forQuotes) || !course.forQuotes.includes(item.jobQuote)) continue;
        const link = courseLink(course);
        if (link) {
          const line = document.createElement("p");
          line.append(link);
          card.append(line);
        }
      }
    }
    list.append(card);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (readingPdf || analyze.disabled) return;
  const input = {resume: resume.value, job: job.value, consent: consent.checked};
  const submitter = user?.id;
  for (const field of form.elements) field.disabled = true;
  resetReport();
  status.textContent = "Analyzing requirements and checking evidence…";
  try {
    const response = await fetch("/api/analyze", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(input),
    });
    const report = await response.json();
    if (!response.ok) throw new Error(report.error);
    if (submitter !== user?.id) return;
    showReport(report);
    byId("results-title").focus();
    status.textContent = "";
  } catch (error) {
    status.textContent = error.message || "Analysis failed. Please try again.";
  } finally {
    for (const field of form.elements) field.disabled = false;
  }
});

let currentReport = null;
let client = null;
let user = null;
let authConfig = null;
let authMessage = "";
let reportsVersion = 0;
const historyTable = "skillregistry_reports";
const resultsTitle = byId("results-title");
const historyList = byId("history");
const accountState = byId("account-state");
const courseList = byId("courses");

function switchView(name) {
  for (const panel of document.querySelectorAll("[data-panel]")) panel.hidden = panel.id !== name + "-view";
  for (const button of document.querySelectorAll("[data-view]")) {
    if (button.dataset.view === name) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  }
  if (name === "dashboard") void loadHistory();
  if (name === "vault") void loadVault();
}
for (const button of document.querySelectorAll("[data-view]")) {
  button.addEventListener("click", () => switchView(button.dataset.view));
}

function addNote(list, message) {
  const row = document.createElement("li");
  row.textContent = message;
  list.append(row);
}

function resetReport() {
  currentReport = null;
  results.hidden = true;
  byId("save-status").textContent = "";
  courseList.replaceChildren();
  addNote(courseList, "Run a job match or open a saved report to see relevant courses.");
}

function courseLink(course) {
  let url;
  try { url = new URL(course.url); } catch { return null; }
  if (url.protocol !== "https:") return null;
  const link = document.createElement("a");
  link.href = url.href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = course.title + " ↗";
  return link;
}

function showCourses(courses) {
  courseList.replaceChildren();
  if (!courses.length) addNote(courseList, "No direct course in our catalog matches the gaps in this report.");
  for (const course of courses) {
    const link = courseLink(course);
    if (!link) continue;
    const card = document.createElement("li");
    const skill = document.createElement("strong");
    skill.textContent = course.skill;
    const provider = document.createElement("p");
    provider.textContent = course.provider + (course.required ? " · Required skill gap" : "");
    const progressLabel = document.createElement("label");
    progressLabel.className = "course-progress";
    const complete = document.createElement("input");
    complete.type = "checkbox";
    const progressKey = "skillregistry-course:" + (user?.id || "guest") + ":" + course.url;
    try { complete.checked = localStorage.getItem(progressKey) === "done"; } catch {}
    complete.addEventListener("change", () => {
      try {
        if (complete.checked) localStorage.setItem(progressKey, "done");
        else localStorage.removeItem(progressKey);
      } catch {
        complete.checked = !complete.checked;
        progressLabel.lastChild.textContent = "Progress storage is unavailable";
      }
    });
    progressLabel.append(complete, document.createTextNode("Completed on this device"));
    card.append(skill, provider, link, progressLabel);
    courseList.append(card);
  }
}

function filterReport() {
  if (!currentReport) return;
  const priority = byId("priority").value;
  const items = currentReport.requirements.filter((item) => priority === "all" || item.priority === priority);
  renderCards("matched", items.filter((item) => item.status === "supported"));
  renderCards("missing", items.filter((item) => item.status !== "supported"));
}

function showReport(report) {
  currentReport = report;
  byId("score").textContent = report.score + "%";
  byId("gauge").style.setProperty("--percent", report.score + "%");
  byId("summary").textContent = report.requirements.length + " requirements evaluated.";
  const groups = [
    ["supported", "supported-count", "bar-supported"],
    ["partial", "partial-count", "bar-partial"],
    ["no_evidence", "gap-count", "bar-gap"],
  ];
  const counts = groups.map(([state, counter, bar]) => {
    const count = report.requirements.filter((item) => item.status === state).length;
    byId(counter).textContent = count;
    byId(bar).style.width = (100 * count / Math.max(1, report.requirements.length)) + "%";
    return count;
  });
  byId("gap-overview").textContent = counts[0] + " supported · " + counts[1] + " partial · " + counts[2] + " without evidence";
  byId("priority").value = "all";
  byId("save-status").textContent = "";
  byId("save").disabled = false;
  filterReport();
  showCourses(report.courses);
  results.hidden = false;
}

byId("priority").addEventListener("change", filterReport);
byId("learning-link").addEventListener("click", () => switchView("learning"));
byId("download").addEventListener("click", () => {
  if (!currentReport) return;
  const lines = ["SkillRegistry job match", "Coverage: " + currentReport.score + "%"];
  for (const item of currentReport.requirements) {
    lines.push("", item.jobQuote, "Status: " + item.status.replaceAll("_", " ") + " · " + item.priority,
      item.resumeQuote ? "Evidence: " + item.resumeQuote : "", item.explanation);
  }
  if (currentReport.courses.length) {
    lines.push("", "Recommended learning");
    for (const course of currentReport.courses) lines.push(course.title + " — " + course.url);
  }
  const url = URL.createObjectURL(new Blob([lines.join("\\n")], {type: "text/plain;charset=utf-8"}));
  const link = document.createElement("a");
  link.href = url;
  link.download = "skillregistry-report.txt";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
});

function accountDisplay(nextUser) {
  if (user?.id !== nextUser?.id) {
    reportsVersion++;
    historyList.replaceChildren();
    clearVault();
  }
  if (user && user.id !== nextUser?.id) {
    resume.value = "";
    job.value = "";
    consent.checked = false;
    byId("report-title").value = "";
    resetReport();
    for (const field of draftFields) byId("draft-" + field).value = "";
    renderDraft();
  }
  user = nextUser;
  for (const provider of socialProviders) {
    byId(provider).hidden = Boolean(user) || !client || !authConfig?.providers?.includes(provider);
  }
  byId("vault-controls").hidden = !user;
  if (!byId("vault-view").hidden) setTimeout(loadVault, 0);
  if (currentReport) showCourses(currentReport.courses);
  byId("sign-out").hidden = !user;
  document.querySelector('[data-view="account"]').textContent = user ? "Account" : "Sign in";
  accountState.textContent = user ? "Signed in as " + (user.email || "your account") : authMessage || "Sign in to save and reopen job matches.";
  if (!byId("dashboard-view").hidden) setTimeout(loadHistory, 0);
}

async function initializeAuth() {
  try {
    const response = await fetch("/api/config");
    if (!response.ok) throw new Error("Configuration unavailable");
    ({auth: authConfig} = await response.json());
    if (!authConfig) {
      accountState.textContent = "Sign-in is not configured yet. You can still analyze and download a report.";
      return;
    }
    const {createClient} = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.89.0/+esm");
    client = createClient(authConfig.url, authConfig.key, {auth: {flowType: "pkce", detectSessionInUrl: true}});
    if (new URL(location.href).searchParams.has("error")) authMessage = "Sign-in was cancelled or failed. Try again.";
    client.auth.onAuthStateChange((_event, session) => accountDisplay(session?.user || null));
    const {data, error} = await client.auth.getSession();
    if (error) authMessage = "Could not restore sign-in. Try again.";
    accountDisplay(data?.session?.user || null);
  } catch {
    accountState.textContent = "Sign-in could not load. You can still analyze and download a report.";
  }
}

const socialProviders = ["google", "github", "linkedin_oidc", "discord"];
for (const provider of socialProviders) {
  byId(provider).addEventListener("click", async () => {
    if (!client) return;
    try {
      const {error} = await client.auth.signInWithOAuth({provider, options: {redirectTo: location.origin + "/"}});
      if (error) throw error;
    } catch {
      accountState.textContent = "Could not start sign-in. Check the provider settings or try again.";
    }
  });
}

byId("sign-out").addEventListener("click", async () => {
  try {
    const {error} = await client.auth.signOut({scope:"local"});
    if (error) throw error;
  } catch {
    accountState.textContent = "Sign-out failed. Please try again.";
  }
});

byId("save").addEventListener("click", async () => {
  if (!currentReport) return;
  if (!user || !client) {
    switchView("account");
    return;
  }
  const title = byId("report-title").value.trim() || "Job match";
  const report = currentReport;
  const saveButton = byId("save");
  const saveStatus = byId("save-status");
  saveButton.disabled = true;
  saveStatus.textContent = "Saving…";
  try {
    const {error} = await client.from(historyTable).insert({title, report});
    if (error) throw error;
    if (report === currentReport) saveStatus.textContent = "Saved to your dashboard.";
  } catch {
    if (report === currentReport) {
      saveStatus.textContent = "Couldn’t save the report. Check your connection and try again.";
      saveButton.disabled = false;
    }
  }
});

function validSavedReport(report) {
  return Number.isInteger(report?.score) && report.score >= 0 && report.score <= 100 &&
    Array.isArray(report.requirements) && report.requirements.every((item) => item &&
      ["supported","partial","no_evidence"].includes(item.status) &&
      ["required","preferred","unspecified"].includes(item.priority) &&
      ["jobQuote","resumeQuote","explanation"].every((key) => typeof item[key] === "string")) &&
    Array.isArray(report.courses) && report.courses.every((item) => item && typeof item.url === "string");
}

function renderHistoryRow(row) {
  const card = document.createElement("li");
  const name = document.createElement("strong");
  name.textContent = row.title;
  const summary = document.createElement("p");
  summary.textContent = row.report.score + "% coverage · " + new Date(row.created_at).toLocaleDateString();
  const actions = document.createElement("div");
  actions.className = "actions";
  const open = document.createElement("button");
  open.type = "button";
  open.textContent = "Open";
  open.addEventListener("click", () => {
    switchView("match");
    byId("report-title").value = row.title;
    showReport(row.report);
    byId("save").disabled = true;
    resultsTitle.focus();
  });
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "secondary";
  remove.textContent = "Delete";
  remove.addEventListener("click", async () => {
    if (!window.confirm("Delete this saved report?")) return;
    remove.disabled = true;
    try {
      const {error} = await client.from(historyTable).delete().eq("id", row.id);
      if (error) throw error;
      await loadHistory();
    } catch {
      byId("history-status").textContent = "Couldn’t delete the report. Try again.";
      remove.disabled = false;
    }
  });
  actions.append(open, remove);
  card.append(name, summary, actions);
  return card;
}

async function loadHistory() {
  const version = ++reportsVersion;
  const historyStatus = byId("history-status");
  historyList.replaceChildren();
  byId("history-stats").hidden = true;
  if (!user || !client) {
    historyStatus.textContent = "Sign in to see your saved matches.";
    return;
  }
  historyStatus.textContent = "Loading saved matches…";
  try {
    const {data, error} = await client.from(historyTable).select("id,title,report,created_at")
      .order("created_at", {ascending:false}).limit(25);
    if (version !== reportsVersion) return;
    if (error) throw error;
    const valid = data.filter(({report}) => validSavedReport(report));
    historyStatus.textContent = valid.length ? "Showing your latest saved matches." : "No saved reports yet.";
    for (const row of valid) historyList.append(renderHistoryRow(row));
    if (valid.length) {
      const scores = valid.map(({report}) => report.score);
      byId("history-count").textContent = scores.length;
      byId("history-average").textContent = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) + "%";
      byId("history-best").textContent = Math.max(...scores) + "%";
      byId("history-stats").hidden = false;
    }
  } catch {
    if (version === reportsVersion) historyStatus.textContent = "Saved matches could not load. Try again.";
  }
}

const draftFields = ["name", "headline", "skills", "experience", "education"];

function renderDraft() {
  for (const field of draftFields) {
    const value = byId("draft-" + field).value.trim();
    byId("preview-" + field).textContent = value || (field === "name" ? "Your name" : "");
    const section = byId("preview-section-" + field);
    if (section) section.hidden = !value;
  }
}

for (const field of draftFields) byId("draft-" + field).addEventListener("input", renderDraft);

byId("draft-match").addEventListener("click", () => {
  const evidence = draftFields.slice(2).map((field) => byId("draft-" + field).value.trim()).filter(Boolean);
  if (!evidence.length) {
    byId("draft-status").textContent = "Add skills, experience, or education first.";
    return;
  }
  resume.value = evidence.join("\\n\\n");
  consent.checked = false;
  resetReport();
  switchView("match");
  resume.focus();
});

byId("draft-print").addEventListener("click", () => {
  document.body.classList.add("print-resume");
  window.print();
});
window.addEventListener("afterprint", () => document.body.classList.remove("print-resume"));

const vaultBucket = "skillregistry-vault";
const pageSize = 30;
const maxDocumentBytes = 10 * 1024 * 1024;
const documentTypes = {
  pdf: "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  txt: "text/plain",
};
const vaultList = byId("vault-list");
const vaultStatus = byId("vault-status");
const vaultFile = byId("vault-file");
const vaultMore = byId("vault-more");
const vaultUpload = byId("vault-upload");
let vaultVersion = 0;
let vaultOffset = 0;
let vaultBytes = 0;
let vaultBusy = false;

function clearVault() {
  vaultVersion++;
  vaultBusy = false;
  vaultOffset = 0;
  vaultBytes = 0;
  vaultList.replaceChildren();
  vaultMore.hidden = true;
  vaultMore.disabled = false;
  vaultUpload.disabled = false;
  vaultFile.value = "";
  vaultStatus.textContent = "";
}

function fileSize(bytes) {
  return bytes < 1024 ? bytes + " B" : bytes < 1048576 ?
    (bytes / 1024).toFixed(1) + " KiB" : (bytes / 1048576).toFixed(1) + " MiB";
}

function documentName(objectName) {
  return objectName.replace(/^[0-9a-f-]{36}--/i, "");
}

function objectRow(file, owner) {
  const row = document.createElement("li");
  const name = document.createElement("strong");
  const actions = document.createElement("div");
  row.className = "vault-details";
  name.textContent = documentName(file.name);
  actions.className = "actions file-actions";

  const download = document.createElement("button");
  download.type = "button";
  download.textContent = "Download";
  download.addEventListener("click", async () => {
    if (user?.id !== owner) return;
    download.disabled = true;
    try {
      const {data, error} = await client.storage.from(vaultBucket).download(owner + "/" + file.name);
      if (error) throw error;
      if (user?.id !== owner) return;
      const url = URL.createObjectURL(new Blob([data], {type:"application/octet-stream"}));
      const link = document.createElement("a");
      link.href = url;
      link.download = documentName(file.name);
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } catch {
      if (user?.id === owner) vaultStatus.textContent = "Couldn’t download the file. Try again.";
    } finally {
      download.disabled = false;
    }
  });

  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "secondary";
  remove.textContent = "Delete";
  remove.addEventListener("click", async () => {
    if (user?.id !== owner || !window.confirm("Delete " + documentName(file.name) + "?")) return;
    remove.disabled = true;
    try {
      const {error} = await client.storage.from(vaultBucket).remove([owner + "/" + file.name]);
      if (error) throw error;
      if (user?.id === owner) await loadVault();
    } catch {
      if (user?.id === owner) vaultStatus.textContent = "Couldn’t delete the file. Try again.";
      remove.disabled = false;
    }
  });
  actions.append(download, remove);
  const size = document.createElement("p");
  size.className = "help";
  size.textContent = fileSize(Number(file.metadata?.size) || 0);
  row.append(name, size, actions);
  return row;
}

async function loadVault(append = false) {
  if (append && vaultBusy) return;
  if (!append) {
    vaultOffset = 0;
    vaultBytes = 0;
    vaultList.replaceChildren();
    vaultMore.hidden = true;
  }
  const version = ++vaultVersion;
  const owner = user?.id;
  if (!owner || !client) {
    vaultStatus.textContent = "Sign in to upload and manage your private documents.";
    return;
  }
  vaultBusy = true;
  vaultMore.disabled = true;
  vaultStatus.textContent = "Loading documents…";
  try {
    const {data, error} = await client.storage.from(vaultBucket).list(owner, {
      limit: pageSize, offset: vaultOffset, sortBy: {column:"created_at", order:"desc"},
    });
    if (version !== vaultVersion || user?.id !== owner) return;
    if (error) throw error;
    vaultOffset += data.length;
    for (const file of data.filter((item) => item.id)) {
      vaultBytes += Number(file.metadata?.size) || 0;
      vaultList.append(objectRow(file, owner));
    }
    vaultMore.hidden = data.length < pageSize;
    vaultStatus.textContent = vaultList.children.length ?
      vaultList.children.length + " documents shown · " + fileSize(vaultBytes) :
      "No documents saved yet.";
  } catch {
    if (version === vaultVersion) vaultStatus.textContent = "Couldn’t load your vault. Try Refresh.";
  } finally {
    if (version === vaultVersion) {
      vaultBusy = false;
      vaultMore.disabled = false;
    }
  }
}

vaultMore.addEventListener("click", () => loadVault(true));
byId("vault-refresh").addEventListener("click", () => loadVault());
vaultUpload.addEventListener("click", async () => {
  const owner = user?.id;
  if (!owner || !client || vaultUpload.disabled) return;
  const file = vaultFile.files[0];
  const extension = file?.name.split(".").pop().toLowerCase();
  if (!file || !file.name.includes(".") || !Object.hasOwn(documentTypes, extension) || !file.size || file.size > maxDocumentBytes) {
    vaultStatus.textContent = "Choose a PDF, DOCX, or TXT file between 1 byte and 10 MiB.";
    return;
  }
  const base = file.name.replace(/\\.[^.]+$/, "").normalize("NFKD")
    .replace(/[^a-zA-Z0-9._ -]+/g, "_").slice(0, 100).trim() || "document";
  const key = owner + "/" + crypto.randomUUID() + "--" + base + "." + extension;
  vaultUpload.disabled = true;
  vaultStatus.textContent = "Uploading privately…";
  try {
    const {error} = await client.storage.from(vaultBucket).upload(key, file, {
      contentType: documentTypes[extension], upsert:false,
    });
    if (error) throw error;
    if (user?.id !== owner) return;
    vaultFile.value = "";
    await loadVault();
  } catch {
    if (user?.id === owner) vaultStatus.textContent = "Upload failed. Try again or check the project’s available storage.";
  } finally {
    if (user?.id === owner) vaultUpload.disabled = false;
  }
});

resetReport();
void initializeAuth();

</script></body></html>
`;
