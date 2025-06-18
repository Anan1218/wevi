'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type VoiceState = 'idle' | 'active';

interface VoiceContextType {
  voiceState: VoiceState;
  setVoiceState: (state: VoiceState) => void;
}

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export const useVoice = () => {
  const context = useContext(VoiceContext);
  if (context === undefined) {
    throw new Error('useVoice must be used within a VoiceProvider');
  }
  return context;
};

interface VoiceProviderProps {
  children: ReactNode;
}

export const VoiceProvider: React.FC<VoiceProviderProps> = ({ children }) => {
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');

  return (
    <VoiceContext.Provider value={{ voiceState, setVoiceState }}>
      {children}
    </VoiceContext.Provider>
  );
}; 