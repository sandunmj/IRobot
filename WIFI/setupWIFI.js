import {NetworkInfo} from 'react-native-network-info';

export const getGatewayIP = async function() {
  var ip = '';
  await NetworkInfo.getGatewayIPAddress().then(defaultGateway => {
    ip = defaultGateway;
  });
  return ip;
};
