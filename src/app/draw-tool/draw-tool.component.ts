import { Component, OnInit, Input } from '@angular/core';

import { FeatureGroup, Control, Draw } from 'leaflet';

import 'leaflet-draw';
import 'leaflet-geometryutil';
import 'leaflet-snap';


@Component({
    selector: 'draw-tool',
    templateUrl: './draw-tool.component.html',
    styleUrls: ['./draw-tool.component.css']
})
export class DrawToolComponent implements OnInit {

    @Input() map: any;
    constructor() { }

    ngOnInit() {
        const drawnItems = new FeatureGroup();
        this.map.addLayer(drawnItems);
        var drawControl = new Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        });
        this.map.addControl(drawControl);
    }

}
