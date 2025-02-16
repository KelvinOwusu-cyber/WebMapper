ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32630").setExtent([674417.970618, 755989.113935, 681361.558038, 760898.638688]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Sector5B_2 = new ol.format.GeoJSON();
var features_Sector5B_2 = format_Sector5B_2.readFeatures(json_Sector5B_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Sector5B_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector5B_2.addFeatures(features_Sector5B_2);
var lyr_Sector5B_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector5B_2, 
                style: style_Sector5B_2,
                popuplayertitle: 'Sector 5 \'B\' ',
                interactive: true,
                title: '<img src="styles/legend/Sector5B_2.png" /> Sector 5 \'B\' '
            });
var format_WebMapnewOrigWebMap_3 = new ol.format.GeoJSON();
var features_WebMapnewOrigWebMap_3 = format_WebMapnewOrigWebMap_3.readFeatures(json_WebMapnewOrigWebMap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_WebMapnewOrigWebMap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebMapnewOrigWebMap_3.addFeatures(features_WebMapnewOrigWebMap_3);
var lyr_WebMapnewOrigWebMap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebMapnewOrigWebMap_3, 
                style: style_WebMapnewOrigWebMap_3,
                popuplayertitle: 'WebMap.newOrig — WebMap',
                interactive: true,
                title: '<img src="styles/legend/WebMapnewOrigWebMap_3.png" /> WebMap.newOrig — WebMap'
            });
var format_Sector5A_4 = new ol.format.GeoJSON();
var features_Sector5A_4 = format_Sector5A_4.readFeatures(json_Sector5A_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Sector5A_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector5A_4.addFeatures(features_Sector5A_4);
var lyr_Sector5A_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector5A_4, 
                style: style_Sector5A_4,
                popuplayertitle: 'Sector 5 \'A\' ',
                interactive: true,
                title: '<img src="styles/legend/Sector5A_4.png" /> Sector 5 \'A\' '
            });
var format_Sector3_5 = new ol.format.GeoJSON();
var features_Sector3_5 = format_Sector3_5.readFeatures(json_Sector3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Sector3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector3_5.addFeatures(features_Sector3_5);
var lyr_Sector3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector3_5, 
                style: style_Sector3_5,
                popuplayertitle: 'Sector 3',
                interactive: true,
                title: '<img src="styles/legend/Sector3_5.png" /> Sector 3'
            });
var format_Sector4B_6 = new ol.format.GeoJSON();
var features_Sector4B_6 = format_Sector4B_6.readFeatures(json_Sector4B_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Sector4B_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector4B_6.addFeatures(features_Sector4B_6);
var lyr_Sector4B_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector4B_6, 
                style: style_Sector4B_6,
                popuplayertitle: 'Sector 4 \'B\' ',
                interactive: true,
                title: '<img src="styles/legend/Sector4B_6.png" /> Sector 4 \'B\' '
            });
var format_Sector4A_7 = new ol.format.GeoJSON();
var features_Sector4A_7 = format_Sector4A_7.readFeatures(json_Sector4A_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Sector4A_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector4A_7.addFeatures(features_Sector4A_7);
var lyr_Sector4A_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector4A_7, 
                style: style_Sector4A_7,
                popuplayertitle: 'Sector 4 \'A\' ',
                interactive: true,
                title: '<img src="styles/legend/Sector4A_7.png" /> Sector 4 \'A\' '
            });
var format_Sector2_8 = new ol.format.GeoJSON();
var features_Sector2_8 = format_Sector2_8.readFeatures(json_Sector2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Sector2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector2_8.addFeatures(features_Sector2_8);
var lyr_Sector2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector2_8, 
                style: style_Sector2_8,
                popuplayertitle: 'Sector 2',
                interactive: true,
                title: '<img src="styles/legend/Sector2_8.png" /> Sector 2'
            });
var format_Sector1_9 = new ol.format.GeoJSON();
var features_Sector1_9 = format_Sector1_9.readFeatures(json_Sector1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Sector1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector1_9.addFeatures(features_Sector1_9);
var lyr_Sector1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector1_9, 
                style: style_Sector1_9,
                popuplayertitle: 'Sector 1',
                interactive: true,
                title: '<img src="styles/legend/Sector1_9.png" /> Sector 1'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_1,lyr_Sector5B_2,lyr_WebMapnewOrigWebMap_3,lyr_Sector5A_4,lyr_Sector3_5,lyr_Sector4B_6,lyr_Sector4A_7,lyr_Sector2_8,lyr_Sector1_9,],
                                fold: "open",
                                title: 'group1'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Sector5B_2.setVisible(true);lyr_WebMapnewOrigWebMap_3.setVisible(true);lyr_Sector5A_4.setVisible(true);lyr_Sector3_5.setVisible(true);lyr_Sector4B_6.setVisible(true);lyr_Sector4A_7.setVisible(true);lyr_Sector2_8.setVisible(true);lyr_Sector1_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_group1];
lyr_Sector5B_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WebMapnewOrigWebMap_3.set('fieldAliases', {'full_plus_': 'full_plus_', 'fid_1': 'fid_1', 'layer': 'layer', 'path': 'path', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'xcoord_2': 'xcoord_2', 'ycoord_2': 'ycoord_2', 'Google_Map_URL': 'Google_Map_URL', });
lyr_Sector5A_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sector3_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Sector4B_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Sector4A_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Sector2_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Sector1_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Sector5B_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_WebMapnewOrigWebMap_3.set('fieldImages', {'full_plus_': '', 'fid_1': '', 'layer': '', 'path': '', 'xcoord': '', 'ycoord': '', 'xcoord_2': '', 'ycoord_2': '', 'Google_Map_URL': '', });
lyr_Sector5A_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Sector3_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Sector4B_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Sector4A_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Sector2_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Sector1_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Sector5B_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WebMapnewOrigWebMap_3.set('fieldLabels', {'full_plus_': 'no label', 'fid_1': 'no label', 'layer': 'no label', 'path': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'xcoord_2': 'no label', 'ycoord_2': 'no label', 'Google_Map_URL': 'no label', });
lyr_Sector5A_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Sector3_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Sector4B_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Sector4A_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Sector2_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Sector1_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Sector1_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});