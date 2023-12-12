ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32720").setExtent([11237.209885, 7716653.632671, 1446432.817821, 8527768.171731]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ECOREGIONES_SC_WGS84_1 = new ol.format.GeoJSON();
var features_ECOREGIONES_SC_WGS84_1 = format_ECOREGIONES_SC_WGS84_1.readFeatures(json_ECOREGIONES_SC_WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_ECOREGIONES_SC_WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECOREGIONES_SC_WGS84_1.addFeatures(features_ECOREGIONES_SC_WGS84_1);
var lyr_ECOREGIONES_SC_WGS84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ECOREGIONES_SC_WGS84_1, 
                style: style_ECOREGIONES_SC_WGS84_1,
                interactive: false,
    title: 'ECOREGIONES_SC_WGS84<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_0.png" /> Bosque Húmedo a Perhúmedo Siempreverde de Montaña y Subhúmeda (Bosques de Yungas del Subandino y Yungas de Chapare)<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_1.png" /> Bosque Húmedo Estacional Tropical de Tierras Bajas (Amazónico)<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_2.png" /> Bosque Húmedo Siempreverde, de Transición en las Serranías del Escudo Precámbrico<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_3.png" /> Bosque Seco Deciduo del Chaco Basal y del Chaco Serrano Periférico<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_4.png" /> Bosque Subhúmedo Semi Siempreverde de Montaña y Submontaña (Yungas Tucumano - Boliviano)<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_5.png" /> Bosque Subhúmedo Semideciduo del Escudo Precámbrico y la Chiquitanía<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_6.png" /> Bosque Tropical Húmedo del Escudo Precámbrico<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_7.png" /> Humedales de Tierras Bajas (Izozog, Tichela (Baure), NO Beni, Río Grande, etc.)<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_8.png" /> Sabanas del Cerrado (Meseta Caparuch, Concepción y San Ignacio de Velasco)<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_9.png" /> Sabanas y Palmares del Pantanal<br />\
    <img src="styles/legend/ECOREGIONES_SC_WGS84_1_10.png" /> Valles Secos Mesotérmicos (Monte Espinoso Microfoliado y Restos de Bosque seco Deciduo)<br />'
        });
