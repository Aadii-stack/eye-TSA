import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { TetherLine, WebCorner } from './MetaDecor';
import { Reveal, MaskReveal, META_EASE } from './Reveal';
import labFloor from '../../assets/events/cbp-ty/cbp-ty-cover.jpg';
import labSession from '../../assets/events/cbp-ty/cbp-ty-gallery-1.jpg';
import recognition from '../../assets/events/cbp-ty/cbp-ty-gallery-2.jpg';
import memento from '../../assets/events/cbp-ty/cbp-ty-gallery-3.jpg';
import './MetaMemories.css';

/*
 * Genuine ITSA laboratory-session photographs from the repository archive
 * (src/assets/events/cbp-ty). Swap `src`/`alt` when the approved convention
 * set is released; `pos` is the object-position window for the crop.
 */
const FRAMES = [
  {
    key: 'floor',
    src: labFloor,
    modifier: 'mem-frame--featured',
    label: 'The floor',
    width: 1440,
    height: 1920,
    pos: '50% 42%',
    depth: -20,
    alt: 'An ITSA session running in the SLRTCE Information Technology computer laboratory, faculty at the front and students at the terminals.',
  },
  {
    key: 'session',
    src: labSession,
    modifier: 'mem-frame--wide',
    label: 'In session',
    width: 1440,
    height: 1920,
    pos: '50% 40%',
    depth: 14,
    alt: 'Faculty addressing seated students from the front of the SLRTCE computer laboratory.',
  },
  {
    key: 'recognition',
    src: recognition,
    modifier: 'mem-frame--mid',
    label: 'Recognition',
    width: 1440,
    height: 1920,
    pos: '50% 46%',
    depth: 16,
    alt: 'A student being greeted by faculty at the front of the laboratory during an ITSA session.',
  },
  {
    key: 'memento',
    src: memento,
    modifier: 'mem-frame--small',
    label: 'Memento',
    width: 1440,
    height: 1920,
    pos: '50% 40%',
    depth: -10,
    alt: 'Two faculty members exchanging a plant as a token of thanks at an ITSA event.',
  },
];

const ENTRANCE = {
  featured: {
    hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
    show: {
      opacity: 1,
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 1.2, ease: META_EASE },
    },
  },
  support: {
    hidden: { opacity: 0, y: 42, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: META_EASE },
    },
  },
};

