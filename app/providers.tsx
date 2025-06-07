"use client"

import * as React from "react"
import { ToastProvider } from "@/hooks/use-toast"

export function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>
} 