var format_PLUS_SC_WGS84_2 = new ol.format.GeoJSON();
var features_PLUS_SC_WGS84_2 = format_PLUS_SC_WGS84_2.readFeatures(json_PLUS_SC_WGS84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_PLUS_SC_WGS84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLUS_SC_WGS84_2.addFeatures(features_PLUS_SC_WGS84_2);
var lyr_PLUS_SC_WGS84_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLUS_SC_WGS84_2, 
                style: style_PLUS_SC_WGS84_2,
                interactive: false,
    title: 'PLUS_SC_WGS84<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_0.png" /> AGROFORESTAL INTENSIVA<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_1.png" /> AGROPECUARIA EXTENSIVA Y PROTECCION<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_2.png" /> AGROPECUARIA Y PROTECCION<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_3.png" /> AGROPECUARIO INTENSIVO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_4.png" /> AGROSILVOPASTORIL Y PROTECCION<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_5.png" /> AGROSILVOPATORIL<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_6.png" /> AREA NATURAL DE MANEJO INTEGRADO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_7.png" /> AREA SIN ESTUDIOS<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_8.png" /> AREA URBANA<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_9.png" /> AREAS DE PROTECCION Y USO AGROFORESTAL LIMITADO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_10.png" /> BOSQUE DE MANEJO SOSTENIBLE<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_11.png" /> BOSQUE DE MANEJO SOSTENIBLE Y GANADERIA REGULADA, DE ACUERDO A REGLAS DE MANEJO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_12.png" /> BOSQUE DE PROTECCION<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_13.png" /> BOSQUE DE PROTECCION DE ORILLAS DE LOS CURSOS IMPORTANTES DE AGUA<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_14.png" /> BOSQUE EXPERIMENTAL<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_15.png" /> BOSQUE PERMANENTE DE PRODUCCION - BOSQUE DE MANEJO SOSTENIBLE<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_16.png" /> CONSERVACION<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_17.png" /> CUERPOS DE AGUA<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_18.png" /> GANADERIA EXTENSIVA Y CONSERVACION<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_19.png" /> GANADERIA EXTENSIVA Y MANEJO DE FAUNA<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_20.png" /> GANADERIA EXTENSIVA Y PROTECCION<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_21.png" /> GANADERIA EXTENSIVA Y PROTECCION EN DUNAS<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_22.png" /> GANADERIA INTENSIVA<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_23.png" /> OTRAS AREAS DE USO RESTRINGIDO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_24.png" /> PARQUE NACIONAL HISTORICO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_25.png" /> PARQUE REGIONAL LOMAS DE ARENA<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_26.png" /> PARQUES NACIONALES<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_27.png" /> PROTECCION<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_28.png" /> PROTECCION CON USO AGROPECUARIO EXTENSIVO LIMITADO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_29.png" /> PROTECCION CON USO AGROSILVOPASTORIL LIMITADO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_30.png" /> PROTECCION CON USO FORESTAL LIMITADO Y USO AGROSILVOPASTORIL<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_31.png" /> PROTECCION CON USO SILVOPASTORIL LIMITADO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_32.png" /> PROTECCION Y USO AGROPECUARIO EXTENSIVO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_33.png" /> REFUGIO DE VIDA SILVESTRE<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_34.png" /> RESERVA BIOLOGICA<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_35.png" /> RESERVA DE VIDA SILVESTRE<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_36.png" /> RESERVAS DE INMOVILIZACION<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_37.png" /> USO AGRICOLA INTENSIVO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_38.png" /> USO AGROPECUARIO EXTENSIVO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_39.png" /> USO AGROPECUARIO INTENSIVO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_40.png" /> USO AGROSILVOPASTORIL<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_41.png" /> USO AGROSILVOPASTORIL LIMITADO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_42.png" /> USO FORESTAL LIMITADO, BOSQUE DE CONSERVACION Y DE MANEJO SOSTENIBLE<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_43.png" /> USO FORESTAL MADERABLE<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_44.png" /> USO FORESTAL MADERABLE LIMITADO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_45.png" /> USO FORESTAL MULTIPLE<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_46.png" /> USO FORESTAL MULTIPLE LIMITADO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_47.png" /> USO GANADERO EXTENSIVO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_48.png" /> USO GANADERO EXTENSIVO CON MANEJO DE BOSQUE<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_49.png" /> USO GANADERO EXTENSIVO CON POTENCIAL DE RIEGO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_50.png" /> USO GANADERO INTENSIVO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_51.png" /> USO SILVOPASTORIL<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_52.png" /> USO SILVOPASTORIL Y USO AGROPECUARIO EXTENSIVO<br />\
    <img src="styles/legend/PLUS_SC_WGS84_2_53.png" /> ZONA DE AMORTIGUAMIENTO Y PROTECCION<br />'
        });
var format_AREAS_PROTEGIDAS_SC_WGS84_3 = new ol.format.GeoJSON();
var features_AREAS_PROTEGIDAS_SC_WGS84_3 = format_AREAS_PROTEGIDAS_SC_WGS84_3.readFeatures(json_AREAS_PROTEGIDAS_SC_WGS84_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_AREAS_PROTEGIDAS_SC_WGS84_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_PROTEGIDAS_SC_WGS84_3.addFeatures(features_AREAS_PROTEGIDAS_SC_WGS84_3);
var lyr_AREAS_PROTEGIDAS_SC_WGS84_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREAS_PROTEGIDAS_SC_WGS84_3, 
                style: style_AREAS_PROTEGIDAS_SC_WGS84_3,
                interactive: false,
    title: 'AREAS_PROTEGIDAS_SC_WGS84<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_SC_WGS84_3_0.png" /> Amboró<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_SC_WGS84_3_1.png" /> Carrasco<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_SC_WGS84_3_2.png" /> Iñao<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_SC_WGS84_3_3.png" /> Kaa-iya del Gran Chaco<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_SC_WGS84_3_4.png" /> Noel Kempff Mercado<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_SC_WGS84_3_5.png" /> Otuquis<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_SC_WGS84_3_6.png" /> San Matías<br />'
        });
