"use client";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  isServer,
} from "@tanstack/react-query";
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | null = null;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (browserQueryClient) {
      return browserQueryClient;
    } else {
      browserQueryClient = makeQueryClient();
      return browserQueryClient;
    }
  }
}

function CustomQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default CustomQueryClientProvider;
