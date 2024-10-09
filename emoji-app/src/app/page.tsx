"use client";

import { useState, useEffect } from 'react';

// Define the types for the emojis
type Emoji = {
  name: string;
  htmlCode: string[];
  category: string;
};

export default function Home() {
  const [currentEmoji, setCurrentEmoji] = useState<Emoji | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [emojis, setEmojis] = useState<Emoji[]>([]); // Local state for emojis

  // Fetching emojis when the component mounts
  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const response = await fetch('https://emojihub-1001447344924.asia-southeast2.run.app/api/all');
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data: Emoji[] = await response.json();
        setEmojis(data); // Set the fetched emojis
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmojis(); // Call the fetch function
  }, []);

  // Set a random emoji when emojis are loaded
  useEffect(() => {
    if (emojis.length > 0) {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      setCurrentEmoji(emojis[randomIndex]);
    }
  }, [emojis]);

  // Function to shuffle the emoji
  const shuffleEmoji = () => {
    if (emojis.length > 0) {
      setIsShuffling(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        setCurrentEmoji(emojis[randomIndex]);
        setIsShuffling(false);
      }, 3000);
    }
  };

  // Function to copy emoji information to clipboard
  const copyToClipboard = () => {
    if (currentEmoji) {
      const textToCopy = `${currentEmoji.htmlCode.join('')} - ${currentEmoji.category}`;
      navigator.clipboard.writeText(textToCopy);
      alert('Copied to clipboard!');
    }
  };

  // Loading state while currentEmoji is null
  if (!currentEmoji) return <div>Loading...</div>;

  return (
    <div className="w-[430px] h-[932px] flex justify-center items-center bg-yellow-300 font-dm-sans">
      <div className="border-blue-500 border-4 p-4 w-[390px] h-[872px] relative bg-white">
        <div className="bg-[#F8DD84] p-[1cm] h-full w-full flex flex-col items-center justify-center">
          <header className="w-full p-4 border-b-4 border-dashed border-blue-500 h-20">
            <h1 className="text-blue-700 text-4xl font-bold border-2 border-blue-700 p-2 inline-block">
              emojilogy
            </h1>
          </header>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-3xl font-bold text-blue-700 mb-4 text-center">
              What's your <span className="font-extrabold">emoji</span> today?
            </p>
            <p className="italic text-lg mb-4 text-blue-700">Click it!</p>
            <div
              className={`text-7xl cursor-pointer mb-4 ${isShuffling ? 'animate-spin' : ''}`}
              onClick={shuffleEmoji}
              dangerouslySetInnerHTML={{ __html: currentEmoji.htmlCode.join('') }}
            />
            <p className="italic text-sm text-blue-600 mb-8 text-center">
              You’re sad and you know it. Just give up, don’t try.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
