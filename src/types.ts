export type TWeather = {
  land: string
  temp: number
  wind: number
  description: string
  id_weather: string
}

export interface HeaderWidgetProps {
  weatherItems: Array<string>
  addLocation: (location: string) => void
  deleteLocation: (index: number) => void
  dropHandl: (event: Event, index: number) => void
  dragStartHandl: (index: number) => void
  dragOverHandl: (event: Event) => void
  errorAddLocation: string
}

export interface WeatherCardProps {
  land: string
  temp: number
  wind: number
  description: string
  idWeather: string
}

export interface MyLocationProps {
  weatherMyLocation: (key: string) => void
  errorMyLocation: string
}

export interface SettingsProps {
  toggleSettingsVisibility: () => void
  addLocation: (location: string) => void
  visibleSettings: boolean
  weatherItems: string[]
  deleteLocation: (index: number) => void
  dropHandl: (event: Event, index: number) => void
  dragStartHandl: (index: number) => void
  dragOverHandl: (event: Event) => void
  errorAddLocation: string
}

export interface SettingsItemProps {
  weather: string
  index: number
  deleteLocation: (index: number) => void
  dropHandl: (event: DragEvent, index: number) => void
  dragStartHandl: (index: number) => void
  dragOverHandl: (event: DragEvent) => void
}