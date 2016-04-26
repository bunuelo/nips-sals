
sals.logic = {};

(function() { // parameter_type BEGIN
    var object_type = sals.object.object_type__new("parameter_type");
    sals.object_registry.add_type(object_type);
    
    sals.logic.parameter_type__new = function(noun_reference) {
	self = sals.object.object__new("parameter_type");
	sals.frame.frame__add_element(self, "noun_reference", noun_reference);
	return self;
    };
    
    sals.logic.parameter_type__is_type = function(exp) {
	return sals.object.object__is_type(exp, "parameter_type");
    };
    
    sals.logic.parameter_type__noun_reference = function(self) {
	sals.object.object_type__assert("parameter_type", self);
	return sals.frame.frame__get_element(self, "noun_reference");
    };
    
    sals.logic.parameter_type__set_noun_reference = function(self, value) {
	sals.object.object_type__assert("parameter_type", self);
	return sals.frame.frame__set_element(self, "noun_reference", value);
    };
    
})(); // parameter_type END

(function() { // predicate_type BEGIN
    var object_type = sals.object.object_type__new("predicate_type");
    sals.object_registry.add_type(object_type);
    
    sals.logic.predicate_type__new = function(verb_transitive, parameter_type_frame) {
	self = sals.object.object__new("predicate_type");
	sals.frame.frame__add_element(self, "verb_transitive", verb_transitive);
	sals.frame.frame__add_element(self, "parameter_type_frame", parameter_type_frame);
	return self;
    };
    
    sals.logic.predicate_type__is_type = function(exp) {
	return sals.object.object__is_type(exp, "predicate_type");
    };
    
    sals.logic.predicate_type__verb_transitive = function(self) {
	sals.object.object_type__assert("predicate_type", self);
	return sals.frame.frame__get_element(self, "verb_transitive");
    };
    
    sals.logic.predicate_type__set_verb_transitive = function(self, value) {
	sals.object.object_type__assert("predicate_type", self);
	return sals.frame.frame__set_element(self, "verb_transitive", value);
    };
    
    sals.logic.predicate_type__parameter_type_frame = function(self) {
	sals.object.object_type__assert("predicate_type", self);
	return sals.frame.frame__get_element(self, "parameter_type_frame");
    };
    
    sals.logic.predicate_type__set_parameter_type_frame = function(self, value) {
	sals.object.object_type__assert("predicate_type", self);
	return sals.frame.frame__set_element(self, "parameter_type_frame", value);
    };
    
})(); // predicate_type END

(function() { // predicate BEGIN
    var object_type = sals.object.object_type__new("predicate");
    sals.object_registry.add_type(object_type);
    
    sals.logic.predicate__new = function(type, parameter_frame) {
	self = sals.object.object__new("predicate");
	sals.frame.frame__add_element(self, "type",            type);
	sals.frame.frame__add_element(self, "parameter_frame", parameter_frame);
	return self;
    };
    
    sals.logic.predicate__is_type = function(exp) {
	return sals.object.object__is_type(exp, "predicate");
    };
    
    sals.logic.predicate__verb_transitive = function(self) {
	sals.object.object_type__assert("predicate", self);
	return sals.frame.frame__get_element(self, "verb_transitive");
    };
    
    sals.logic.predicate__set_verb_transitive = function(self, value) {
	sals.object.object_type__assert("predicate", self);
	return sals.frame.frame__set_element(self, "verb_transitive", value);
    };
    
    sals.logic.predicate__parameter_frame = function(self) {
	sals.object.object_type__assert("predicate", self);
	return sals.frame.frame__get_element(self, "parameter_frame");
    };
    
    sals.logic.predicate__set_parameter_frame = function(self, value) {
	sals.object.object_type__assert("predicate", self);
	return sals.frame.frame__set_element(self, "parameter_frame", value);
    };
    
    sals.logic.predicate__to_string = function(self) {
	sals.object.object_type__assert("predicate", self);
	return sals.frame.frame__to_string(self);
    };
    
})(); // predicate END

(function() { // predicate_set BEGIN
    var object_type = sals.object.object_type__new("predicate_set");
    sals.object_registry.add_type(object_type);
    
    sals.logic.predicate_set__new = function(predicates) {
	self = sals.object.object__new("predicate_set");
	sals.frame.frame__add_element(self, "predicates", predicates);
	return self;
    };
    
    sals.logic.predicate_set__new_empty = function() {
	var predicates = sals.primitive.array__new(0);
	return sals.logic.predicate_set__new(predicates);
    };
    
    sals.logic.predicate_set__is_type = function(exp) {
	return sals.object.object__is_type(exp, "predicate_set");
    };
    
    sals.logic.predicate_set__predicates = function(self) {
	sals.object.object_type__assert("predicate_set", self);
	return sals.frame.frame__get_element(self, "predicates");
    };
    
    sals.logic.predicate_set__set_predicates = function(self, value) {
	sals.object.object_type__assert("predicate_set", self);
	return sals.frame.frame__set_element(self, "predicates", value);
    };
    
    sals.logic.predicate_set__add_predicate = function(self, predicate) {
	var predicates = sals.logic.predicate_set__predicates(self);
	sals.primitive.array__push(predicates, predicate);
    };
    
    sals.logic.predicate_set__to_string = function(self) {
	sals.object.object_type__assert("predicate_set", self);
	return sals.frame.frame__to_string(self);
    };
    
})(); // predicate_set END

sals.logic.test_logic = function() {
    console.log("test_logic here.");
    var predicate_type = sals.logic.predicate_type__new("to be", sals.frame.frame({"subject" : "a physical object", "on" : sals.logic.parameter_type__new("a physical object")}));
    var predicate      = sals.logic.predicate__new(predicate_type, sals.frame.frame({"subject" : "the green block", "on" : "the table"}));
    var predicate_set  = sals.logic.predicate_set__new_empty();
    sals.logic.predicate_set__add_predicate(predicate_set, predicate)
    console.log("test_logic: predicate_set = " + sals.logic.predicate_set__to_string(predicate_set));
};

