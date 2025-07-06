import { zodResolver } from '@hookform/resolvers/zod';
import { Brain, Shield, Sparkles, Target, Users, Zap } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, FeatureCard } from '../components';

// Schémas de validation Zod
const loginSchema = z.object({
  email: z.string().email('Adresse email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLoginSubmit = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      // Simuler une requête API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Login data:', data);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <Brain className="text-white" />,
      title: 'IA Intelligente',
      description: "Algorithmes d'apprentissage automatique de pointe pour optimiser vos processus métier",
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: <Zap className="text-white" />,
      title: 'Performance Ultra-Rapide',
      description: "Traitement en temps réel avec une latence minimale pour une expérience utilisateur fluide",
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: <Shield className="text-white" />,
      title: 'Sécurité Maximale',
      description: "Chiffrement de bout en bout et conformité aux standards de sécurité les plus stricts",
      gradient: 'from-green-500 to-teal-600',
    },
    {
      icon: <Sparkles className="text-white" />,
      title: 'Innovation Continue',
      description: "Mises à jour automatiques avec les dernières avancées en intelligence artificielle",
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: <Users className="text-white" />,
      title: 'Collaboration Simplifiée',
      description: "Outils de travail en équipe intégrés pour une productivité collective optimisée",
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: <Target className="text-white" />,
      title: 'Résultats Mesurables',
      description: "Analytics avancées et KPIs en temps réel pour mesurer l'impact de vos décisions",
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Section gauche - Informations du SaaS */}
        <div className="flex flex-col justify-center p-6 lg:p-8 xl:p-12">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-4">
                Révolutionnez votre business avec
                <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent"> AIDD</span>
              </h1>
              <p className="text-lg text-neutral-300 leading-relaxed">
                La plateforme d'intelligence artificielle qui transforme vos données en décisions stratégiques. 
                Automatisez, optimisez et innovez avec la puissance de l'IA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                  className="p-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Section droite - Formulaire de connexion */}
        <div className="flex flex-col justify-center p-6 lg:p-8 xl:p-12 bg-black/20 backdrop-blur-sm">
          <div className="max-w-md mx-auto w-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Connexion</h2>
                <p className="text-neutral-300 text-sm">Accédez à votre tableau de bord</p>
              </div>

              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Email</label>
                  <input
                    {...loginForm.register('email')}
                    type="email"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                  {loginForm.formState.errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {loginForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1">Mot de passe</label>
                  <input
                    {...loginForm.register('password')}
                    type="password"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                  {loginForm.formState.errors.password && (
                    <p className="text-red-400 text-xs mt-1">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Connexion...' : 'Se connecter'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
