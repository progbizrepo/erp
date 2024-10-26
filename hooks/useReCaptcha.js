import { useCallback, useRef } from 'react';

export const useReCaptcha = () => {
  const recaptchaRef = useRef(null);

  const injectReCaptchaScript = useCallback(() => {
    if (typeof window !== 'undefined' && !window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const executeReCaptcha = useCallback(async (action) => {
    if (!window.grecaptcha) {
      console.error('reCAPTCHA has not been loaded');
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action }
      );
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution error:', error);
      return null;
    }
  }, []);

  return { executeReCaptcha, injectReCaptchaScript };
};