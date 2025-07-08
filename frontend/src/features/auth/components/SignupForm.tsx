// INSTRUCTION COPILOT OK
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { signupSchema, type SignupFormValues } from '../schemas';

interface SignupFormProps {
  onSubmit: (data: SignupFormValues) => Promise<void>;
  isLoading?: boolean;
  error?: string | null;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, isLoading, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { displayName: '', email: '', password: '', confirmPassword: '' },
  });

  const [showPassword, setShowPassword] = useState(false);
  // Synchronise les deux champs
  const handleTogglePassword = () => setShowPassword((v) => !v);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white mb-1">Nom</label>
        <input
          {...register('displayName')}
          type="text"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="Votre nom"
        />
        {errors.displayName && (
          <p className="text-red-400 text-xs mt-1">{errors.displayName.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">Email</label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="votre@email.com"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="relative">
        <label className="block text-sm font-medium text-white mb-1">Mot de passe</label>
        <input
          {...register('password')}
          type={showPassword ? 'text' : 'password'}
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent pr-10"
          placeholder="••••••••"
        />
        <button type="button" className="absolute right-3 top-9 text-neutral-400" tabIndex={-1} onClick={handleTogglePassword}>
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
        {errors.password && (
          <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>
      <div className="relative">
        <label className="block text-sm font-medium text-white mb-1">Vérification du mot de passe</label>
        <input
          {...register('confirmPassword')}
          type={showPassword ? 'text' : 'password'}
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent pr-10"
          placeholder="••••••••"
        />
        <button type="button" className="absolute right-3 top-9 text-neutral-400" tabIndex={-1} onClick={handleTogglePassword}>
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
        {errors.confirmPassword && (
          <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>
      {error && <p className="text-red-500 text-xs text-center">{error}</p>}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Création...' : 'Créer un compte'}
      </Button>
    </form>
  );
};
