'use strict';
moduloComentario.factory('comentarioService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "descripcion", shortname: "Descripción", longname: "Descripción", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "fecha", shortname: "Fecha", longname: "Fecha", visible: true, type: "date", required: true, maxlength: 255, pattern: ""},
                    {name: "obj_usuario", shortname: "Usuario", longname: "Usuario", visible: true, type: "foreign", required: true, maxlength: 255, pattern: "", reference: "usuario", descforeign: "apellido"},
                    {name: "obj_imagen", shortname: "Imagen", longname: "Imagen", visible: true, type: "foreign", required: true, maxlength: 255, pattern: "", reference: "imagen", descforeign: "titulo"},
                ];

            },
            getIcon: function () {
                return "fa fa-fw fa-book";
            },
            getObTitle: function () {
                return "comentario";
            },
            getTitle: function () {
                return "comentario";
            }
        };
    }]);


