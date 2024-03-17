'use client';

import { ReactNode } from "react";
import cn from "@/helpers/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={cn('container px-5 lg:px-16 py-8 lg:py-10', className)}>
      { children }
    </section>
  )
}

export default Container;