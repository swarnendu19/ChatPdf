import { type ClassValue, clsx} from 'clsx'
import React from 'react'
import {twMerge} from 'tailwind-merge'

 export function cn(...input : ClassValue[]) {
  return  twMerge(clsx(input))
}

 
