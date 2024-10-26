import React, { useState, useEffect, Fragment } from 'react';

interface SequentialTypingEffectProps {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
}

const SequentialTypingEffect: React.FC<SequentialTypingEffectProps> = ({
  lines,
  typingSpeed = 5,
  lineDelay = 100
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isLineComplete, setIsLineComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentText.length < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (!isLineComplete) {
      setIsLineComplete(true);
      const timer = setTimeout(() => {
        setCurrentLineIndex(prevIndex => prevIndex + 1);
        setCurrentText('');
        setIsLineComplete(false);
      }, lineDelay);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentText, isLineComplete, lines, typingSpeed, lineDelay]);

  return (
    <div>
      {lines.slice(0, currentLineIndex).map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <div>{currentText}</div>
    </div>
  );
};

// Example usage
const TypingEffectComponent: React.FC<{text: string}> = ({ text }) => {

  return (
    <Fragment>
      <SequentialTypingEffect lines={[text]} />
    </Fragment>
  );
};

export default TypingEffectComponent;