const FOCUSABLE =
  'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function Lightbox({ frames, index, onIndexChange, onClose }) {
  const reduce = useReducedMotion();
  const dialogRef = useRef(null);
  const frame = frames[index];
  const total = frames.length;

  const step = useCallback(
    (delta) => onIndexChange((index + delta + total) % total),
    [index, onIndexChange, total],
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        step(1);
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        step(-1);
        return;
      }
      if (event.key !== 'Tab') return;

      const dialog = dialogRef.current;
      if (!dialog) return;
      const targets = Array.from(dialog.querySelectorAll(FOCUSABLE));
      if (targets.length === 0) return;
      const first = targets[0];
      const last = targets[targets.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, step]);

  useEffect(() => {
    dialogRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <motion.div
      ref={dialogRef}
      className="mem-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Meta Summit 2025 archive photo ${index + 1} of ${total}: ${frame.label}`}
      tabIndex={-1}
      onClick={onClose}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <div className="mem-lightbox-stage" onClick={(event) => event.stopPropagation()}>
        <div className="mem-lightbox-bar">
          <span className="mem-lightbox-count font-mono">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="mem-lightbox-label font-mono">{frame.label}</span>
          <button
            type="button"
            className="mem-lightbox-btn mem-lightbox-close"
            onClick={onClose}
            aria-label="Close photo viewer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mem-lightbox-frame">
          <img src={frame.src} alt={frame.alt} />
          <span className="mem-lightbox-edge" aria-hidden="true" />
        </div>

        <div className="mem-lightbox-nav">
          <button
            type="button"
            className="mem-lightbox-btn"
            onClick={() => step(-1)}
            aria-label="Previous photograph"
          >
            <ChevronLeft size={20} />
          </button>
          <p className="mem-lightbox-alt">{frame.alt}</p>
          <button
            type="button"
            className="mem-lightbox-btn"
            onClick={() => step(1)}
            aria-label="Next photograph"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function MetaMemories() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const triggersRef = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // One scroll subscription drives every frame's depth offset.
  const layerShift = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  const ghostX = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  const ghostScale = useTransform(scrollYProgress, [0, 1], [1.08, 0.94]);

  // The archive's lighting shifts as the reader moves through it.
  const lightX = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const lightOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.35, 0.95, 0.45]);

  // Pointer tilt on the featured frame only.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 18 });
  const tiltY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 18 });

  const handlePointerMove = (event) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const closeLightbox = useCallback(() => {
    const index = openIndex;
    setOpenIndex(null);
    if (index !== null) triggersRef.current[index]?.focus();
  }, [openIndex]);

  return (
    <section
      ref={sectionRef}
      className="meta-memories-section section-py"
      aria-labelledby="meta-memories-heading"
    >
      <TetherLine className="meta-memories-tether" />

      {/* Luminous thread handing the eye from the overview into the archive */}
      <motion.span
        className="mem-thread"
        aria-hidden="true"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: META_EASE }}
      />

      <motion.div
        className="mem-light"
        aria-hidden="true"
        style={reduce ? undefined : { x: lightX, opacity: lightOpacity }}
      />

      <motion.span
        className="meta-ghost-word meta-ghost-memories"
        aria-hidden="true"
        style={reduce ? undefined : { x: ghostX, scale: ghostScale }}
      >
        Archive
      </motion.span>
      <WebCorner className="meta-memories-web meta-memories-web--tl" orientation="tl" />
      <WebCorner className="meta-memories-web meta-memories-web--br" orientation="br" />

      <div className="container-wide meta-memories-inner">
        <div className="meta-memories-head">
          <Reveal>
            <div className="circuit-label">
              <span className="circuit-dot"></span>
              03 / Archive
            </div>
          </Reveal>

          <MaskReveal delay={0.08} from="inset(0 0 100% 0)">
            <h2 id="meta-memories-heading" className="section-title meta-memories-heading">
              Meta Summit 2025
            </h2>
          </MaskReveal>

          <Reveal delay={0.14}>
            <p className="meta-memories-kicker font-mono">Memories</p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="meta-memories-intro">
              Selected frames from the ITSA event archive.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="mem-composition"
          style={reduce ? undefined : { '--sp': layerShift }}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
          }}
        >
          {FRAMES.map((frame, idx) => (
            <div
              key={frame.key}
              className={`mem-frame ${frame.modifier}`}
              style={{ '--depth': frame.depth }}
              {...(idx === 0 && !reduce
                ? { onPointerMove: handlePointerMove, onPointerLeave: resetPointer }
                : {})}
            >
              <motion.figure
                className="mem-frame-shift"
                variants={idx === 0 ? ENTRANCE.featured : ENTRANCE.support}
              >
                <motion.span
                  className="mem-frame-media"
                  style={idx === 0 && !reduce ? { rotateX: tiltX, rotateY: tiltY } : undefined}
                >
                  <button
                    type="button"
                    className="mem-frame-trigger"
                    onClick={() => setOpenIndex(idx)}
                    aria-label={`Enlarge photograph ${idx + 1} of ${FRAMES.length}: ${frame.label}`}
                    ref={(el) => {
                      triggersRef.current[idx] = el;
                    }}
                  >
                    <img
                      src={frame.src}
                      alt={frame.alt}
                      width={frame.width}
                      height={frame.height}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      style={{ objectPosition: frame.pos }}
                    />
                  </button>
                  <span className="mem-frame-shade" aria-hidden="true" />
                  <span className="mem-frame-edge" aria-hidden="true" />
                </motion.span>

                <figcaption className="mem-frame-caption font-mono">
                  <span className="caption-index">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="caption-index caption-divider" aria-hidden="true">
                    /
                  </span>
                  <span className="caption-index">{String(FRAMES.length).padStart(2, '0')}</span>
                  <span className="caption-label">{frame.label}</span>
                </figcaption>
              </motion.figure>
            </div>
          ))}
        </motion.div>
      </div>

      {openIndex !== null && (
        <Lightbox
          frames={FRAMES}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
