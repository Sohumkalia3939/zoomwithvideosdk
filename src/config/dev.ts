import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'PjoGp5knLCs3NfdFhJhqSFWHh5kpLSgkSI22',
  sdkSecret: 'W6ITxKQ6WEvb6UMAeomZo4WsDDshGlu1kl42',
  topic: 'test',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '',
  signature: '',
};