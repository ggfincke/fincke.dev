## [1.19.0] - 2025-08-29

### Added
- **Interactive skill tooltips**: Added hover tooltips to skill pills showing related projects with status indicators
- **SkillTooltip component**: New display component with smart positioning and fade animations
- **Skill mappings**: Enhanced technology relationship mappings for project filtering

### Changed
- **Project refinements**: Streamlined portfolio technologies, added watchOS to SwimMate, improved footer version display
- **Code quality**: Applied Allman brace style, fixed JSX compliance, removed unnecessary ESLint comments

### Updated
- **Resume document**: Updated resume PDF with latest content and formatting

> Merged as PR #30

---

## [1.18.5-prerelease.20250829] - 2025-08-29

### Updated
- **Resume document**: Updated resume PDF with latest content and formatting

---

## [1.18.4-prerelease.20250828] - 2025-08-28

### Changed
- **SwimMate project**: Added watchOS to technology stack for more accurate platform representation
- **Portfolio project**: Streamlined technology list by removing redundant development tools (Node.js, Git, Git Hooks, Lighthouse CI, VS Code, ESLint) to focus on core technologies
- **Footer display**: Enhanced version display with dedicated badge styling for better visual hierarchy

---

## [1.18.3-prerelease.20250828] - 2025-08-28

### Fixed
- **JSX compliance**: Fixed missing key prop for React element in GODEL project description
- **Character encoding**: Properly escaped apostrophe in project description link text
- **Code quality**: Removed unnecessary ESLint disable comment from projects data

### Enhanced
- **Skill mappings**: Improved technology relationship mappings for more accurate project filtering
- **Cross-references**: Added bidirectional relationships between related technologies (React/Next.js, JavaScript/TypeScript, etc.)
- **AI/ML categories**: Enhanced deep learning and machine learning skill associations

---

## [1.18.2-prerelease.20250828] - 2025-08-28

### Changed
- **Code formatting**: Applied Allman brace style to skill display components
- **Portfolio project**: Enhanced description and expanded technology stack
- **Import organization**: Cleaned up import statements and ordering

---

## [1.18.1-prerelease.20250828] - 2025-08-28

### Added
- **Interactive skill tooltips**: Added hover tooltips to skill pills in About section showing related projects with status indicators
- **SkillTooltip component**: New display component with smart positioning, fade animations, and project status integration
- **Skill mappings data**: Extracted skill-to-technology mappings into dedicated file for maintainability

### Changed
- **SkillPill component**: Enhanced with hover state management, tooltip integration, and visual hover indicators
- **Component organization**: Moved SkillTooltip from ui/ to display/ directory following project patterns
- **Code structure**: Separated skill mapping logic from projects data for cleaner architecture

### Technical
- Added tooltip animation keyframes and CSS classes
- Extended SkillPillProps interface with hover configuration options
- Implemented precise project filtering with exact technology matching

---

## [1.18.0] - 2025-08-28

### Added
- **Version display**: Added version information to website metadata and footer with centralized utility module

### Changed
- **Public directory refactor**: Reorganized assets into structured hierarchy (assets/{icons, images, logos, projects})
- **Portfolio Website**: Added Lighthouse CI to project description and technologies
- **ESLint**: Improved configuration and lint scripts
- **Dependencies**: Updated browserslist and related packages

### Fixed
- **Git hooks**: Enhanced version synchronization between package.json and CHANGELOG.md
- Asset organization and file naming conventions

---

## [1.17.5-prerelease.20250828] - 2025-08-28

### Fixed
- **Version synchronization**: Enhanced git hooks to ensure package.json and CHANGELOG.md versions stay in sync
  - Pre-commit hook now verifies and auto-syncs versions when version files are manually staged
  - Pre-push hook validates version consistency before allowing push to dev branch
  - Fixed package.json version mismatch (1.17.0 → 1.17.5-prerelease.20250828)

---

## [1.17.4-prerelease.20250828] - 2025-08-28

### Changed
- **ESLint configuration**: Reformatted eslint.config.mjs and added ignores for build directories
- **Lint scripts**: Updated package.json to use direct eslint command

---

## [1.17.3-prerelease.20250828] - 2025-08-28

### Changed
- **Portfolio Website**: Added Lighthouse CI mention to project bullets and included "Lighthouse CI" in the technologies list.

