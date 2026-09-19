const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';
export interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
  user: {
    name: string;
    username: string;
  };
  links: {
    html: string;
  };
}
export async function searchImages(
  query: string,
  count: number = 1
): Promise<UnsplashImage[]> {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn('Unsplash API key not configured');
    return [];
  }
  try {
    const response = await fetch(
      `${UNSPLASH_API_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
        next: {
          revalidate: 3600, 
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    return [];
  }
}
export function getImageAttribution(image: UnsplashImage): string {
  return `Photo by ${image.user.name} on Unsplash`;
}
export function getPhotographerUrl(image: UnsplashImage): string {
  return `${image.links.html}?utm_source=screenstreet&utm_medium=referral`;
}


