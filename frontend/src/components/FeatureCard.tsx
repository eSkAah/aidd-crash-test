import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient?: string
  className?: string
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  gradient = 'from-primary-500 to-primary-700',
  className = '' 
}: FeatureCardProps) => {
  return (
    <div className={`group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 ${className}`}>
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl mb-6 text-2xl group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-neutral-300 leading-relaxed">
        {description}
      </p>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

export default FeatureCard
