import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { signup } from '../features/auth/api/signup';
import { SignupForm } from '../features/auth/components/SignupForm';
import { loginSchema } from '../features/auth/schemas';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);

  const handleToggleForm = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowSignup((prev) => !prev);
      setIsTransitioning(false);
    }, 300);
  };

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

  const handleSignup = async (data: {
    email: string;
    password: string;
    displayName: string;
    confirmPassword?: string;
  }) => {
    setIsLoading(true);
    setSignupError(null);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...signupData } = data;
      await signup(signupData);
      toast.success('Compte créé avec succès !');
      setShowSignup(false);
    } catch (err) {
      const errorMessage = (err as Error).message;
      setSignupError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      <div className="grid lg:grid-cols-2 h-screen">
        {/* Section gauche - Informations du SaaS */}
        <div className="flex flex-col justify-center p-6 lg:p-8 xl:p-12">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-4">
                Révolutionnez votre business avec
                <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                  {' '}
                  AIDD
                </span>
              </h1>
              <p className="text-lg text-neutral-300 leading-relaxed">
                La plateforme d'intelligence artificielle qui transforme vos
                données en décisions stratégiques. Automatisez, optimisez et
                innovez avec la puissance de l'IA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
            </div>
          </div>
        </div>

        {/* Section droite - Formulaire de connexion ou création de compte */}
        <div className="flex flex-col justify-center p-6 lg:p-8 xl:p-12 bg-black/20 backdrop-blur-sm">
          <div className="max-w-md mx-auto w-full">
            <div
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {showSignup ? 'Créer un compte' : 'Connexion'}
                </h2>
                <p className="text-neutral-300 text-sm">
                  {showSignup
                    ? 'Inscrivez-vous pour accéder à votre tableau de bord'
                    : 'Accédez à votre tableau de bord'}
                </p>
              </div>
              {showSignup ? (
                <>
                  <SignupForm
                    onSubmit={handleSignup}
                    isLoading={isLoading}
                    error={signupError}
                  />
                  <div className="text-center mt-4">
                    <span className="text-neutral-300 text-sm">
                      Déjà un compte ?{' '}
                    </span>
                    <button
                      type="button"
                      className="text-accent-400 hover:underline font-medium bg-transparent border-0 p-0"
                      onClick={handleToggleForm}
                    >
                      Se connecter
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <form
                    onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-white mb-1">
                        Email
                      </label>
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
                      <label className="block text-sm font-medium text-white mb-1">
                        Mot de passe
                      </label>
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
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Connexion...' : 'Se connecter'}
                    </Button>
                  </form>
                  <div className="text-center mt-4">
                    <span className="text-neutral-300 text-sm">
                      Pas encore de compte ?{' '}
                    </span>
                    <button
                      type="button"
                      className="text-accent-400 hover:underline font-medium bg-transparent border-0 p-0"
                      onClick={handleToggleForm}
                    >
                      Créer un compte
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
