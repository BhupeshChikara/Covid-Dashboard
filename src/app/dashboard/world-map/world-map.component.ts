import { Component, OnInit } from '@angular/core';
declare var $:any
declare var sample_data:any;
@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#vmap').vectorMap({
      map: 'world_en',
      backgroundColor: '#FBF6F6',
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#FF0019', '#FFC4C6'],
      normalizeFunction: 'polynomial'
  });
  }

}
