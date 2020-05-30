// ******* MAPA DESPLEGADO AL INICIO **********
var mapa;
var vista;
var legend, legend2, legend3, legend4, legend5, legend6, legend7, legend8, legend9;
var swipe1, swipe2, swipe3, swipe4;
// Varaibles para Capas
var capaInicial;
var capaResultados2010, capaResultados2001, capaResultados1990, capaGentri1, capaGentri2,
    capaGentri3, capaGentri4, capaGentri5, capaGentri6, capaGentri7, capaGentri8;
//Variables de features
var FeatureLayerRico;
//PopUps
var popUp1, popUp2,popUp3,popUp4,popUp5,popUp6,popUp7,popUp8,popUp9;
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Legend",
    "esri/widgets/Swipe",
    "esri/views/ui/DefaultUI"
], function(Map, MapView,FeatureLayer,Legend,Swipe) {
    FeatureLayerRico = FeatureLayer;
    SwipeRico = Swipe;
    Leyenda = Legend;

    //Llamada al mapa base
    const map = new Map({
        basemap: "streets"
    });


    capaInicial = new FeatureLayer({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/Barrios_CentroHistorico_F/FeatureServer",
            opacity: 1.0

    });

    map.basemap = "gray";
    map.add(capaInicial);

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-78.5155452, -0.2220584], // longitude, latitude
        zoom: 15
    });

    mapa = map;
    vista = view;

    legend = new Leyenda({
        view: vista,
        layerInfos: [
            {
                layer: capaInicial,
                title: "Barrios - Centro Histórico"
            }
        ]
    });

    view.ui.add(legend,"bottom-right");


});

