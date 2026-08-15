import { motion, useMotionValue, useSpring, useTransform, type MotionStyle } from 'framer-motion';
import { useRef, type MouseEvent, type ReactNode } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { useHasHoverPointer } from '../../hooks/useHasHoverPointer';
import styles from './GlassCard.module.css';

type Variant = 'card' | 'button' | 'pill';

type GlassCardBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  glow?: boolean;
  tilt?: boolean;
};

type GlassCardDivProps = GlassCardBaseProps & { as?: 'div' } & Omit<
    React.ComponentPropsWithoutRef<'div'>,
    keyof GlassCardBaseProps
  >;
type GlassCardButtonProps = GlassCardBaseProps & { as: 'button' } & Omit<
    React.ComponentPropsWithoutRef<'button'>,
    keyof GlassCardBaseProps
  >;
type GlassCardAnchorProps = GlassCardBaseProps & { as: 'a'; href: string } & Omit<
    React.ComponentPropsWithoutRef<'a'>,
    keyof GlassCardBaseProps
  >;

export type GlassCardProps = GlassCardDivProps | GlassCardButtonProps | GlassCardAnchorProps;

const MAX_TILT_DEG = 8;

export function GlassCard({
  children,
  className = '',
  variant = 'card',
  glow = true,
  tilt = variant !== 'pill',
  as = 'div',
  ...rest
}: GlassCardProps) {
  const reducedMotion = useAppStore((s) => s.reducedMotion);
  const hasHoverPointer = useHasHoverPointer();
  const tiltEnabled = tilt && !reducedMotion && hasHoverPointer;
  const elRef = useRef<HTMLElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(py, { stiffness: 150, damping: 15, mass: 0.5 });
  const rotateX = useTransform(springY, [0, 1], [MAX_TILT_DEG, -MAX_TILT_DEG]);
  const rotateY = useTransform(springX, [0, 1], [-MAX_TILT_DEG, MAX_TILT_DEG]);
  const glowX = useTransform(springX, (v) => `${v * 100}%`);
  const glowY = useTransform(springY, (v) => `${v * 100}%`);

  function handleMove(e: MouseEvent<HTMLElement>) {
    if (!tiltEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  const style: MotionStyle | undefined = tiltEnabled
    ? { rotateX, rotateY, transformPerspective: 800, ['--glow-x' as string]: glowX, ['--glow-y' as string]: glowY }
    : undefined;

  const combinedClassName = `${styles.card} ${styles[variant]} ${glow ? styles.glow : ''} ${className}`.trim();

  const commonProps = {
    ref: elRef,
    className: combinedClassName,
    style,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    ...rest,
  };

  if (as === 'button') {
    return (
      <motion.button {...(commonProps as React.ComponentPropsWithoutRef<typeof motion.button>)}>
        {children}
      </motion.button>
    );
  }
  if (as === 'a') {
    return (
      <motion.a {...(commonProps as React.ComponentPropsWithoutRef<typeof motion.a>)}>{children}</motion.a>
    );
  }
  return <motion.div {...(commonProps as React.ComponentPropsWithoutRef<typeof motion.div>)}>{children}</motion.div>;
}
