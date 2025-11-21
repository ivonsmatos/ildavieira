/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_CLOUD_NAME: string
  readonly VITE_CLOUDINARY_API_KEY: string
  readonly VITE_CLOUDINARY_UPLOAD_PRESET: string
  readonly VITE_SITE_URL: string
  readonly NODE_ENV: 'development' | 'production' | 'test'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace JSX {
  interface IntrinsicElements {
    'df-messenger': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'chat-title'?: string;
      'agent-id'?: string;
      'language-code'?: string;
      'intent'?: string;
      'chat-icon'?: string;
    };
  }
}