# AIDD Project

Cette application full-stack utilise React avec React Router 7 pour le frontend et NestJS pour le backend.

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation et lancement

1. **Installation des dépendances**
```bash
# Frontend
cd frontend
npm install

# Backend  
cd ../backend
npm install
```

2. **Lancement en mode développement**
```bash
# Terminal 1 - Frontend (Port 5173)
cd frontend
npm run dev

# Terminal 2 - Backend (Port 3001)
cd backend
npm run start:dev
```

3. **Accès aux services**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001/api
- Documentation Swagger: http://localhost:3001/api/docs

## 📁 Structure du projet

```
AIDD/
├── frontend/          # React + TypeScript + Vite
│   ├── src/
│   │   ├── pages/     # Pages de l'application
│   │   ├── components/ # Composants réutilisables
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
├── backend/           # NestJS + TypeScript
│   ├── src/
│   │   ├── auth/      # Module d'authentification
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── .env
└── README.md
```

## 🛠️ Technologies utilisées

### Frontend
- ⚛️ **React 18** - Bibliothèque UI moderne
- 🚀 **Vite** - Build tool ultra-rapide
- 📝 **TypeScript** - Typage statique
- 🛣️ **React Router 7** - Routage côté client
- 🎨 **Tailwind CSS** - Framework CSS utilitaire
- 🔧 **ESLint & Prettier** - Qualité du code

### Backend
- 🐱 **NestJS** - Framework Node.js robuste
- 📝 **TypeScript** - Typage statique
- 🔐 **JWT** - Authentification
- 📚 **Swagger** - Documentation API
- 🛡️ **Helmet** - Sécurité
- 📊 **Compression** - Optimisation
- 🚥 **Rate Limiting** - Protection

## 🔐 Configuration

### Variables d'environnement (Backend)
Copiez `.env.example` vers `.env` et ajustez les valeurs :

```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
```

## 📝 Scripts disponibles

### Frontend
```bash
npm run dev        # Développement
npm run build      # Build production
npm run preview    # Prévisualisation
npm run lint       # Linting
```

### Backend
```bash
npm run start:dev  # Développement avec watch
npm run start:prod # Production
npm run build      # Build
npm run test       # Tests
```

## 🌟 Fonctionnalités

### Frontend
- ✅ Routing avec React Router 7
- ✅ Design responsive avec Tailwind CSS
- ✅ TypeScript strict
- ✅ Hot reload ultra-rapide
- ✅ Path aliases (@/components)

### Backend
- ✅ API REST avec documentation Swagger
- ✅ Authentification JWT
- ✅ Rate limiting
- ✅ Validation des données
- ✅ Sécurité (Helmet, CORS)
- ✅ Health check endpoints

## 🎯 Prochaines étapes

1. **Base de données** - Ajouter Prisma ou TypeORM
2. **Authentification** - Compléter le système auth
3. **Tests** - Ajouter tests unitaires et e2e
4. **CI/CD** - Configuration GitHub Actions
5. **Docker** - Containerisation

## 📚 Documentation

- [React Router 7](https://reactrouter.com/)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

Développé avec ❤️ en suivant les best practices 2025
