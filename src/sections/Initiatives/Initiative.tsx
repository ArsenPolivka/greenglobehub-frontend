'use client';

import { ContainerNoSSR } from '@/components/Layout';
import { Loader } from '@/components/Loader';
import { useGetInitiativeById } from '@/hooks/initiatives/useGetInitiativeById';
import type { EventT } from '@/utils/types';
import React, { useState } from 'react'

type InitiativeProps = {
  initiativeId: string;
}

type TabsProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const Tabs = ({ selectedTab, setSelectedTab }: TabsProps) => {
  return (
    <div className="flex space-x-4 mb-6">
      <button
        className={`px-4 py-2 ${selectedTab === 'members' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setSelectedTab('members')}
      >
        Members
      </button>
      <button
        className={`px-4 py-2 ${selectedTab === 'events' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setSelectedTab('events')}
      >
        Events
      </button>
      <button
        className={`px-4 py-2 ${selectedTab === 'posts' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setSelectedTab('posts')}
      >
        Posts
      </button>
    </div>
  );
};

export const Initiative = ({ initiativeId }: InitiativeProps) => {
  const { initiative, events, loading } = useGetInitiativeById(initiativeId);
  const [selectedTab, setSelectedTab] = useState('members');

  if (!initiative || loading) {
    return (
      <div className='bg-white w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
        <Loader />
      </div>
    );
  }

  const renderMembers = () => (
    <ul className="list-disc list-inside">
      {initiative?.members?.map((member: string, index: number) => (
        <li key={index} className="text-gray-600">{member}</li>
      ))}
    </ul>
  );

  const renderEvents = () => (
    <div className="grid grid-cols-2 gap-10">
      {events.map((event: EventT, index: number) => (
        <div key={index} className="text-gray-600 mb-4">
          {event.thumbnail && <img src={event.thumbnail} alt={event.title} className="w-full h-32 object-cover rounded-md mb-2" />}
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <p>{event.description}</p>
          <p>Start Date: {new Date(event.startDate).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );

  const renderPosts = () => (
    <ul className="list-disc list-inside">
      {initiative?.posts?.map((post: string, index: number) => (
        <li key={index} className="text-gray-600">{post}</li>
      ))}
    </ul>
  );

  return (
    <ContainerNoSSR className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={initiative.thumbnail}
          alt={initiative.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-black mb-4">{initiative.name}</h1>
        <p className="text-gray-600 mb-4">{initiative.description}</p>
        <p className="text-gray-600 mb-4">Address: {initiative.address}</p>
        <p className="text-gray-600 mb-4">Website: <a href={initiative.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{initiative.website}</a></p>
        <p className="text-gray-600 mb-4">Donate: <a href={initiative.donateUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">{initiative.donateUrl}</a></p>
        <p className="text-gray-600 mb-4">Created At: {new Date(initiative.createdAt).toLocaleDateString()}</p>
        <p className="text-gray-600 mb-4">Updated At: {new Date(initiative.updatedAt).toLocaleDateString()}</p>
        
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        {selectedTab === 'members' && renderMembers()}
        {selectedTab === 'events' && renderEvents()}
        {selectedTab === 'posts' && renderPosts()}
      </div>
    </ContainerNoSSR>
  )
}
