#!/bin/bash

# Script de lancement pour le projet AIDD
# Ce script lance le frontend et le backend en parallèle

echo "🚀 Démarrage du projet AIDD..."

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé. Veuillez installer Node.js."
    exit 1
fi

# Fonction pour tuer les processus en arrière-plan lors de l'arrêt
cleanup() {
    echo "🛑 Arrêt des services..."
    kill $(jobs -p) 2>/dev/null
    exit 0
}

# Capture Ctrl+C pour nettoyer
trap cleanup SIGINT

echo "📦 Vérification des dépendances..."

# Installer les dépendances si nécessaire
if [ ! -d "frontend/node_modules" ]; then
    echo "📥 Installation des dépendances frontend..."
    cd frontend && npm install && cd ..
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📥 Installation des dépendances backend..."
    cd backend && npm install && cd ..
fi

echo "🎯 Lancement des services..."

# Lancer le backend en arrière-plan
echo "🔧 Démarrage du backend (port 3001)..."
cd backend && npm run start:dev &
BACKEND_PID=$!

# Attendre que le backend soit prêt
sleep 3

# Lancer le frontend en arrière-plan
echo "⚛️ Démarrage du frontend (port 5173)..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Services démarrés avec succès !"
echo ""
echo "📍 Accès aux services :"
echo "   🌐 Frontend: http://localhost:5173"
echo "   🔧 Backend API: http://localhost:3001/api"
echo "   📚 Documentation: http://localhost:3001/api/docs"
echo ""
echo "💡 Appuyez sur Ctrl+C pour arrêter tous les services"
echo ""

# Attendre que les processus se terminent
wait
