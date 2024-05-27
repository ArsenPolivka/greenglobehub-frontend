import { ReactNode } from "react";
import dynamic from "next/dynamic";

import cn from "@/helpers/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={cn('container px-5 lg:px-16 py-8 lg:py-10 max-w-full', className)}>
      { children }
    </section>
  )
}

export default Container;

export const ContainerNoSSR = dynamic(() => import('./Container'), { ssr: false });
