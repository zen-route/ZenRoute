import {Position} from '@turf/helpers';

export interface ILocationProp {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude: number | null;
}

export interface IStateLocationProp {
  latitude: number;
  longitude: number;
}

export interface IMakeRouteProps {
  directions: Position[];
}
