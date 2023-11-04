/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MapboxGL from '@rnmapbox/maps';
import {Feature, LineString, Properties} from '@turf/helpers';

interface IRouteRenderProps {
  route: Feature<LineString, Properties>;
}
const RouteRender = ({route}: IRouteRenderProps) => {
  console.log('ROUTE: ', route);
  return (
    <MapboxGL.ShapeSource id="routeSource" shape={route.geometry}>
      <MapboxGL.LineLayer
        id="routeFill"
        style={{
          lineColor: 'red',
          lineWidth: 3.2,
          lineCap: MapboxGL.LineJoin.Round,
          lineOpacity: 1.84,
        }}
      />
    </MapboxGL.ShapeSource>
  );
};

export default RouteRender;
