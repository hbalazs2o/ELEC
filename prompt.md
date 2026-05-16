# MISSION: ELEC PROJECT TOTAL SANITIZATION (V4.0)

## CORE DIRECTIVE
You are to perform a surgical-grade cleanup of the ELEC repository. The objective is to eliminate all legacy "Office Assistant" artifacts, ad-hoc styling, and redundant UI elements, creating a unified, clinical, and high-performance industrial dashboard.

## THE CLEANUP PROTOCOL
1.  **Dashboard Purification**:
    -   Target: `index.html`.
    -   Action: REMOVE buttons "Irattár" and "Adatbázis".
    -   Action: REMOVE energy price monitoring (Gas/Electricity values and icons).
    -   Requirement: Only Weather, Clock, Date, and Location should remain in the header/toolbar info area.

2.  **Recursive Tile Architecture**:
    -   Logic: Scan the following directories: `/modules`, `/tools`, `/blocks`, `/modules/process`.
    -   Component: Create a `.compact-tile` (approx. 110px x 90px).
    -   Label: Use the filename (minus .html), capitalized (e.g., `local_weather` -> `LOCAL WEATHER`).
    -   Iconography: Assign semantic FontAwesome icons based on filename keywords (e.g., 'weather' -> sun, 'pdf' -> file-pdf).
    -   Constraint: EVERY single HTML file must have a tile. No hardcoded exceptions.

3.  **Module Sanitization (The "Clean Information" Rule)**:
    -   Target: Every `.html` file outside the root.
    -   Constraint: "SZIGORÚAN CSAK A SZÖVEGES INFORMÁCIÓK MARADJANAK" (Strictly text information only).
    -   Process:
        -   ERASE all `<style>...</style>` blocks.
        -   ERASE all external `<link rel="stylesheet">` tags except for the Global Design System links.
        -   ERASE all inline `style="..."` attributes.
        -   ERASE all `<header>` and `<footer>` tags (these are injected by `header.js`).
    -   Styling: All pages must rely 100% on `css/main.css` and a new `css/module.css`.

4.  **Aesthetic Specifications**:
    -   Dark Mode (Primary): Deep Slate/Black background (#080c14), Blue accents, Silver text.
    -   Light Mode (Secondary): Clean White/Ice background, Deep Navy text.
    -   Layout: Grid-based, high information density, zero clutter.

## EXECUTION SEQUENCE
- **Step 1**: Rebuild `main.css` as the "Source of Truth" for all styling.
- **Step 2**: Update `js/header.js` to reflect the new minimal branding.
- **Step 3**: Reconstruct `index.html` with the compact recursive grid.
- **Step 4**: Batch-process all module HTML files to strip legacy code and inject the new standard.
- **Step 5**: Integrate the `process/` folder contents into the dashboard.

## FINAL STATE GOAL
A project where every page looks identical in typography and theme, where the dashboard acts as a pure file explorer for industrial documentation and tools, and where all legacy "noise" has been silenced.
