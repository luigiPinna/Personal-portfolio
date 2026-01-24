import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Wrapper component che rivela i children quando entrano nel viewport
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elementi da animare
 * @param {Object} props.variants - Varianti framer-motion (hidden/visible)
 * @param {string} props.className - Classi CSS opzionali
 * @param {string} props.margin - Margine per trigger animation (default: "-100px")
 * @param {boolean} props.once - Anima solo una volta (default: true)
 */
export const ScrollReveal = ({
  children,
  variants,
  className = "",
  margin = "-100px",
  once = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger children animation quando entrano nel viewport
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elementi da animare
 * @param {Object} props.containerVariants - Varianti container
 * @param {Object} props.itemVariants - Varianti per ogni item
 * @param {string} props.className - Classi CSS opzionali
 */
export const StaggerReveal = ({
  children,
  containerVariants,
  itemVariants,
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Fade in element quando entra nel viewport
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elementi da animare
 * @param {string} props.className - Classi CSS opzionali
 * @param {number} props.delay - Ritardo animazione in secondi
 */
export const FadeInView = ({
  children,
  className = "",
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Scale in element quando entra nel viewport
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elementi da animare
 * @param {string} props.className - Classi CSS opzionali
 * @param {number} props.delay - Ritardo animazione in secondi
 */
export const ScaleInView = ({
  children,
  className = "",
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
