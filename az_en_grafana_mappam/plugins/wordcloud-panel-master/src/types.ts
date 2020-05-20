import { MinMaxPair, Scale, Spiral } from 'react-wordcloud';

export interface WordCloudOptions {
  colors: string[];
  enableTooltip: boolean;
  deterministic: boolean;
  fontFamily: string;
  fontSizes: MinMaxPair;
  fontStyle: string;
  fontWeight: string;
  padding: number;
  rotations: number;
  rotationAngles: MinMaxPair;
  scale: Scale;
  spiral: Spiral;
  transitionDuration: number;
}

export interface SimpleOptions {
  wordCloudOptions: WordCloudOptions;
  datasource_tags_field: string;
  datasource_count_field: string;
  series_index: number;
}

export const wordCloudDefaults: WordCloudOptions = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: true,
  deterministic: true,
  fontFamily: 'arial',
  fontSizes: [15, 80],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 2,
  rotationAngles: [0, 0],
  scale: Scale.Sqrt,
  spiral: Spiral.Archimedean,
  transitionDuration: 800,
};

export const defaults: SimpleOptions = {
  wordCloudOptions: wordCloudDefaults,
  datasource_tags_field: 'tweet_content.tags',
  datasource_count_field: 'Count',
  series_index: 0
};
