
sals.object_registry = {};

// SALS object global type registry

sals.object_registry.types = null;

sals.object_registry.get_types = function() {
    if (sals.object_registry.types === null) {
	sals.object_registry.types = sals.frame.frame__new();
    }
    return sals.object_registry.types;
};

sals.object_registry.add_type = function(object_type) {
    var types             = sals.object_registry.get_types();
    var object_type__name = sals.object.object_type__name(object_type);
    sals.frame.frame__add_element(types, object_type__name, object_type);
};

sals.object_registry.get_type = function(type_name) {
    var types = sals.object_registry.get_types();
    return sals.frame.frame__get_element(types, type_name);
};

