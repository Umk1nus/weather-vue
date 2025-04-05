import type { Meta, StoryObj } from '@storybook/vue3';
import WeatherCard from '@/components/ui/WeatherCard.vue';

const meta: Meta<typeof WeatherCard> = {
  title: 'Components/WeatherCard',
  component: WeatherCard,
  tags: ['autodocs'],
  argTypes: {
    land: { control: 'text' },
    temp: { control: 'number' },
    wind: { control: 'number' },
    description: { control: 'text' },
    idWeather: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof WeatherCard>;

export const HotWeather: Story = {
  args: {
    land: 'Kiev',
    temp: 22,
    wind: 3,
    description: 'Nizhny Novgorod',
    idWeather: '01'
  }
};

export const ColdWeather: Story = {
  args: {
    land: 'New-York',
    temp: 5,
    wind: 7,
    description: 'Snowy',
    idWeather: '13'
  }
};