//******** LLAMADA A NUEVAS CAPAS ***********
function cambioCapa(arreglo) {
    vista.ui.remove(swipe1);
    vista.ui.remove(swipe2);
    vista.ui.remove(swipe3);
    vista.ui.remove(swipe4);
    vista.ui.remove(legend);
    vista.ui.remove(legend2);
    vista.ui.remove(legend3);
    vista.ui.remove(legend4);
    vista.ui.remove(legend5);
    vista.ui.remove(legend6);
    vista.ui.remove(legend7);
    vista.ui.remove(legend8);
    vista.ui.remove(legend9);
    mapa.removeAll();

    console.log("recibi mi arreglo "+ arreglo);
    if(arreglo == "Resultados Análisis 2010"){
        popUp1={
            "title": "INFORMACIÓN DEL SECTOR",
            "content": function () {
                return "Total Viviendas: {T_VI_S}" +
                    "<br> Total Personas: {T_PE_S}" +
                    "<br> Total de Personas Gentrificables: {T_GENT_S}" +
                    "<br> Total Personas >25 años: {T_PE_25_S}" +
                    "<br> Total Personas con Educación Superior: {T_PE_ES_S}" +
                    "<br> Total Personas con Empleo: {T_PE_EM_S}" +
                    "<br> Total Personas sin Empleo: {T_PE_SE_S}" +
                    "<br> Total Personas con Empleo Gerencial: {T_PE_EG_S}" +
                    "<br> Promedio de Personas por Vivienda: {P_PE_V}";
            }
        };
        capaResultados2010 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/datos_sector_2010_f/FeatureServer",
            outFields: ["T_VI_S","T_PE_S","T_GENT_S","T_PE_25_S","T_PE_ES_S","T_PE_EM_S","T_PE_SE_S","T_PE_EG_S","P_PE_V"],
            popupTemplate:popUp1,
            opacity: 0.1
        });

        mapa.add(capaInicial);
        mapa.add(capaResultados2010);

        vista.ui.add(legend,"bottom-right");

    }
    else if(arreglo=="Resultados Análisis 2001"){
        popUp2={
            "title": "INFORMACIÓN DEL SECTOR",
            "content": function () {
                return "Total Viviendas: {T_VI_S}" +
                    "<br> Total Personas: {T_PE_S}" +
                    "<br> Total de Personas Gentrificables: {T_GENT_S}" +
                    "<br> Total Personas >25 años: {T_PE_25_S}" +
                    "<br> Total Personas con Educación Superior: {T_PE_ES_S}" +
                    "<br> Total Personas con Empleo: {T_PE_EM_S}" +
                    "<br> Total Personas sin Empleo: {T_PE_SE_S}" +
                    "<br> Total Personas con Empleo Gerencial: {T_PE_EG_S}" +
                    "<br> Promedio de Personas por Vivienda: {P_PE_V}";
            }
        };
        capaResultados2001 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/datos_sector_2001_f/FeatureServer",
            outFields: ["T_VI_S","T_PE_S","T_GENT_S","T_PE_25_S","T_PE_ES_S","T_PE_EM_S","T_PE_SE_S","T_PE_EG_S","P_PE_V"],
            popupTemplate:popUp2,
            opacity: 0.1
        });

        mapa.add(capaInicial);
        mapa.add(capaResultados2001);
        vista.ui.add(legend,"bottom-right");

    }
    else if (arreglo == "Resultados Análisis 1990"){
        popUp2={
            "title": "INFORMACIÓN DEL SECTOR",
            "content": function () {
                return "Total Viviendas: {T_VI_S}" +
                    "<br> Total Personas: {T_PE_S}" +
                    "<br> Total de Personas Gentrificables: {T_GENT_S}" +
                    "<br> Total Personas >25 años: {T_PE_25_S}" +
                    "<br> Total Personas con Educación Superior: {T_PE_ES_S}" +
                    "<br> Total Personas con Empleo: {T_PE_EM_S}" +
                    "<br> Total Personas sin Empleo: {T_PE_SE_S}" +
                    "<br> Total Personas con Empleo Gerencial: {T_PE_EG_S}" +
                    "<br> Promedio de Personas por Vivienda: {P_PE_V}";
            }
        };
        capaResultados1990 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/datos_sector_1990_f/FeatureServer",
            outFields: ["T_VI_S","T_PE_S","T_GENT_S","T_PE_25_S","T_PE_ES_S","T_PE_EM_S","T_PE_SE_S","T_PE_EG_S","P_PE_V"],
            popupTemplate:popUp2,
            opacity: 0.1
        });

        mapa.add(capaInicial);
        mapa.add(capaResultados1990);
        vista.ui.add(legend,"bottom-right");
    }
    else if (arreglo == "Gentrificación 1990 - 2001 - Sectores"){

       popUp3={
            "title": "INFORMACIÓN DEL SECTOR",
            "content": function () {
                return "Barrio: {BARRIO}" +
                    "<br>SECTOR: {DPA_SECTOR}"+
                    "<br>Personas >25 años: {T_PE_25_S}"+
                    "<br>Personas empleo G/T/ADM: {T_PE_EG_S}"+
                    "<br>Personas con educación superior: {T_PE_ES_S}"+
                    "<br>Pormedio de cambios vivienda: {PROM_POBR}"+
                    "<br>Estado de Gentrificación: {DESC_FEN}"
            }
        };
       capaGentri1 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/gent_sectores_1990_f/FeatureServer",
            outFields: ["BARRIO","DPA_SECTOR","T_PE_25_S","T_PE_EG_S","T_PE_ES_S","PROM_POBR","DESC_FEN"],
            popupTemplate:popUp3,
            opacity: 0.9
        });
       capaGentri2 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/gent_sectores_2001_f/FeatureServer",
           outFields: ["BARRIO","DPA_SECTOR","T_PE_25_S","T_PE_EG_S","T_PE_ES_S","PROM_POBR","DESC_FEN"],
           popupTemplate:popUp3,
            opacity: 0.9
        });
       swipe1 = new SwipeRico({
            view: vista,
            leadingLayers: [capaGentri1],
            trailingLayers: [capaGentri2],
            position: 50,
            state: "ready"

       });
       legend2 = new Leyenda({
            view: vista,
            layerInfos: [
                {
                    layer: capaGentri1,
                    title: "Gentrificación Sectores 1990"
                }
            ]
        });
       legend3 = new Leyenda({
            view: vista,
            layerInfos: [
                {
                    layer: capaGentri2,
                    title: "Gentrificación Sectores 2001"
                }
            ]
        });

       mapa.add(capaGentri1);
       mapa.add(capaGentri2);
       vista.ui.remove(legend);
       vista.ui.add(legend3,"bottom-right");
       vista.ui.add(legend2,"bottom-left");
       vista.ui.add(swipe1)

    }
    else if (arreglo == "Gentrificación 2001 - 2010 - Sectores"){
        popUp5={
            "title": "INFORMACIÓN DEL SECTOR",
            "content": function () {
                return "Barrio: {BARRIO}" +
                    "<br>SECTOR: {DPA_SECTOR}"+
                    "<br>Personas >25 años: {T_PE_25_S}"+
                    "<br>Personas empleo G/T/ADM: {T_PE_EG_S}"+
                    "<br>Personas con educación superior: {T_PE_ES_S}"+
                    "<br>Pormedio de cambios vivienda: {PROM_POBR}"+
                    "<br>Estado de Gentrificación: {DESC_FEN}"
            }
        };
        capaGentri3 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/gent_sectores_2001_f/FeatureServer",
            outFields: ["BARRIO","DPA_SECTOR","T_PE_25_S","T_PE_EG_S","T_PE_ES_S","PROM_POBR","DESC_FEN"],
            popupTemplate:popUp5,
            opacity: 0.9
        });
        capaGentri4 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/gent_sectores_2010_f/FeatureServer",
            outFields: ["BARRIO","DPA_SECTOR","T_PE_25_S","T_PE_EG_S","T_PE_ES_S","PROM_POBR","DESC_FEN"],
            popupTemplate:popUp5,
            opacity: 0.9
        });

        swipe2 = new SwipeRico({
            view: vista,
            leadingLayers: [capaGentri3],
            trailingLayers: [capaGentri4],
            position: 50,
            state: "ready"

        });

        legend4 = new Leyenda({
            view: vista,
            layerInfos: [
                {
                    layer: capaGentri3,
                    title: "Gentrificación Sectores 2001"
                }
            ]
        });
        legend5 = new Leyenda({
            view: vista,
            layerInfos: [
                {
                    layer: capaGentri4,
                    title: "Gentrificación Sectores 2010"
                }
            ]
        });

        mapa.add(capaGentri3);
        mapa.add(capaGentri4);
        vista.ui.remove(legend);
        vista.ui.add(legend4,"bottom-left");
        vista.ui.add(legend5,"bottom-right");
        vista.ui.add(swipe2)
    }
    else if(arreglo == "Gentrificación 1990 - 2001 - Barrios"){
        popUp6={
            "title": "INFORMACIÓN DEL SECTOR",
            "content": function () {
                return "Barrio: {NOMBRE}" +
                    "<br>Personas >25 años: {T_PE_25_B}"+
                    "<br>Personas empleo G/T/ADM: {T_PE_EG_B}"+
                    "<br>Personas con educación superior: {T_PE_ES_B}"+
                    "<br>Pormedio de cambios vivienda: {P_POBR_B}"+
                    "<br>Estado de Gentrificación: {DESC_FEN}"
            }
        };
        capaGentri5 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/gent_barrios_1990_f/FeatureServer",
            outFields: ["NOMBRE","T_PE_25_B","T_PE_EG_B","T_PE_ES_B","P_POBR_B","DESC_FEN"],
            popupTemplate:popUp6,
            opacity: 0.9
        });
        popUp7={
            "title": "INFORMACIÓN DEL SECTOR",
            "content": function () {
                return "Barrio: {BARRIO}" +
                    "<br>Personas >25 años: {T_PE_25_B}"+
                    "<br>Personas empleo G/T/ADM: {T_PE_EG_B}"+
                    "<br>Personas con educación superior: {T_PE_ES_B}"+
                    "<br>Pormedio de cambios vivienda: {P_POBR_B}"+
                    "<br>Estado de Gentrificación: {DESC_FEN}"
            }
        };
        capaGentri6 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/gent_barrios_2001_f/FeatureServer",
            outFields: ["BARRIO","T_PE_25_B","T_PE_EG_B","T_PE_ES_B","P_POBR_B","DESC_FEN"],
            popupTemplate:popUp7,
            opacity: 0.9
        });

        swipe3 = new SwipeRico({
            view: vista,
            leadingLayers: [capaGentri5],
            trailingLayers: [capaGentri6],
            position: 50,
            state: "ready"

        });

        legend6 = new Leyenda({
            view: vista,
            layerInfos: [
                {
                    layer: capaGentri5,
                    title: "Gentrificación Barrios 1990"
                }
            ]
        });
        legend7 = new Leyenda({
            view: vista,
            layerInfos: [
                {
                    layer: capaGentri6,
                    title: "Gentrificación Barrios 2001"
                }
            ]
        });

        mapa.add(capaGentri5);
        mapa.add(capaGentri6);
        vista.ui.remove(legend);
        vista.ui.add(legend6,"bottom-left");
        vista.ui.add(legend7,"bottom-right");
        vista.ui.add(swipe3)
    }
    else if(arreglo == "Gentrificación 2001 - 2010 - Barrios"){
        popUp8={
            "title": "INFORMACIÓN DEL SECTOR",
            "content": function () {
                return "Barrio: {NOMBRE}" +
                    "<br>Personas >25 años: {T_PE_25_B}"+
                    "<br>Personas empleo G/T/ADM: {T_PE_EG_B}"+
                    "<br>Personas con educación superior: {T_PE_ES_B}"+
                    "<br>Pormedio de cambios vivienda: {P_POBR_B}"+
                    "<br>Estado de Gentrificación: {DESC_FEN}"
            }
        };
        capaGentri7 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/gent_barrios_2001_f/FeatureServer",
            outFields: ["NOMBRE","T_PE_25_B","T_PE_EG_B","T_PE_ES_B","P_POBR_B","DESC_FEN"],
            popupTemplate:popUp8,
            opacity: 0.9
        });
        capaGentri8 = new FeatureLayerRico({
            url : "https://services9.arcgis.com/1dyQOpYtlvpIzdDa/arcgis/rest/services/gent_barrios_2010_f/FeatureServer",
            outFields: ["NOMBRE","T_PE_25_B","T_PE_EG_B","T_PE_ES_B","P_POBR_B","DESC_FEN"],
            popupTemplate:popUp8,
            opacity: 0.9
        });

        swipe4 = new SwipeRico({
            view: vista,
            leadingLayers: [capaGentri7],
            trailingLayers: [capaGentri8],
            position: 50,
            state: "ready"

        });

        legend8 = new Leyenda({
            view: vista,
            layerInfos: [
                {
                    layer: capaGentri7,
                    title: "Gentrificación Barrios 2001"
                }
            ]
        });
        legend9 = new Leyenda({
            view: vista,
            layerInfos: [
                {
                    layer: capaGentri8,
                    title: "Gentrificación Barrios 2010"
                }
            ]
        });

        mapa.add(capaGentri7);
        mapa.add(capaGentri8);
        vista.ui.remove(legend);
        vista.ui.add(legend8,"bottom-left");
        vista.ui.add(legend9,"bottom-right");
        vista.ui.add(swipe4)
    }
}





