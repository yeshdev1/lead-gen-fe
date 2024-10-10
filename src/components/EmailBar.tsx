'use client';
import React, { useState, KeyboardEvent } from 'react';

const LargeSearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Enter pressed. Input value:', inputValue);
      // Perform your network request here
    }
  };

  return (
    <div className="fixed w-screen h-screen flex items-start justify-center">
      <div className="relative w-[50vw] h-[100px] flex items-center bg-[#002439] rounded-[10px]">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Email"
          className="w-full h-full px-3 bg-transparent text-[#4e7988] placeholder-gray-500 border-none focus:outline-none"
          style={{
            caretColor: 'green',
            fontSize: 'calc(100px * 0.3)', // 70% of input height
            lineHeight: '100px', // Center text vertically
          }}
        />
        <span className="absolute right-3 text-gray-500" style={{ fontSize: 'calc(100px * 0.3)' }}>
          Enter
        </span>
        <div 
          className={`absolute bottom-4 left-3 right-3 h-[2px] transition-colors duration-300 ${
            isFocused ? 'bg-gray-600' : 'bg-gray-300'
          }`}
        />
      </div>
    </div>

  );
};

export default LargeSearchInput;