import React, { useEffect, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay: number;
}

interface StaggeredFadeInContent {
    texts: React.ReactNode[];
    textAlign?: TextAlign;
    maxWidth?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
};

const StaggeredFadeInContent: React.FC<StaggeredFadeInContent> = ({texts, textAlign, maxWidth}) => {
  return (
    <div style={{ margin: '0 auto', textAlign: textAlign || 'center', maxWidth: maxWidth || '800px' }}>
      {texts.map((text, index) => (
        <FadeInSection key={index} delay={index * 500}>
          {text}
        </FadeInSection>
      ))}
    </div>
  );
};

export default StaggeredFadeInContent;