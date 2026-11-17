# AP FLOW Website

A bilingual (English/Arabic) static landing page for AP FLOW.

## Files
- `index.html` — page structure and content
- `style.css` — responsive visual design
- `script.js` — language switch and mobile navigation
- `assets/` — logo and favicon

## Deploy with Coolify
1. Push this repository to GitHub.
2. In Coolify, create a new resource from the Git repository.
3. Select the static site build/preset option (not Dockerfile or Docker Compose).
4. Set the publish/output directory to `/` or the repository root, depending on the Coolify version.
5. Deploy, then add your domain and enable HTTPS.

If your Coolify version does not offer a static option directly, choose the Nixpacks build pack and use the repository root as the public directory, or ask before selecting a different build method.

## Before going live
1. Replace `hello@apflow.example` in `index.html` with your real contact email.
2. In the video section of `index.html`, replace the placeholder with an iframe for your hosted AP FLOW introduction video.
3. Review all service claims and ensure they match the actual implementation scope.
4. Confirm the GitHub repository is private.

## Notes
- The dashboard numbers are illustrative sample data, not customer results.
- The site does not currently collect form submissions or store visitor information.
- The page uses Google Fonts from a CDN; a system-font fallback is included.
