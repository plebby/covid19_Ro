import React, { PureComponent } from 'react';
import { FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { SimpleOptions } from './types';
import { Scale, Spiral } from 'react-wordcloud';

export class SimpleEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  onFontFamilyChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, fontFamily: target.value },
    });
  };
  onFontStyleChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, fontStyle: target.value },
    });
  };
  onFontWeightChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, fontWeight: target.value },
    });
  };
  onScaleChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, scale: target.value },
    });
  };
  onSpiralChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, scale: target.value },
    });
  };
  onPaddingChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, padding: target.value },
    });
  };
  onRotationsChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, rotations: target.value },
    });
  };
  onTransitionDurationChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, transitionDuration: target.value },
    });
  };
  onTooltipChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, enableTooltip: target.value },
    });
  };
  onDeterministicChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: { ...this.props.options.wordCloudOptions, deterministic: target.value },
    });
  };
  onFontSizeMinChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: {
        ...this.props.options.wordCloudOptions,
        fontSizes: [target.value, this.props.options.wordCloudOptions.fontSizes[1]],
      },
    });
  };
  onFontSizeMaxChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: {
        ...this.props.options.wordCloudOptions,
        fontSizes: [this.props.options.wordCloudOptions.fontSizes[0], target.value],
      },
    });
  };
  onMinRotAngleChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: {
        ...this.props.options.wordCloudOptions,
        rotationAngles: [target.value, this.props.options.wordCloudOptions.rotationAngles[1]],
      },
    });
  };
  onMaxRotAngleChanged = ({ target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      wordCloudOptions: {
        ...this.props.options.wordCloudOptions,
        rotationAngles: [this.props.options.wordCloudOptions.rotationAngles[0], target.value],
      },
    });
  };

  onDsTagChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, datasource_tags_field: target.value });
  };
  onDsCountChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, datasource_count_field: target.value });
  };

  render() {
    const { options } = this.props;
    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Datasource Options</h5>
        <FormField
          label="Datasource Count Field"
          labelWidth={15}
          inputWidth={20}
          type="text"
          onChange={this.onDsCountChanged}
          value={options.datasource_count_field || ''}
        />
        <FormField
          label="Datasource Tags Field"
          labelWidth={15}
          inputWidth={20}
          type="text"
          onChange={this.onDsTagChanged}
          value={options.datasource_tags_field || ''}
        />
        <h5 className="section-heading">Wordcloud Options</h5>
        <FormField
          label="Font Family"
          labelWidth={15}
          inputWidth={20}
          type="text"
          onChange={this.onFontFamilyChanged}
          value={options.wordCloudOptions.fontFamily || ''}
        />
        <FormField
          label="Font Style"
          labelWidth={15}
          inputWidth={20}
          type="text"
          onChange={this.onFontStyleChanged}
          value={options.wordCloudOptions.fontStyle || ''}
        />
        <FormField
          label="Font Weight"
          labelWidth={15}
          inputWidth={20}
          type="text"
          onChange={this.onFontWeightChanged}
          value={options.wordCloudOptions.fontWeight || ''}
        />
        <FormField
          label="Font Min Size"
          labelWidth={15}
          inputWidth={20}
          type="number"
          onChange={this.onFontSizeMinChanged}
          value={options.wordCloudOptions.fontSizes[0]}
        />
        <FormField
          label="Font Max Size"
          labelWidth={15}
          inputWidth={20}
          type="number"
          onChange={this.onFontSizeMaxChanged}
          value={options.wordCloudOptions.fontSizes[1]}
        />
        <FormField
          label="Min Rotation Angle"
          labelWidth={15}
          inputWidth={20}
          type="number"
          onChange={this.onMinRotAngleChanged}
          value={options.wordCloudOptions.rotationAngles[0]}
        />
        <FormField
          label="Max Rotation Angle"
          labelWidth={15}
          inputWidth={20}
          type="number"
          onChange={this.onMaxRotAngleChanged}
          value={options.wordCloudOptions.rotationAngles[1]}
        />
        <FormField
          label="Padding"
          labelWidth={15}
          inputWidth={20}
          type="number"
          onChange={this.onPaddingChanged}
          value={options.wordCloudOptions.padding || ''}
        />
        <FormField
          label="Rotations"
          labelWidth={15}
          inputWidth={20}
          type="number"
          onChange={this.onRotationsChanged}
          value={options.wordCloudOptions.rotations || ''}
        />
        <FormField
          label="Transition Duration"
          labelWidth={15}
          inputWidth={20}
          type="number"
          onChange={this.onTransitionDurationChanged}
          value={options.wordCloudOptions.transitionDuration || ''}
        />
        <FormField
          label="Enable Tooltip"
          labelWidth={15}
          inputWidth={20}
          type="checkbox"
          checked={options.wordCloudOptions.enableTooltip}
          onChange={this.onTooltipChanged}
        />
        <FormField
          label="Deterministic"
          labelWidth={15}
          inputWidth={20}
          type="checkbox"
          checked={options.wordCloudOptions.deterministic}
          onChange={this.onDeterministicChanged}
        />
        <div className={'form-field'}>
          <label className={'gf-form-label width-15'}>Scale</label>
          <select className={'gf-form-input width-20'} value={options.wordCloudOptions.scale} onChange={this.onScaleChanged}>
            <option value={Scale.Sqrt}>{Scale.Sqrt.toString()}</option>
            <option value={Scale.Linear}>{Scale.Linear.toString()}</option>
            <option value={Scale.Log}>{Scale.Log.toString()}</option>
          </select>
        </div>
        <div className={'form-field'}>
          <label className={'gf-form-label width-15'}>Spiral</label>
          <select className={'gf-form-input width-20'} value={options.wordCloudOptions.spiral} onChange={this.onSpiralChanged}>
            <option value={Spiral.Archimedean}>{Spiral.Archimedean.toString()}</option>
            <option value={Spiral.Rectangular}>{Spiral.Rectangular.toString()}</option>
          </select>
        </div>
      </div>
    );
  }
}
