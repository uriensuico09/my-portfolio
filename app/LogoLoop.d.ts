import React from 'react';

export interface LogoLoopProps<T = any> {
  logos: T[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: T, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function LogoLoop<T = any>(props: LogoLoopProps<T>): React.ReactElement;
export default LogoLoop;