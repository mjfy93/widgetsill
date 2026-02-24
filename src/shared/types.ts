// Type declaration for the electronAPI exposed via preload
export interface ElectronAPI {
  platform: string
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI
  }
}

export {}
