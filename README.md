# Project — Hero Landing Page (Tailwind CSS)

## Project Overview
A single-section hero landing page for **Project**, a fictional AI-powered
connected workspace. This task focuses specifically on **Tailwind CSS
positioning utilities** (`relative`, `absolute`, `sticky`, `fixed`) rather
than a full multi-section site, and matches the "Expected Output" screenshot
in the brief:

- A **sticky navbar** (`sticky top-0 z-50`) with the "&#10022; Project" logo on
  the left, nav links + a "Get AI free" button on the right, and a hamburger
  fallback for narrow screens.
- A **hero section** with a soft orange-to-white gradient background, a
  centered two-line headline ("Write, plan, share." / "With AI at your
  side."), a description paragraph, and two CTA buttons ("Get AI free →" and
  "Request a demo") laid out with `relative`/`absolute` positioning.
- A **dashboard preview image**, centered inside a `relative` container using
  `absolute` + transform utilities.
- **Three floating info cards** (Tasks, Project Status, Team Activity)
  positioned with `absolute` + `z-index` + `shadow` around the dashboard
  image, matching the screenshot layout.
- A **fixed chat widget** (`fixed bottom-6 right-6 z-50`) that stays pinned to
  the bottom-right corner of the viewport as the page scrolls.

No custom CSS is used for layout, spacing, or color — everything is built
with Tailwind's utility classes directly in `index.html`. `style.css` only
sets the page's font family and a `scroll-behavior: smooth` touch that
Tailwind's utilities don't provide out of the box.

## Project Structure
```
YourName_Task4/
├── index.html                  # All markup + Tailwind utility classes
├── style.css                   # Font + smooth-scroll only (no layout/color CSS)
├── script.js                   # Mobile menu toggle + chat widget click handler
├── assets/
│   ├── dashboard-preview.svg   # Illustrated "kanban wall" dashboard preview
│   ├── avatar-a.svg
│   ├── avatar-b.svg
│   └── avatar-c.svg            # Small placeholder avatars for the Team Activity card
└── README.md
```

### About the dashboard image
This project doesn't have internet access to pull in real stock photography,
so the dashboard preview (a hand pinning notes to a kanban-style wall) and
the three team avatars are original, lightweight **SVG illustrations** built
specifically for this project, kept in `assets/`. Swap them out for real
photos with the same filenames if you'd like — the rest of the layout will
keep working unchanged.

## How to Run
1. Unzip the folder.
2. Open `index.html` in any modern browser. **An internet connection is
   required** the first time, since the page loads Tailwind CSS from its
   official CDN (`https://cdn.tailwindcss.com`), exactly as the brief asks
   for, plus the "Inter" font from Google Fonts.
3. Scroll down to see the navbar stay **sticky** at the top and the chat
   bubble stay **fixed** in the bottom-right corner.
4. Resize the browser (or use dev tools' device toolbar) to see the nav
   collapse into a hamburger menu on small screens, and the floating info
   cards hide on very narrow phones to keep the layout clean and
   uncluttered (they reappear from the `sm` breakpoint up).

## Tailwind Positioning Utilities Used
| Utility | Where it's used |
|---|---|
| `sticky` + `top-0` + `z-50` | Navbar, so it stays pinned while scrolling |
| `relative` | Hero CTA button wrapper, and the container around the dashboard image/floating cards (positioning context) |
| `absolute` | The dashboard image (`left-1/2 top-1/2` + translate), and all three floating cards (`left-0`, `right-0`, `top-*`, `bottom-*`) |
| `fixed` + `bottom-6` + `right-6` + `z-50` | The chat widget, pinned to the viewport regardless of scroll |

## Restrictions Followed
- Tailwind CSS loaded via CDN, no build step or config required.
- No custom CSS for layout, spacing, or color — only font/smooth-scroll in
  `style.css`.
- JavaScript is used only for the mobile menu toggle and a placeholder click
  handler on the chat widget — no backend, no forms.
