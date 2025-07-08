import { type SignupFormValues } from '../schemas';

export const signup = async (data: Omit<SignupFormValues, 'confirmPassword'>) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.message || 'Erreur lors de la création du compte');
  }

  return response.json();
};