---

## [1.17.2-prerelease.20250828] - 2025-08-28

### Changed
- **Public directory refactor**: Reorganized public assets for improved maintainability
  - Created structured hierarchy: assets/{icons, images, logos/{brand,companies}, projects/{images,documents}}
  - Renamed cryptic filenames to meaningful names (e.g., profile.jpg)
  - Moved all assets into categorized subdirectories
  - Updated all import paths across components and data files

### Fixed
- Asset organization issues with files scattered at root level
- Unclear file naming conventions

---

## [1.17.1-prerelease.20250828] - 2025-08-28

### Added
- **Version display**: Added version information to website metadata and footer
  - Display version in Next.js metadata generator field
  - Version number shown in footer copyright section
  - Created centralized version utility module (src/utils/version.ts)

### Changed
- **Dependencies**: Updated browserslist and related packages

---

## [1.17.0] - 2025-08-28

### Added
- **CI/CD Pipeline** with GitHub Actions: lint/type checking, build verification, Lighthouse CI with performance budgets (80-85% thresholds), parallel execution with caching
- **Automated Dependency Management**: Dependabot integration for npm/Docker/Actions with weekly updates, security alerts, and PR automation
- **Git Hooks System**: pre-commit versioning, pre-push CHANGELOG validation, installation via `npm run install-hooks`
- **Release Workflows**: automated version management synced with package.json, prerelease system with date-based versioning

### Changed
- **Portfolio Project**: Updated to highlight new CI/CD and Git hooks features
- **GitHub Actions**: Enhanced PR workflow with better error handling
- **Dependencies**: Updated project dependencies

### Fixed
- Lighthouse CI deprecation warnings and artifact upload issues

> Merged as PR #26

---

## [1.16.6-prerelease.20250828] - 2025-08-28

### Added
- **Dependabot integration**: Added comprehensive Dependabot configuration for automated dependency management.
  - Multi-package ecosystem support (npm, Docker, GitHub Actions)
  - Scheduled weekly updates with custom commit messages and PR labels
  - Security vulnerability alerts and automated updates
  - Proper reviewer assignment and dependency grouping

### Changed
- **GitHub Actions workflows**: Enhanced PR workflow and dependency management system.
  - Improved dependencies.yml workflow with better error handling
  - Updated tag-on-dev.yml workflow for better prerelease management
  - Updated project dependencies in package.json and package-lock.json

## [1.16.5-prerelease.20250828] - 2025-08-28
### Fixed
- Fix Lighthouse CI deprecation warnings by using npx instead of global install
- Fix artifact upload warning present when .lighthouseci directory doesn't exist

## [1.16.4-prerelease.20250828] - 2025-08-28

### Added
- **CI/CD Pipeline**: Added comprehensive GitHub Actions CI/CD pipeline with automated testing and quality checks.
  - Lint & Type Check job with ESLint and TypeScript validation
  - Build verification job with bundle size analysis
  - Lighthouse CI integration for performance, accessibility, SEO audits
  - Parallel job execution with dependency caching for faster CI runs
  - Status check reporting with comprehensive pipeline results
- **Lighthouse CI configuration**: Added lighthouserc.json with performance budgets and multi-page testing
  - Performance threshold: 80%, Accessibility/SEO/Best Practices: 85%
  - Tests all main pages (home, experience, projects) with 3 runs per page

## [1.16.3-prerelease.20250827] - 2025-08-27

### Changed
- **Portfolio project details**: Updated portfolio project to highlight new CI/CD pipeline and Git hooks system features.
  - Added descriptions of comprehensive GitHub Actions workflows for automated versioning and releases
  - Included details about dev branch prerelease system with date-based versioning
  - Added Git hooks system with pre-commit auto-versioning and pre-push CHANGELOG validation
  - Expanded technology stack to include GitHub Actions, Git Hooks, and CI/CD

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.16.2-prerelease.20250827] - 2025-08-27

### Added
- **Git hooks system**: Added comprehensive Git hooks system for development workflow enforcement.
  - Pre-commit hook automatically versions package.json and CHANGELOG.md on dev branch commits
  - Pre-push hook prevents pushing to dev branch without updating CHANGELOG.md
  - Installation script for easy hook setup via `npm run install-hooks`
  - Bypass option with `--no-verify` for edge cases
