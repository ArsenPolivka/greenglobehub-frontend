import { ContainerNoSSR } from '@/components/Layout';

import { advices } from '@/utils/constants';

export const Advices = () => {
  return (
    <ContainerNoSSR className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-h2-mobile lg:text-h2 uppercase color-main-black mb-10">Advices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {advices.map((advice, index) => (
          <div key={index} className="bg-white hover:bg-primary-100 transition-all rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold text-black">{advice}</p>
          </div>
        ))}
      </div>
    </ContainerNoSSR>
  )
}
