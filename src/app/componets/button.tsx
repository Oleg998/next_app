'use client'
import React from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}
 
export default function Button ({disabled , ...rest }:ButtonProps){
    return (
        <button {...rest} className={ clsx (
            'bg-gray-900 rounded py-2.5 px-5 font-medium text-base text-center text-zinc-50',
            !disabled && 'hover bg-gray-800 active:bg-gray-950',
            disabled && 'text-zinc-100'
        )}/>
    )
}