- **GitHub Actions improvements**: Enhanced automated release workflows with better version handling and package.json syncing.
  - Changed version parsing from CHANGELOG.md to package.json for better accuracy
  - Improved tag format conversion for prerelease versions
  - Automatic package.json version updates on prerelease creation
  - Enhanced error handling and validation

---

## [1.16.1-prerelease.20250827] - 2025-08-27

### Added
- **Automated release workflows**: Added GitHub Actions workflows for automated versioning and releases.
  - Release workflow triggered on PR merge to main (increments minor version)
  - Prerelease workflow triggered on dev push (uses CHANGELOG.md versioning)
- **Gitignore updates**: Added exclusions for documentation files (comment-style.md, TODO.md).

---

## [1.16.0] - 2025-08-26

### Changed
- **Code style standardization**: Applied Allman brace style and standardized comment style, import paths, and ordering across the codebase.
- **Type system modularization**: Modularized type system into domain-specific modules; unified responsive hooks.
- **Design token centralization**: Centralized status colors/transitions into design tokens; extracted breakpoint/duration constants.
- **Navigation refactoring**: Refactored navigation with consistent naming and consolidated configuration.
- **Skills section expansion**: Expanded Skills section with comprehensive technical stack overview.

> Merged as PR #25.

---

## [1.15.13] - 2025-08-26
### Changed
- Apply **Allman brace style** formatting across the codebase; standardize comment style. (Commit from PR #25)

## [1.15.12] - 2025-08-26
### Docs
- Update **README** to reflect the current state of the project. (Commit from PR #25)

## [1.15.11] - 2025-08-26
### Changed
- **Modularize type system** into domain‑specific modules. (Commit from PR #25)

## [1.15.10] - 2025-08-26
### Changed
- Centralize **status colors** and **transitions** into **design tokens**. (Commit from PR #25)

## [1.15.9] - 2025-08-26
### Changed
- Rename navigation components for consistent naming across the app. (Commit from PR #25)

## [1.15.8] - 2025-08-26
### Changed
- Consolidate the **navigation system** behind a centralized configuration. (Commit from PR #25)

## [1.15.7] - 2025-08-26
### Changed
- Merge and unify **responsive hooks** into a single responsive system. (Commit from PR #25)

## [1.15.6] - 2025-08-26
### Changed
- Modularize `ProjectCard` into smaller, focused components. (Commit from PR #25)

## [1.15.5] - 2025-08-26
### Reverted
- Revert modularization of `ProjectCard` to simplify the component structure. (Commit from PR #25)

## [1.15.4] - 2025-08-26
### Changed
- Standardize **import paths** and enforce consistent ordering. (Commit from PR #25)

## [1.15.3] - 2025-08-26
### Changed
- Extract centralized **constants** for breakpoints and durations. (Commit from PR #25)

## [1.15.2] - 2025-08-26
### Changed
- Standardize **comment style** across components and types. (Commit from PR #25)

## [1.15.1] - 2025-08-26
### Added
- Expand **Skills** section with comprehensive technical expertise. (Commit from PR #25)

---

## [1.15.0] - 2025-08-26

### Changed
- **Technology taxonomy**: Reclassified technologies into clearer taxonomy and updated project tags accordingly.
- **Label normalization**: Normalized project labels, technology groups, and descriptions for consistency.

> Merged as PR #24.

---

## [1.14.7] - 2025-08-26
### Changed
- Final tidy‑ups and layout micro‑polish leading up to 1.15.0. (Commit from PR #24)

## [1.14.6] - 2025-08-26
### Changed
- Minor fixes and copy edits. (Commit from PR #24)

## [1.14.5] - 2025-08-26
### Changed
- Housekeeping and style adjustments. (Commit from PR #24)

## [1.14.4] - 2025-08-26
### Changed
- Content updates and small UX improvements across sections. (Commit from PR #24)

## [1.14.3] - 2025-08-26
### Changed
- Additional homepage/UI refinements and asset updates. (Commit from PR #24)

## [1.14.2] - 2025-08-26
### Changed
- Reclassify technologies; normalize project tags; refine project metadata. (Commit from PR #24)

## [1.14.1] - 2025-08-26
### Changed
- Layout/structure tuning and résumé link behavior improvements. (Commit from PR #24)

---

## [1.14.0] - 2025-08-24

### Changed
- **Project type handling**: Refactored project type handling and added contact/resume metadata.
- **Skill categories restructure**: Restructured skill categories (languages, frameworks, tools) and adjusted headings.
- **Project reordering**: Reordered projects and revised descriptions for accuracy.

> Merged as PR #23.

---

## [1.13.2] - 2025-08-24
### Changed
- Additional component adjustments and asset updates. (Commit from PR #23)

## [1.13.1] - 2025-08-24
### Changed
- Homepage structure and copy polish. (Commit from PR #23)

---

## [1.13.0] - 2025-08-17

### Added
- **Navigation icons**: Added navigation icons and technology icons.

### Changed
- **Visual refinements**: Tweaked hero gradient, shadows, and section subtitles; refined project cards and details.

> Merged as PR #22.

---

## [1.12.2] - 2025-08-17
### Changed
- Refine visual details (gradients, shadows) and iconography. (Commit from PR #22)

## [1.12.1] - 2025-08-17
### Added
- Add navigation/technology icons and related UI polish. (Commit from PR #22)

---

## [1.12.0] - 2025-08-08

### Changed
- **Version badges**: Added version badges to project cards and refreshed Loom project data.
- **General polish**: General formatting/cleanup for more polished presentation.

> Merged as PR #21.

---

## [1.11.3] - 2025-07-08
### Changed
- Minor content and style fixes across sections. (Commit from PR #21)

## [1.11.2] - 2025-07-08
### Changed
- Accessibility, spacing, and responsive adjustments. (Commit from PR #21)

## [1.11.1] - 2025-07-08
### Changed
- Responsive/layout refinements. (Commit from PR #21)

---

## [1.11.0] - 2025-07-08

### Changed
- **Project data updates**: Updated project data and ordering; attached images to cards for richer previews.

> Merged as PR #20.

---

## [1.10.0] - 2025-07-08

### Changed
- **ProjectsTable refactoring**: Refactored ProjectsTable to support expandable rows for deeper on-page project details.
- **Table improvements**: Increased table size and readability; updated all_projects.tsx with new/edited entries and descriptions.
- **Academic data**: Added academic grade data; refined personal section metadata.

> Merged as PR #19.

---

## [1.9.5] - 2025-07-08
### Changed
- Add grades of school projects to project data. (Commit from PR #19)

## [1.9.4] - 2025-07-08
### Changed
- Refine project descriptions; update About metadata; optimize ProjectsTable state. (Commit from PR #19)

## [1.9.3] - 2025-07-08
### Changed
- Increase ProjectsTable size and adjust layout/styling. (Commit from PR #19)

## [1.9.2] - 2025-07-08
### Changed
- Update entries in `all_projects.tsx`; add images; adjust date ranges; add sorting. (Commit from PR #19)

## [1.9.1] - 2025-07-08
### Changed
- Refactor ProjectsTable to support **expandable rows** for detailed views. (Commit from PR #19)

---

## [1.9.0] - 2025-07-06

### Added
- **New pages**: Added Projects and Experience pages with routes and homepage links; experience redirects to hosted r�sum�.

### Changed
- **Component reorganization**: Reorganized components; moved globals.css and fixed build errors.

> Merged as PR #18.

---

## [1.8.8] - 2025-07-06
### Changed
- Add routes for new pages; reorganize components/sections to support structure. (Commit from PR #18)

## [1.8.7] - 2025-07-06
### Fixed
- Fix build errors introduced by routing/structure changes. (Commit from PR #18)

## [1.8.6] - 2025-07-06
### Changed
- Link Projects & Experience from the home page. (Commit from PR #18)

## [1.8.5] - 2025-07-06
### Added
- Add **Projects** page showing all projects; update `all_projects` data. (Commit from PR #18)

## [1.8.4] - 2025-07-06
### Added
- Add **Experience** page; résumé page redirects to hosted résumé. (Commit from PR #18)

## [1.8.3] - 2025-07-06
### Changed
- Minor formatting and data updates related to the new structure. (Commit from PR #18)

## [1.8.2] - 2025-07-06
### Changed
- Update layout to import `globals.css` from its new location. (Commit from PR #18)

## [1.8.1] - 2025-07-06
### Changed
- Move `globals.css` and adjust layout import path. (Commit from PR #18)

---

## [1.8.0] - 2025-07-01

### Added
- **Project images**: Added project images and refined experience data.

### Changed
- **Project structure**: Split projects into main and all lists in preparation for the Projects page; fixed build issues.

> Merged as PR #17.

---

## [1.7.5] - 2025-07-02
### Fixed
- Fix build issues related to data/image changes. (Commit from PR #17)

## [1.7.4] - 2025-07-02
### Changed
- Split projects into **main** and **all** in preparation for the Projects page. (Commit from PR #17)

## [1.7.3] - 2025-07-02
### Added
- Add image for **TCGhub**. (Commit from PR #17)

## [1.7.2] - 2025-07-02
### Changed
- Update project data (incl. TrackBasket) and add images for TB, SwimMate, and Portfolio. (Commit from PR #17)

## [1.7.1] - 2025-07-02
### Changed
- Update **experience** data. (Commit from PR #17)

---

## [1.7.0] - 2025-05-26

### Added
- **Profile picture**: Added profile picture to Hero section.

> Merged as PR #15.

---

## [1.6.1] - 2025-05-26
### Added
- Add hero profile image for personalization. (Commit from PR #15)

---

## [1.6.0] - 2025-05-25

### Added
- **Interactive animations**: Added floating particles animation and typing effect in HeroSection to boost interactivity.

> Merged as PR #14.

---

## [1.5.1] - 2025-05-26
### Added
- Implement floating particles and typing effect in `HeroSection`. (Commit from PR #14)

---

## [1.5.0] - 2025-05-25

### Changed
- **Project updates**: Updated project details and display order.

> Merged as PR #13.

---

## [1.4.1] - 2025-05-25
### Changed
- Refresh project details and re-order items for clarity. (Commit from PR #13)

---

## [1.4.0] - 2025-05-16

### Changed
- **Project status updates**: Updated project statuses and technology lists to reflect current development phase.

> Merged as PR #12.

---

## [1.3.1] - 2025-05-16
### Changed
- Update statuses & tech stacks in project data. (Commit from PR #12)

---

## [1.3.0] - 2025-05-07

### Added
- **Analytics integration**: Added @vercel/analytics integration for enhanced site tracking.

> Merged as PR #11.

---

## [1.2.0] - 2025-05-06

### Fixed
- **Responsive rendering**: Ensured ProjectCard renders correct content on smaller window sizes.

> Merged as PR #10.

---

## [1.1.1] - 2025-05-07
### Fixed
- Fix `ProjectCard` content rendering at small widths. (Commit from PR #10)

---

## [1.1.0] - 2025-05-06

### Added
- **Project collaborators**: Added display of project collaborators (with optional links) and updated data structure.

> Merged as PR #9.

---

## [1.0.1] - 2025-05-06
### Added
- Enhance `ProjectCard` to display collaborators and links. (Commit from PR #9)

---

## [1.0.0] - 2025-05-05

### Added
- **Milestone release**: Finalized project data for the v1 milestone.

> Merged as PR #8.

---

## [0.7.0] - 2025-05-05

### Added
- **Section headings**: Introduced SectionHeading subsubtitle.

### Changed
- **Project updates**: Updated project statuses and details.

> Merged as PR #7.

---

## [0.6.0] - 2025-05-04

### Changed
- **Mobile optimization**: Adjusted sections/components to work better on mobile and smaller browsers.

> Merged as PR #6.

---

## [0.5.0] - 2025-05-04

### Changed
- **Hero section enhancement**: Enhanced HeroSection layout with wave SVG; updated README to reflect tech and structure changes.

> Merged as PR #5.

---

## [0.4.0] - 2025-05-03

### Changed
- **Branding updates**: Updated favicon and layout metadata for personal branding.

> Merged as PR #4.

---

## [0.3.0] - 2025-05-03

### Added
- **Custom scrollbar**: Added custom scrollbar styling for improved aesthetics and UX.

> Merged as PR #3.

---

## [0.2.0] - 2025-05-03

### Added
- **Status indicators**: Added project development status indicator; adjusted related files and content.

> Merged as PR #2.

---

## [0.1.0] - 2025-05-03

### Added
- **Initial content**: Added initial content and layout refinements: centered hero button and improved About/Hero copy for clarity and engagement.

> Merged as PR #1.
