export const getIcon = (id: string) => {
  switch (id) {
    case '01':
      return '/sun.svg'
    case '02':
      return '/suncloud.svg'
    case '03':
      return '/cloudy.svg'
    case '04':
      return '/cloudy.svg'
    case '09':
      return '/rain.svg'
    case '10':
      return '/rain.svg'
    case '11':
      return '/storm.svg'
    case '13':
      return '/snow.svg'
    case '50':
      return '/mist.svg'
    default:
      return ''
  }
}

export const fetchWeatherData = async (url: string) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}