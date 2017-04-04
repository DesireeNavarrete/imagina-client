'use strict';
moduloUsuario.factory('usuarioService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "dni", shortname: "DNI", longname: "DNI", visible: true, type: "text", pattern: ""},
                    {name: "nombre", shortname: "Nombre", longname: "Nombre", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "apellido", shortname: "Apellido 1", longname: "Primer Apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "segapellido", shortname: "Apellido 2", longname: "Segundo Apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "login", shortname: "Login", longname: "Login", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "telefono", shortname: "Telefono", longname: "Telefono", visible: false, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "obj_tipousuario", shortname: "Tipo", longname: "Tipo de usuario", visible: true, type: "foreign", reference: "tipousuario", descforeign: "descripcion"},
                    {name: "obj_avatar", shortname: "Avatar", longname: "Avatar", visible: true, type: "foreign", reference: "imagen", descforeign: "titulo"},
                ];
            },
            getIcon: function () {
                return "fa-user";
            },
            getObTitle: function () {
                return "usuario";
            },
            getTitle: function () {
                return "usuario";
            }
        };
    }]);


