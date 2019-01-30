ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.932620, 27.510463],
            zoom: 15,
            behaviors: ['drag'],
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        });
         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
             hintContent: 'Falcon Club Cinema Boutique'
         }, {
             iconImageOffset: [-5, -38]
         });
     myMap.geoObjects
         .add(myPlacemark);
});