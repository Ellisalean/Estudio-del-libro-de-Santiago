import type { FC } from 'react';

export interface IconProps {
  className?: string;
}

export type IconComponent = FC<IconProps>;

export interface TriviaQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}
