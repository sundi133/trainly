const icons = {
  graduation: '🎓', shield: '🛡️', sparkles: '✨', target: '🎯', layers: '🗂️', quiz: '✅',
  coach: '💬', chart: '📈', book: '📘', upload: '☁️', lock: '🔐', users: '👥', gauge: '⚡', calendar: '🗓️', file: '📄'
};

const roles = ['Employee', 'Manager', 'L&D Admin', 'HR Leader'];

const agents = [
  ['Learning Advisor', 'Creates personalized role and career learning paths.', '4-week path: AI product fluency, consultative selling, and assessment checkpoints.', icons.sparkles],
  ['Skill Gap Agent', 'Compares demonstrated skills with role expectations.', 'Highest gaps: data storytelling, objection handling, and prompt evaluation.', icons.target],
  ['Content Curator', 'Tags, summarizes, and maps trusted materials to learning goals.', 'Matched 18 internal docs, 6 videos, and 3 practical projects to active cohorts.', icons.layers],
  ['Assessment Agent', 'Generates quizzes, reflection questions, tasks, and feedback.', 'New 12-question quiz and manager-reviewed project rubric ready for publishing.', icons.quiz],
  ['Manager Coach', 'Suggests next actions for managers based on team progress.', 'Schedule coaching for 3 learners and approve 2 stretch assignments this week.', icons.coach],
  ['Analytics Agent', 'Summarizes adoption, completion, and skill-growth trends.', 'Activation is 74%; completion is trending 8 points above target for Q2.', icons.chart],
];

const learningItems = [
  ['AI-Assisted Customer Discovery', 'Interactive course', '2h 15m', 68, 'Jun 12', 'Recommended because sales discovery quality is below role benchmark.'],
  ['Data Storytelling for Quarterly Reviews', 'Workshop + quiz', '90m', 35, 'Jun 18', 'Prioritized by the Skill Gap Agent for upcoming manager presentations.'],
  ['Prompt Evaluation Practical', 'Project assessment', '3h', 12, 'Jun 24', 'Mapped to career goal: AI program lead readiness.'],
];

const skillGaps = [
  ['Consultative discovery', 72, 85, 'High'],
  ['Data storytelling', 58, 80, 'High'],
  ['AI prompt evaluation', 46, 70, 'Medium'],
  ['Stakeholder coaching', 76, 82, 'Low'],
];

const teamMembers = [
  ['Avery Chen', 'Account Executive', 78, 'Data storytelling', 'Assign live demo practice'],
  ['Mina Patel', 'CS Manager', 61, 'Prompt evaluation', 'Approve practical assessment'],
  ['Noah Brooks', 'Sales Engineer', 44, 'Executive communication', 'Schedule coaching check-in'],
];

const metrics = [
  ['Employee activation', '74%', '70% target', icons.users],
  ['Path completion', '63%', '60% target', icons.quiz],
  ['Admin effort saved', '32%', '30% target', icons.gauge],
  ['Recommendation relevance', '84%', '80% target', icons.sparkles],
];

const app = document.querySelector('#root');

