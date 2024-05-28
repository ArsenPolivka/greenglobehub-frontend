import { Loader } from "@/components/Loader";

export default function Loading() {
  return (
    <div className='bg-white w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
        <Loader />
    </div>
  )
}