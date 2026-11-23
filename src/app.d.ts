// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  interface Window {
    trackConversion?: (label: string) => void
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
