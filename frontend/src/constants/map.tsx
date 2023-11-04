import {Position, lineString as makeLineString} from '@turf/helpers';
import {IMakeRouteProps} from '../types/constantT/location.type';

export const TEMP_TEST_ROUTES: Position[] = [
  [77.4472939, 12.9771523],
  [77.4472939, 12.9771523],
  [77.4472939, 12.9771523],
];
export const getRoutesFromDirections = ({directions}: IMakeRouteProps) => {
  //const route = makeLineString(res.body.routes[0].geometry.coordinates)
  const route = makeLineString(directions);

  console.log('ROUTE: ', route);
  return route;
};
