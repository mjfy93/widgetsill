import { contextBridge } from 'electron'

// This is the secure bridge between main and renderer
// Only expose what the renderer NEEDS, nothing more

contextBridge.exposeInMainWorld('electronAPI', {
  // We'll add secure methods here as we build features
  // Example: getSystemTheme, readPhotoFolder, etc.
  
  platform: process.platform,
})

console.log('Preload script loaded securely')