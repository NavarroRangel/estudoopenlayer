import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Circle } from 'ol/geom';
import { toStringXY } from 'ol/coordinate';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  }),
  target: 'map',
});
const coord = [7.85,47.9833333]
const out = toStringXY(coord,1)
new Circle(out,33,)