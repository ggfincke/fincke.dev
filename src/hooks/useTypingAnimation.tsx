// src/hooks/useTypingAnimation.tsx
import { useState, useEffect } from 'react';

const useTypingAnimation = (text: string, speed: number = 100) => 
{
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
  
    useEffect(() => 
{
      let index = 0;
      const timer = setInterval(() => 
{
        if (index < text.length) 
{
          setDisplayText(text.slice(0, index + 1));
          index++;
        }
 else 
{
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);
  
      return () => clearInterval(timer);
    }, [text, speed]);
  
    return { displayText, isComplete };
  };

export default useTypingAnimation;