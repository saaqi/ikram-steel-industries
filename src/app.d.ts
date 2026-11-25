// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  // type FsLightboxSourceType = 'image' | 'video' | 'youtube' | null

  // interface FsLightboxProps {
  //   sources: Array<string | HTMLElement>
  //   type?: Exclude<FsLightboxSourceType, null>
  //   types?: FsLightboxSourceType[]
  //   thumbs?: Array<string | null>
  //   captions?: Array<string | HTMLElement | null>
  //   customAttributes?: Array<Record<string, string> | null>
  //   autoplay?: boolean
  //   maxYoutubeVideoDimensions?: { width: number; height: number }
  //   slideDistance?: number
  //   disableLocalStorage?: boolean
  //   disableThumbs?: boolean
  //   disableSlideSwiping?: boolean
  //   showThumbsOnMount?: boolean
  //   exitFullscreenOnClose?: boolean
  //   loadOnlyCurrentSource?: boolean
  //   onOpen?: () => void
  //   onClose?: () => void
  //   onInit?: () => void
  //   onShow?: () => void
  // }

  // interface FsLightboxInstance {
  //   props: FsLightboxProps
  //   open: (slideIndex?: number) => void
  //   close: () => void
  //   elements: {
  //     container: HTMLElement | null
  //     slideSwipingHoverer: HTMLElement | null
  //     sourcesOutersWrapper: HTMLElement | null
  //     sources: Array<HTMLElement | null>
  //   }
  // }

  // interface Window {
  //   trackConversion?: (label: string) => void
  //   gtag?: (...args: unknown[]) => void
  //   dataLayer?: unknown[]
  //   FsLightbox: new () => FsLightboxInstance
  //   fsLightboxInstances?: Record<string, FsLightboxInstance>
  //   refreshFsLightbox?: () => void
  // }

  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
