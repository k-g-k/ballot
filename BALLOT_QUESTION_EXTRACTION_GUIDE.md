# Ballot Question Component - Extraction Guide

## Quick Download

The standalone ballot question component has been packaged at:
```
/tmp/ballot-question-standalone.tar.gz
```

## What's Included

- `ballot-question.tsx` - Main component with 6 tabs
- All B2 Figma import assets (images, SVGs)
- Style files (fonts.css, theme.css)
- Configuration files (package.json, vite.config.ts)
- README with documentation

## Component Structure

The ballot question component is self-contained with the following tab sections:

1. **Overview** - Action cards, overview text, For/Against comparison, Citizen Voices
2. **Background** - Historical context (placeholder ready)
3. **For & Against** - Detailed Voting Yes/No cards with campaigns, funding, supporters, testimony
4. **Public Perspectives** - Community feedback (placeholder ready)
5. **Media Coverage** - News articles and analysis (placeholder ready)
6. **Campaign Finance** - Financial details (placeholder ready)

## Key Features

- Left-aligned tab navigation with active state styling
- Hero section with ballot number, title, description, topic tags
- "Take Part" sidebar with action buttons
- Reusable VotingYesCard and VotingNoCard components
- All original Figma design assets included
- Proper MAPLE design system tokens (Nunito, Lexend fonts, #1a3185 navy, etc.)

## Files You'll Need

### Core Component
- `src/app/components/ballot-question.tsx` (main component)

### Assets
- `src/imports/B2/` (all images and SVG paths)

### Styling
- `src/styles/fonts.css` (Nunito and Lexend font imports)
- `src/styles/theme.css` (MAPLE design tokens)

### Configuration
- `package.json` (dependencies)
- `vite.config.ts` (build configuration)

## To Extract and Use

```bash
# Extract the archive
cd your-project-directory
tar -xzf /tmp/ballot-question-standalone.tar.gz

# The files will be in: ballot-question-standalone/

# Copy to your project
cp -r ballot-question-standalone/src/app/components/ballot-question.tsx your-project/src/components/
cp -r ballot-question-standalone/src/imports/B2 your-project/src/imports/
cp -r ballot-question-standalone/src/styles/* your-project/src/styles/
```

## Dependencies Required

From package.json, you'll need:
- react
- lucide-react (for icons)
- Tailwind CSS v4

## Next Steps

Each tab component function is ready for you to populate with real content:
- `OverviewTab()`
- `BackgroundTab()`
- `ForAgainstTab()`
- `PublicPerspectivesTab()`
- `MediaCoverageTab()`
- `CampaignFinanceTab()`

The component structure is complete and ready for content integration!
