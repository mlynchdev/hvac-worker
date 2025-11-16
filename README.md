# HVAC Worker

A Cloudflare Worker that serves the HVAC/Ventilation One-Line & Sizing Worksheet for Wood/Fab/CNC workshops.

## Live Site

The application is deployed at: https://hvac-worker.mark-cfc.workers.dev

## Description

This project hosts a static HTML worksheet for calculating and visualizing HVAC and ventilation requirements for woodworking, fabrication, and CNC workshops. The worksheet includes:

- HVAC sizing calculations
- Ventilation requirements
- One-line diagrams
- Interactive worksheets

## Technology Stack

- **Cloudflare Workers**: Edge computing platform for serving static assets
- **Wrangler**: Cloudflare's CLI tool for managing Workers
- **Static Assets**: HTML/CSS/JavaScript served from the edge

## Development

### Prerequisites

- Node.js and npm installed
- Wrangler CLI (installed via npm)
- Cloudflare account

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd hvac-worker
```

2. Install dependencies:
```bash
npm install
```

3. Run locally:
```bash
npm run dev
```

The site will be available at `http://localhost:8787`

### Deployment

To deploy to Cloudflare Workers:

```bash
npm run deploy
```

### Updating the Worksheet

1. Edit `public/index.html` with your changes
2. Test locally with `npm run dev`
3. Deploy with `npm run deploy`

## Project Structure

```
hvac-worker/
├── public/
│   └── index.html          # Main HVAC worksheet
├── src/
│   └── index.ts            # Worker script
├── wrangler.jsonc          # Cloudflare Worker configuration
├── package.json
└── README.md
```

## License

This project is available for personal and educational use.
