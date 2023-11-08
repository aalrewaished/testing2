
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleMaps_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "districts_1": {
            "type": "geojson",
            "data": json_districts_1
        }
                    ,
        "KingdomOfSaudiArabiaLines_2": {
            "type": "geojson",
            "data": json_KingdomOfSaudiArabiaLines_2
        }
                    ,
        "PacelStationsMastersheetAlhanouf_3": {
            "type": "geojson",
            "data": json_PacelStationsMastersheetAlhanouf_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleMaps_0_0",
            "type": "raster",
            "source": "GoogleMaps_0"
        },
        {
            "id": "lyr_districts_1_0",
            "type": "line",
            "source": "districts_1",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#232323'}
        }
,
        {
            "id": "lyr_KingdomOfSaudiArabiaLines_2_0",
            "type": "line",
            "source": "KingdomOfSaudiArabiaLines_2",
            "layout": {},
            "paint": {'line-width': 1.6428571428571428, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_PacelStationsMastersheetAlhanouf_3_0",
            "type": "circle",
            "source": "PacelStationsMastersheetAlhanouf_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 10.714285714285714, 2], 'circle-color': '#12cf0f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}