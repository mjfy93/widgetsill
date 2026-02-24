# WidgetSill

> Your personal desktop companion — fully customizable, here to simplify your day.

<!--
![WidgetSill Screenshot](./docs/screenshot.png)
Uncomment and add screenshot once UI is built
-->

## What is WidgetSill?

WidgetSill is a lightweight, always-on-top desktop widget for Windows that brings essential information to your fingertips — no more switching between apps to check your calendar, weather, or control your music.

## Features

- 📅 **Calendar** — View your Outlook events at a glance
- 🌤️ **Weather** — Current conditions with auto-location detection
- 🖼️ **Photo Slideshow** — Display photos from any local folder
- ✅ **Reminders** — Quick task management without leaving your desktop
- 🎵 **Media Controls** — Play, pause, and skip from any app
- 🧮 **Calculator** — Basic calculations always within reach
- 🎨 **Light/Dark Theme** — Easy on the eyes, day or night
- ⚙️ **Modular** — Show only the widgets you need

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Electron | Desktop application framework |
| React | UI components |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling |
| Microsoft Graph API | Outlook calendar integration |
| OpenWeatherMap API | Weather data |

## AI-Assisted Development

This project is being built as part of an AI-assisted development workshop, using modern AI coding tools throughout the development process.

| Tool | How It's Used |
|------|---------------|
| [Claude.ai](https://claude.ai) | Architecture planning, debugging, code review, learning concepts |
| [Cursor](https://cursor.com) | IDE with AI autocomplete and inline editing |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | CLI tool for multi-file scaffolding and refactors |
| [V0](https://v0.dev) | Generating UI components (React + Tailwind) |

### AI Development Workflow

```
Planning & Learning (Claude.ai)
         ↓
Scaffolding & Big Changes (Claude Code CLI)
         ↓
UI Component Generation (V0)
         ↓
Daily Coding & Iteration (Cursor)
```

This workflow demonstrates how AI tools can complement each other — using conversational AI for understanding and planning, agentic tools for large-scale code generation, and IDE integration for day-to-day development.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Windows 10/11
- Microsoft account (for calendar integration)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/widgetsill.git

# Navigate to project folder
cd widgetsill

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create Windows executable
npm run build
```

## Configuration

### Weather API

1. Create a free account at [OpenWeatherMap](https://openweathermap.org/api)
2. Copy your API key
3. Add it to your `.env` file:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

### Microsoft Calendar

1. Register an app in [Azure Portal](https://portal.azure.com/)
2. Configure OAuth redirect URI
3. Add credentials to your `.env` file:
   ```
   VITE_MS_CLIENT_ID=your_client_id_here
   ```

## Project Structure

```
widgetsill/
├── src/
│   ├── main/           # Electron main process
│   ├── renderer/       # React frontend
│   │   ├── components/ # UI components
│   │   ├── widgets/    # Individual widget modules
│   │   ├── hooks/      # Custom React hooks
│   │   ├── stores/     # State management
│   │   └── styles/     # Global styles
│   └── shared/         # Shared types and utilities
├── public/             # Static assets
└── docs/               # Documentation
```

## Roadmap

See [MVP_SPECIFICATION.md](./MVP_SPECIFICATION.md) for detailed scope and future plans.

**Coming soon:**
- Google Calendar integration
- Cloud photo sync
- Drag-and-drop widget arrangement
- Custom themes

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting a PR.

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

Made with ☕ and 🤖 by [María José Ferro Yepes](https://github.com/yourusername)
