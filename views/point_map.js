require([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/geometry/Point",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/geometry/Polyline",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/PictureMarkerSymbol",
        "esri/symbols/SimpleMarkerSymbol"]), function( Map, MapView, Graphic,Point,SimpleMarkerSymbol,
        Polyline,SimpleLineSymbol, PictureMarkerSymbol,SimpleMarkerSymbol){
        var map = new Map({
        basemap: "streets-night-vector"
        });
        var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-122.4082758, 37.7704093],
        zoom: 12
        });
        // Create a point
        var point = new Point({
        longitude: -122.4082758,
        latitude: 37.7704093
        });
        // Create a symbol for drawing the point
        var markerSymbol = new SimpleMarkerSymbol({
        color: [226, 119, 40],
        outline: {
        color: [255, 255, 255],
        width: 1
        }
        });
        // Create attributes
        var attributes = {
        Name: "Event Event", // The name of the pipeline
        Park: "Eventy Event1", // The owner of the pipeline
        City: "San Francisco" // The length of the pipeline
        };

        // Create popup template
        var popupTemplate = {
        title: "{Name}",
        content: "I am a very eventy event."
        };

        // Create a graphic and add the geometry and symbol to it
        var pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        attributes: attributes,
        popupTemplate: popupTemplate
        });

        view.graphics.add(pointGraphic);  
        }