var format_CUMAT_SC_WGS84_4 = new ol.format.GeoJSON();
var features_CUMAT_SC_WGS84_4 = format_CUMAT_SC_WGS84_4.readFeatures(json_CUMAT_SC_WGS84_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_CUMAT_SC_WGS84_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUMAT_SC_WGS84_4.addFeatures(features_CUMAT_SC_WGS84_4);
var lyr_CUMAT_SC_WGS84_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUMAT_SC_WGS84_4, 
                style: style_CUMAT_SC_WGS84_4,
                interactive: false,
    title: 'CUMAT_SC_WGS84<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_0.png" /> Area Urbana<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_1.png" /> Bañados de Otuquis<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_2.png" /> Bañados del Río Grande<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_3.png" /> Bosque de galerías Madidi-Heath<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_4.png" /> Colinas de Carandaití<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_5.png" /> Colinas de La Guardia<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_6.png" /> Colinas de Villa Tunari<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_7.png" /> Colinas Sur de Cuevo<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_8.png" /> Cuestas Santiago de Chiquitos<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_9.png" /> Depresión Remanso<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_10.png" /> DUNAS DEL PALMAR<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_11.png" /> Faldas de Huanchaca<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_12.png" /> Lagos y Lagunas<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_13.png" /> Llanura de Baures<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_14.png" /> Llanura de Huirapitindi<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_15.png" /> Llanura de piedemonte de Cabezas<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_16.png" /> Llanura de piedemonte de Colpa<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_17.png" /> Llanura de piedemonte de Huanchaca<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_18.png" /> Llanura de Piedemonte de Villamontes<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_19.png" /> Llanura de piedemonte Tumupasa<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_20.png" /> Llanura de Santa Cruz<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_21.png" /> Llanura del Chaco<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_22.png" /> Llanura del río Beni-Mamoré<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_23.png" /> Llanura este de Baures<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_24.png" /> Llanura Itenez - Versalles<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_25.png" /> Llanura Laguna Concepción<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_26.png" /> Llanura norte de Buena Vista<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_27.png" /> Llanura oeste del Chaco<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_28.png" /> Llanura Pailón - Los Troncos<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_29.png" /> Llanura Parapetí - Pilcomayo<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_30.png" /> Llanura río San Pablo<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_31.png" /> Llanura. Pie de Monte. Norte San José de Chiquito<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_32.png" /> Mesas de Huanchaca<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_33.png" /> Mesas de Natividad<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_34.png" /> Pedillanura de San Ramón<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_35.png" /> Pedillanura Hito Villazón<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_36.png" /> Pedillanura San Ignacio de Moxos<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_37.png" /> Pedillanura San Ignacio de Velasco<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_38.png" /> Pedillanura San Rafael<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_39.png" /> Penillanura de San Ramón<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_40.png" /> Penillanura norte de San Joaquín<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_41.png" /> Ríos<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_42.png" /> Serranía Norte de Sella<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_43.png" /> Serranías Amboró<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_44.png" /> Serranías de Aguaragüe<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_45.png" /> Serranías de Totora<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_46.png" /> Serranías de Valle Grande<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_47.png" /> Serranías de Villa Tunari<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_48.png" /> Serranías del Mutún<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_49.png" /> Serranías San Diablo<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_50.png" /> Valle de Mairana<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_51.png" /> Valle del río Tuichi<br />\
    <img src="styles/legend/CUMAT_SC_WGS84_4_52.png" /> Valles de Yacuiba<br />'
        });
