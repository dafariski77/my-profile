import React from "react";

const ModernTooling = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-40">
      <h2 className="text-4xl font-black mb-8 border-b-4 border-black inline-block bg-white px-2 transform -rotate-1">
        MODERN TOOLING
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* XState Card */}
        <div className="bg-cyber-bg border-4 border-black p-0 overflow-hidden shadow-neobrutalism">
          <div className="bg-black text-white p-3 font-mono text-sm border-b-4 border-black flex justify-between">
            <span>state_machine.ts</span>
            <span className="text-cyber-lime">● Active</span>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-black mb-2 uppercase text-cyber-orange drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              XState
            </h3>
            <p className="font-bold mb-4">Deterministic State Management</p>
            <p className="text-sm mb-4">
              Replacing boolean chaos with finite state machines. Visualizing
              logic flows to eliminate impossible states in complex multi-step
              forms.
            </p>
            <div className="bg-gray-200 border-2 border-black p-2 font-mono text-xs">
              <pre className="whitespace-pre-wrap">
                {`const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});`}
              </pre>
            </div>
          </div>
        </div>

        {/* TanStack Query Card */}
        <div className="bg-cyber-bg border-4 border-black p-0 overflow-hidden shadow-neobrutalism">
          <div className="bg-black text-white p-3 font-mono text-sm border-b-4 border-black flex justify-between">
            <span>data_fetcher.ts</span>
            <span className="text-cyber-orange">● Cached</span>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-black mb-2 uppercase text-cyber-lime drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              TanStack Query
            </h3>
            <p className="font-bold mb-4">Server State Synchronization</p>
            <p className="text-sm mb-4">
              Decoupling UI from data fetching logic. Implementing optimistic
              updates, infinite scrolling, and aggressive caching strategies.
            </p>
            <div className="bg-gray-200 border-2 border-black p-2 font-mono text-xs">
              <pre className="whitespace-pre-wrap">
                {`const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 1000 * 60 * 5, 
});`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernTooling;
