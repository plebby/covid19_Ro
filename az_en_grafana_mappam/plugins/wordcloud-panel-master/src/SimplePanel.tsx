import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import ReactWordcloud from 'react-wordcloud';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  render() {
    const { options, data, width, height } = this.props;
    const words: Array<{ text: string; value: number }> = [];
    let tags: string[] = [];
    let count: number[] = [];
    data.series[options.series_index].fields.forEach((field, index1) => {
        if (field.name === options.datasource_tags_field) {
          tags = field.values.toArray();
        }
        if (field.name === options.datasource_count_field) {
          count = field.values.toArray();
        }
      });
    tags.forEach((value, index) => {
      words.push({ text: value, value: count[index] });
    });
    return (
      <div
        style={{
          width,
          height,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <div style={{ height: height, width: width }}>
          <ReactWordcloud words={words} options={options.wordCloudOptions} />
        </div>
      </div>
    );
  }
}