var format_MUNICIPIOS_SC_WGS84_z20s_5 = new ol.format.GeoJSON();
var features_MUNICIPIOS_SC_WGS84_z20s_5 = format_MUNICIPIOS_SC_WGS84_z20s_5.readFeatures(json_MUNICIPIOS_SC_WGS84_z20s_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_MUNICIPIOS_SC_WGS84_z20s_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_SC_WGS84_z20s_5.addFeatures(features_MUNICIPIOS_SC_WGS84_z20s_5);
var lyr_MUNICIPIOS_SC_WGS84_z20s_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOS_SC_WGS84_z20s_5, 
                style: style_MUNICIPIOS_SC_WGS84_z20s_5,
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_SC_WGS84_z20s_5.png" /> MUNICIPIOS_SC_WGS84_z20s'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ECOREGIONES_SC_WGS84_1.setVisible(true);lyr_PLUS_SC_WGS84_2.setVisible(true);lyr_AREAS_PROTEGIDAS_SC_WGS84_3.setVisible(true);lyr_CUMAT_SC_WGS84_4.setVisible(true);lyr_MUNICIPIOS_SC_WGS84_z20s_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ECOREGIONES_SC_WGS84_1,lyr_PLUS_SC_WGS84_2,lyr_AREAS_PROTEGIDAS_SC_WGS84_3,lyr_CUMAT_SC_WGS84_4,lyr_MUNICIPIOS_SC_WGS84_z20s_5];
lyr_ECOREGIONES_SC_WGS84_1.set('fieldAliases', {'AREA': 'AREA', 'CODIGO': 'CODIGO', 'DESCRIPCIO': 'DESCRIPCIO', 'RANGO_ALTm': 'RANGO_ALTm', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PLUS_SC_WGS84_2.set('fieldAliases', {'FID_plus_n': 'FID_plus_n', 'CATEGORIA': 'CATEGORIA', 'TIPO_USO': 'TIPO_USO', 'UBICACIÓN': 'UBICACIÓN', 'AGRICOLA': 'AGRICOLA', 'GANADERA': 'GANADERA', 'EXTRACCION': 'EXTRACCION', 'MADERERA': 'MADERERA', 'PROTECCION': 'PROTECCION', 'PLUS': 'PLUS', 'AGROSILVOP': 'AGROSILVOP', 'ESPECIFICA': 'ESPECIFICA', 'CONSERVACI': 'CONSERVACI', 'FORESTAL': 'FORESTAL', 'AGROPASTOR': 'AGROPASTOR', 'sup_cc': 'sup_cc', 'MUNICIPIO': 'MUNICIPIO', 'CODIGO': 'CODIGO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AREAS_PROTEGIDAS_SC_WGS84_3.set('fieldAliases', {'APROTS': 'APROTS', 'CODIGO': 'CODIGO', 'NOMBRE_AP_': 'NOMBRE_AP_', 'CATEGORIA': 'CATEGORIA', 'BASE_LEG_1': 'BASE_LEG_1', 'AREA': 'AREA', 'NOMB_CORTO': 'NOMB_CORTO', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', });
lyr_CUMAT_SC_WGS84_4.set('fieldAliases', {'BOLIVIA': 'BOLIVIA', 'DESCRIPCIO': 'DESCRIPCIO', 'CAI': 'CAI', 'CPI': 'CPI', 'GPS': 'GPS', 'CAE': 'CAE', 'CPE': 'CPE', 'GPN': 'GPN', 'BNM': 'BNM', 'BNO': 'BNO', 'BPL': 'BPL', 'CUMAT': 'CUMAT', 'MUNICIPIO': 'MUNICIPIO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MUNICIPIOS_SC_WGS84_z20s_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LEY_MUN': 'LEY_MUN', 'F_LEY_MUN': 'F_LEY_MUN', 'COD_MUN': 'COD_MUN', 'MUN_TIOC': 'MUN_TIOC', });
lyr_ECOREGIONES_SC_WGS84_1.set('fieldImages', {'AREA': 'TextEdit', 'CODIGO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'RANGO_ALTm': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PLUS_SC_WGS84_2.set('fieldImages', {'FID_plus_n': 'TextEdit', 'CATEGORIA': 'TextEdit', 'TIPO_USO': 'TextEdit', 'UBICACIÓN': 'TextEdit', 'AGRICOLA': 'TextEdit', 'GANADERA': 'TextEdit', 'EXTRACCION': 'TextEdit', 'MADERERA': 'TextEdit', 'PROTECCION': 'TextEdit', 'PLUS': 'TextEdit', 'AGROSILVOP': 'TextEdit', 'ESPECIFICA': 'TextEdit', 'CONSERVACI': 'TextEdit', 'FORESTAL': 'TextEdit', 'AGROPASTOR': 'TextEdit', 'sup_cc': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CODIGO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AREAS_PROTEGIDAS_SC_WGS84_3.set('fieldImages', {'APROTS': 'TextEdit', 'CODIGO': 'TextEdit', 'NOMBRE_AP_': 'TextEdit', 'CATEGORIA': 'TextEdit', 'BASE_LEG_1': 'TextEdit', 'AREA': 'TextEdit', 'NOMB_CORTO': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_CUMAT_SC_WGS84_4.set('fieldImages', {'BOLIVIA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'CAI': 'TextEdit', 'CPI': 'TextEdit', 'GPS': 'TextEdit', 'CAE': 'TextEdit', 'CPE': 'TextEdit', 'GPN': 'TextEdit', 'BNM': 'TextEdit', 'BNO': 'TextEdit', 'BPL': 'TextEdit', 'CUMAT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_MUNICIPIOS_SC_WGS84_z20s_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'LEY_MUN': 'TextEdit', 'F_LEY_MUN': 'DateTime', 'COD_MUN': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_ECOREGIONES_SC_WGS84_1.set('fieldLabels', {'AREA': 'no label', 'CODIGO': 'no label', 'DESCRIPCIO': 'no label', 'RANGO_ALTm': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PLUS_SC_WGS84_2.set('fieldLabels', {'FID_plus_n': 'no label', 'CATEGORIA': 'no label', 'TIPO_USO': 'no label', 'UBICACIÓN': 'no label', 'AGRICOLA': 'no label', 'GANADERA': 'no label', 'EXTRACCION': 'no label', 'MADERERA': 'no label', 'PROTECCION': 'no label', 'PLUS': 'no label', 'AGROSILVOP': 'no label', 'ESPECIFICA': 'no label', 'CONSERVACI': 'no label', 'FORESTAL': 'no label', 'AGROPASTOR': 'no label', 'sup_cc': 'no label', 'MUNICIPIO': 'no label', 'CODIGO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AREAS_PROTEGIDAS_SC_WGS84_3.set('fieldLabels', {'APROTS': 'no label', 'CODIGO': 'no label', 'NOMBRE_AP_': 'no label', 'CATEGORIA': 'no label', 'BASE_LEG_1': 'no label', 'AREA': 'no label', 'NOMB_CORTO': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', });
lyr_CUMAT_SC_WGS84_4.set('fieldLabels', {'BOLIVIA': 'no label', 'DESCRIPCIO': 'no label', 'CAI': 'no label', 'CPI': 'no label', 'GPS': 'no label', 'CAE': 'no label', 'CPE': 'no label', 'GPN': 'no label', 'BNM': 'no label', 'BNO': 'no label', 'BPL': 'no label', 'CUMAT': 'no label', 'MUNICIPIO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_MUNICIPIOS_SC_WGS84_z20s_5.set('fieldLabels', {'OBJECTID': 'no label', 'LEY_MUN': 'no label', 'F_LEY_MUN': 'no label', 'COD_MUN': 'no label', 'MUN_TIOC': 'no label', });
lyr_MUNICIPIOS_SC_WGS84_z20s_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});