'use client';

import React, { useState, useEffect, useRef } from 'react';

import { ContainerNoSSR } from '@/components/Layout';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { getGeneratedText } from '@/api/greenglobeai';
import { Sidebar } from '../Sidebar';

export const Chat = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prompt = useRef<string>('');

  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    prompt.current = input;

    setInput('');

    if (!prompt) {
      setIsLoading(false);
      return;
    };

    setMessages([...messages, { role: 'user', content: prompt.current }]);

    const result = await getGeneratedText(prompt.current);

    setMessages(prevMessages => [...prevMessages, { role: 'system', content: result.message.content }]);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handlePresetSelect = (preset: string) => {
    setInput(preset);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <section className='flex absolute inset-0 z-50'>
      <Sidebar onSelectPreset={handlePresetSelect} />

      <ContainerNoSSR className='flex flex-col bg-white'>
        {!messages.length ? (
          <div className='flex-1 text-center pt-36'>
            Hi there! I&apos;m a GreenGlobeAI chatbot. How can I help you today?
          </div>
        ) : null}

        <div className='flex-1 p-4 overflow-auto'>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 border p-4 rounded-lg w-fit ${message.role === 'user' ? 'bg-blue-100 text-right ml-auto' : 'bg-green-100 text-left'}`}
            >
              {message.content}
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className='relative flex w-full gap-4 pt-8'>
          <div className='absolute text-sm top-1'>{isLoading ? "Assistant is typing..." : ''}</div>

          <Input
            wrapperClassName='mt-full rounded-md flex-1'
            className='w-full h-full'
            placeholder='Enter your question'
            value={input}
            onChangeInput={handleChange}
          />

          <Button className='h-fit' type='submit'>Send</Button>
        </form>
      </ContainerNoSSR>
    </section>
  );
}
