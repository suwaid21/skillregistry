const courses = [
  [/\bpython\b/i, "Python", "CS50’s Introduction to Programming with Python", "Harvard CS50", "https://cs50.harvard.edu/python/"],
  [/\bsql\b/i, "SQL", "Interactive SQL lessons", "SQLBolt", "https://sqlbolt.com/"],
  [/\bpower\s?bi\b/i, "Power BI", "Get started building with Power BI", "Microsoft Learn", "https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/"],
  [/\bdocker\b|\bcontainerization\b/i, "Docker", "Docker workshop", "Docker Docs", "https://docs.docker.com/get-started/workshop/"],
  [/\bkubernetes\b|\bk8s\b/i, "Kubernetes", "Learn Kubernetes Basics", "Kubernetes Docs", "https://kubernetes.io/docs/tutorials/kubernetes-basics/"],
  [/\bgit(?:hub)?\b|\bversion control\b/i, "Git and GitHub", "Introduction to GitHub", "GitHub Skills", "https://github.com/skills/introduction-to-github"],
  [/\bmachine learning\b|\bml\b/i, "Machine learning", "Machine Learning Crash Course", "Google for Developers", "https://developers.google.com/machine-learning/crash-course"],
  [/\bjavascript\b|\bhtml\b|\bcss\b|\bfront[- ]end\b/i, "Web development", "Learn web development", "MDN", "https://developer.mozilla.org/en-US/docs/Learn_web_development"],
  [/\btableau\b/i, "Tableau", "Free training videos", "Tableau", "https://www.tableau.com/learn/training"],
  [/\bpostgres(?:ql)?\b/i, "PostgreSQL", "PostgreSQL tutorial", "PostgreSQL Docs", "https://www.postgresql.org/docs/current/tutorial.html"],
  [/\bpandas\b/i, "pandas", "Getting started tutorials", "pandas Docs", "https://pandas.pydata.org/docs/getting_started/intro_tutorials/"],
  [/\breact(?:\.js)?\b/i, "React", "React Quick Start", "React Docs", "https://react.dev/learn"],
  [/\bexcel\b/i, "Excel", "Excel video training", "Microsoft Support", "https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb"],
  [/\bstatistics\b|\bprobability\b/i, "Statistics", "Statistics and probability", "Khan Academy", "https://www.khanacademy.org/math/statistics-probability"],
  [/\bapache airflow\b|\bairflow\b/i, "Apache Airflow", "Airflow tutorials", "Apache Airflow Docs", "https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html"],
  [/\bazure\b/i, "Azure", "Introduction to Azure fundamentals", "Microsoft Learn", "https://learn.microsoft.com/en-us/training/modules/intro-to-azure-fundamentals/"],
];

export function findCourses(requirements) {
  const gaps = requirements.filter(({status}) => status !== "supported");
  return courses.flatMap(([pattern, skill, title, provider, url]) => {
    const related = gaps.filter(({jobQuote}) => pattern.test(jobQuote));
    return related.length ? [{ skill, title, provider, url, required: related.some(({priority}) => priority === "required"), forQuotes: related.map(({jobQuote}) => jobQuote) }] : [];
  }).sort((a, b) => Number(b.required) - Number(a.required));
}
