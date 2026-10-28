
const GITHUB_USERNAME = "spydaspider";

const REPOSITORIES_URL =
  `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;

const projectGrid = document.querySelector("#project-grid");
const projectStatus = document.querySelector("#project-status");
const languageFilter = document.querySelector("#language-filter");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const contactForm = document.querySelector("#contact-form");
const emailInput = document.querySelector("#email");
const formStatus = document.querySelector("#form-status");

let repositories = [];

/* Escape text before inserting GitHub data into HTML. */
function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

/* Format repository dates for display. */
function formatDate(dateString) {
  if (!dateString) {
    return "Date unavailable";
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
}

/* Create a card for each public GitHub repository. */
function projectCard(repo) {
  const description =
    repo.description || "No description has been added yet.";

  const language = repo.language || "Other";

  const demoLink =
    typeof repo.homepage === "string" &&
    /^https?:\/\//i.test(repo.homepage)
      ? `
        <a
          class="project-link"
          href="${escapeHTML(repo.homepage)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live demo <span aria-hidden="true">↗</span>
        </a>
      `
      : "";

  return `
    <article class="project-card">
      <div class="project-card-top">
        <span class="project-icon" aria-hidden="true">↗</span>

        <span class="project-updated">
          Updated ${escapeHTML(formatDate(repo.updated_at))}
        </span>
      </div>

      <h3>${escapeHTML(repo.name.replace(/[-_]/g, " "))}</h3>

      <p class="project-description">
        ${escapeHTML(description)}
      </p>

      <div class="project-meta">
        <span class="language-dot" aria-hidden="true"></span>
        <span>${escapeHTML(language)}</span>

        <span class="meta-spacer"></span>

        <span title="GitHub stars">
          ☆ ${Number(repo.stargazers_count) || 0}
        </span>
      </div>

      <div class="project-links">
        <a
          class="project-link"
          href="${escapeHTML(repo.html_url)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source <span aria-hidden="true">↗</span>
        </a>

        ${demoLink}
      </div>
    </article>
  `;
}

/* Show the repositories matching the selected language. */
function renderProjects() {
  const selectedLanguage = languageFilter.value;

  const visibleRepositories = repositories.filter((repo) => {
    const language = repo.language || "Other";

    return (
      selectedLanguage === "all" ||
      language === selectedLanguage
    );
  });

  if (visibleRepositories.length === 0) {
    projectGrid.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon" aria-hidden="true">⌘</span>

        <h3>No projects to display</h3>

        <p>
          There are no public repositories matching this selection.
          Publish public projects on GitHub for them to appear here.
        </p>

        <a
          class="button button-primary"
          href="https://github.com/${GITHUB_USERNAME}?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open GitHub repositories ↗
        </a>
      </div>
    `;

    return;
  }

  projectGrid.innerHTML = visibleRepositories
    .map(projectCard)
    .join("");
}

/* Fetch public repositories from GitHub. */
async function loadProjects() {
  try {
    const response = await fetch(REPOSITORIES_URL, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub returned status ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Unexpected response from GitHub");
    }

    repositories = data
      .filter((repo) => !repo.fork && !repo.archived)
      .sort(
        (first, second) =>
          new Date(second.updated_at) - new Date(first.updated_at)
      );

    const languages = [
      ...new Set(
        repositories.map((repo) => repo.language || "Other")
      ),
    ].sort();

    languageFilter.innerHTML = `
      <option value="all">All languages</option>
      ${languages
        .map(
          (language) => `
            <option value="${escapeHTML(language)}">
              ${escapeHTML(language)}
            </option>
          `
        )
        .join("")}
    `;

    if (repositories.length === 0) {
      projectStatus.textContent =
        "No public project repositories were found.";
    } else {
      const projectWord =
        repositories.length === 1 ? "project" : "projects";

      projectStatus.textContent =
        `${repositories.length} public ${projectWord} loaded from GitHub.`;
    }

    renderProjects();
  } catch (error) {
    console.error("Unable to load GitHub projects:", error);

    projectStatus.textContent =
      "Projects could not be loaded right now.";

    projectGrid.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon" aria-hidden="true">↻</span>

        <h3>GitHub projects are temporarily unavailable</h3>

        <p>
          Please check your internet connection or visit my GitHub
          profile to browse the repositories directly.
        </p>

        <a
          class="button button-primary"
          href="https://github.com/${GITHUB_USERNAME}?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse repositories ↗
        </a>
      </div>
    `;
  }
}

/* Filter projects whenever the selected language changes. */
languageFilter.addEventListener("change", renderProjects);

/* Open and close the mobile navigation menu. */
menuToggle.addEventListener("click", () => {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation"
  );

  navLinks.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

/* Close the mobile menu after selecting a navigation link. */
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    navLinks.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  });
});

/* Validate the contact form before submitting it. */
contactForm.addEventListener("submit", (event) => {
  const email = emailInput.value.trim();

  if (email !== email.toLowerCase()) {
    event.preventDefault();

    formStatus.textContent =
      "Please enter your email address using lowercase letters.";

    emailInput.focus();
    return;
  }

  formStatus.textContent = "Submitting your message…";
});

/* Load the GitHub projects when the page starts. */
loadProjects();