app.innerHTML = `
  <main>
    <section class="hero section-shell">
      <nav class="top-nav" aria-label="Primary navigation">
        <div class="brand-lockup">
          <div class="logo-mark">${icons.graduation}</div>
          <div><p class="eyebrow">Votal Academy</p><strong>Agent-based L&D platform</strong></div>
        </div>
        <div class="role-switcher" aria-label="Role based access preview">
          ${roles.map((role) => `<button>${role}</button>`).join('')}
        </div>
      </nav>

      <div class="hero-grid">
        <div class="hero-copy">
          <p class="pill">${icons.shield} Secure RBAC · AI explainability · Audit-ready</p>
          <h1>Personalized learning journeys powered by specialized AI agents.</h1>
          <p class="hero-text">Help employees discover relevant learning, give managers team-skill visibility, and equip L&D teams with measurable, adaptive programs from one command center.</p>
          <div class="hero-actions">
            <a href="#employee-dashboard" class="primary-action">Explore dashboard ›</a>
            <a href="#agent-workflow" class="secondary-action">View agent workflow</a>
          </div>
        </div>
        <div class="hero-card" aria-label="AI generated learning path preview">
          <div class="card-header"><div><span class="eyebrow">Learning Advisor Agent</span><h2>4-week growth path</h2></div><span class="accent-icon">${icons.sparkles}</span></div>
          <div class="path-steps">
            ${['Profile + role benchmark', 'Skill-gap diagnosis', 'Curated content plan', 'Quiz + practical rubric'].map((step, index) => `<div class="path-step"><span>${index + 1}</span><p>${step}</p></div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section id="employee-dashboard" class="section-shell dashboard-grid">
      <div class="section-heading"><p class="eyebrow">Employee learning dashboard</p><h2>Assigned work, recommendations, deadlines, and skill progress in one view.</h2></div>
      <div class="learning-list">
        ${learningItems.map(([title, type, duration, progress, due, reason]) => `
          <article class="learning-card">
            <div class="learning-card-top"><span class="card-icon">${icons.book}</span><div><h3>${title}</h3><p>${type} · ${duration} · Due ${due}</p></div></div>
            <div class="progress-track"><span style="width: ${progress}%"></span></div>
            <footer><strong>${progress}% complete</strong><p>${reason}</p></footer>
          </article>`).join('')}
      </div>
      <aside class="quiz-panel"><span class="large-icon">${icons.quiz}</span><p class="eyebrow">Assessment Agent</p><h3>Quiz draft ready</h3><p>12 questions, 2 reflection prompts, and a practical task rubric generated from approved content sources.</p><button>Send to human review</button></aside>
    </section>

    <section class="section-shell split-section">
      <div><p class="eyebrow">Skill gap analysis</p><h2>Role expectations converted into prioritized development plans.</h2><p class="muted">The Skill Gap Agent compares profile data, manager input, assessments, and role benchmarks to explain why each learning item matters.</p></div>
      <div class="gap-panel">
        ${skillGaps.map(([skill, current, expected, priority]) => `<div class="gap-row"><div><strong>${skill}</strong><p>${current}% current · ${expected}% expected</p></div><span class="priority ${priority.toLowerCase()}">${priority}</span></div>`).join('')}
      </div>
    </section>

    <section id="agent-workflow" class="section-shell">
      <div class="section-heading center-heading"><p class="eyebrow">Specialized AI agents</p><h2>Automate the complete L&D workflow while keeping humans in control.</h2></div>
      <div class="agent-grid">
        ${agents.map(([name, mission, output, icon]) => `<article class="agent-card"><span class="large-icon">${icon}</span><h3>${name}</h3><p>${mission}</p><strong>${output}</strong></article>`).join('')}
      </div>
    </section>

    <section class="section-shell manager-admin-grid">
      <div class="manager-panel"><p class="eyebrow">Manager view</p><h2>Team progress and coaching next actions</h2>
        ${teamMembers.map(([name, role, completion, gap, action]) => `<div class="member-row"><div><strong>${name}</strong><p>${role} · ${completion}% complete · Gap: ${gap}</p></div><button>${action}</button></div>`).join('')}
      </div>
      <div class="admin-panel"><p class="eyebrow">Admin console</p><h2>Upload, curate, assign, and measure</h2><div class="upload-zone"><span class="large-icon">${icons.upload}</span><strong>Drop PDFs, videos, SOPs, or links</strong><p>Content Curator Agent tags, summarizes, and maps assets to cohorts and learning paths.</p></div><div class="admin-actions"><button>${icons.file} Upload content</button><button>${icons.calendar} Assign cohort</button><button>${icons.lock} Review audit log</button></div></div>
    </section>

    <section class="section-shell metrics-section">
      <div class="section-heading center-heading"><p class="eyebrow">Analytics and reporting</p><h2>Track adoption, learning effectiveness, overdue work, and capability growth.</h2></div>
      <div class="metric-grid">${metrics.map(([label, value, target, icon]) => `<article class="metric-card"><span>${icon}</span><span>${label}</span><strong>${value}</strong><p>${target}</p></article>`).join('')}</div>
      <div class="architecture-strip"><span>${icons.chart}</span><p><strong>MVP architecture:</strong> Static React-ready frontend, API-ready service layer, PostgreSQL skill data model, pgvector-ready content search, SSO-ready RBAC, and custom analytics dashboard.</p></div>
    </section>
  </main>`;
