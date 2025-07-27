export function getSiteUrl(): string {
  const envUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  if (envUrl && envUrl.length > 0) {
    return envUrl.endsWith('/') ? envUrl : envUrl + '/';
  }
  if (import.meta.env.PROD) {
    return 'https://www.bvslab.com/';
  }
  return window.location.origin + '/';
}
