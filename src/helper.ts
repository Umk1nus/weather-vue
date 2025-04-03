export const getIcon = (id: string) => {
  const baseUrl = './assets/images';
  switch (id) {
    case '01':
      return urlAssets(`${baseUrl}/sun.svg`);
    case '02':
      return urlAssets(`${baseUrl}/suncloud.svg`);
    case '03':
      return urlAssets(`${baseUrl}/cloudy.svg`);
    case '04':
      return urlAssets(`${baseUrl}/cloudy.svg`);
    case '09':
      return urlAssets(`${baseUrl}/rain.svg`);
    case '10':
      return urlAssets(`${baseUrl}/rain.svg`);
    case '11':
      return urlAssets(`${baseUrl}/storm.svg`);
    case '13':
      return urlAssets(`${baseUrl}/snow.svg`);
    case '50':
      return  urlAssets(`${baseUrl}/mist.svg`);
    default:
      return '';
  }
};

const urlAssets = (url: string) => new URL(url, import.meta.url).href;

export const fetchWeatherData = async (url: string) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}