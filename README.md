# My Portfolio Website

This project is created using [React + Emotion + Vite (REV) boilerplate](https://github.com/akbarkz/rev-boilerplate).

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) + [Emotion](https://emotion.sh/)
- **UI Components**: [Ant Design](https://ant.design/) - Grid system, Drawer, Icons, Carousel, and Select components
- **Internationalization**: [react-i18next](https://react.i18next.com/) - Supports English and Kazakh languages
- **Image Viewer**: [react-modal-image](https://github.com/aautio/react-modal-image) - Enlargeable images
- **Backend**: [Flask](https://flask.palletsprojects.com/en/stable/) - Lightweight Python framework serving content API
- **Database**: [MongoDB](https://www.mongodb.com/) - NoSQL database for content management
- **DevOps**: Docker + Docker Compose for containerization
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) - Pre-push validation scripts

## Local Development

All services (backend, frontend, database) are containerized using Docker.

### Prerequisites
- Docker and Docker Compose
- Yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/akbarkz/portfolio.git
cd portfolio
```

2. Build and start all containers:
```bash
yarn docker:build
yarn docker:up
```

3. Run the data migration (first time only):
```bash
yarn docker:migrate
```

The app will be available at `http://localhost` (port 80).

> **Note**: Local environment variables are already configured in the `.env` file with sensible defaults for Docker development.

### Useful Commands

- `yarn docker:down` - Stop all containers
- `yarn docker:logs` - View container logs
- `yarn docker:restart` - Restart all services
- `yarn docker:clean` - Stop containers and remove volumes
- `yarn docker:backup` - Create MongoDB backup

## Production Deployment

The production version is deployed via [Railway](https://railway.com/) and can be viewed at: **https://akbarkz.com/**

### Deployment Details
- **Frontend**: Served with NIXPACKS auto-detection
- **Backend**: Flask with Gunicorn WSGI server
- **Database**: MongoDB hosted on Railway
- **Backups**: Automated daily backups via GitHub Actions (see [backups/README.md](backups/README.md))

## License

MIT
