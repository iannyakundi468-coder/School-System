import React from 'react';
import { useGamification } from '../../context/GamificationContext';
import { Star, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const GamificationStats: React.FC = () => {
  const { xp, badges } = useGamification();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3 shrink-0">
      {/* XP Display */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
        <Star className="w-3.5 h-3.5 fill-indigo-400" />
        <div className="flex flex-col leading-none">
           <span className="text-[11px] font-black">{xp}</span>
           <span className="text-[8px] font-bold uppercase tracking-tighter opacity-70">{t('xp')}</span>
        </div>
      </div>
      
      {/* Badges Display */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
        <Trophy className="w-3.5 h-3.5" />
        <div className="flex flex-col leading-none">
           <span className="text-[11px] font-black">{badges.length}</span>
           <span className="text-[8px] font-bold uppercase tracking-tighter opacity-70">{t('badgesTitle')}</span>
        </div>
      </div>
    </div>
  );
};
