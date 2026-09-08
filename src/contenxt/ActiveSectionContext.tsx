import { createContext, useContext, useEffect, useState, useRef, type ReactNode, type RefObject } from 'react';

type SectionsId = 'hero' | 'expertise';

interface ActiveSectionContextType {
  activeId: SectionsId | '';
  registerSection: (id: SectionsId, ref: RefObject<HTMLElement | null>) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
  rootMargin?: string;
}

export function ActiveSectionProvider({ children, rootMargin = '-20% 0px -60% 0px' }: ProviderProps) {
  const [activeId, setActiveId] = useState<SectionsId | ''>('');
  const sectionsRegistry = useRef<{ [id: string]: RefObject<HTMLElement | null> }>({});

  const registerSection = (id: SectionsId, ref: RefObject<HTMLElement | null>) => {
    sectionsRegistry.current[id] = ref;
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id') as SectionsId | null;
          if (id) setActiveId(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin,
      threshold: 0,
    });

    Object.values(sectionsRegistry.current).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <ActiveSectionContext.Provider value={{ activeId, registerSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

// Tell ESLint to allow these hook exports alongside the component
/* eslint-disable-next-line react-refresh/only-export-components */
export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context.activeId;
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function useRegisterSection(id: SectionsId) {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useRegisterSection must be used within an ActiveSectionProvider');
  }
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    context.registerSection(id, sectionRef);
  }, [id, context]);

  return sectionRef;
}
