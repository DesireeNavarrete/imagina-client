'use strict';
moduloImagen.factory('imagenService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "descripcion", shortname: "Descripción", longname: "Descripción", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "titulo", shortname: "titulo", longname: "Título", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "url", shortname: "URL", longname: "URL", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "etiqueta", shortname: "Etiqueta", longname: "Etiqueta", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "obj_usuario", shortname: "Usuario", longname: "Usuario", visible: true, type: "foreign", reference: "usuario",descforeign: "nombre"},


                    
                ];
            },
            getIcon: function () {
                return "fa fa-fw fa-book";
            },
            getObTitle: function () {
                return "imagen";
            },
            getTitle: function () {
                return "imagen";
            }
        };
    }]);


