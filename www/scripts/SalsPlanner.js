
sals.planner = {};

(function() { // planner_domain BEGIN
    var object_type = sals.object.object_type__new("planner_domain");
    sals.object_registry.add_type(object_type);
    
    sals.planner.planner_domain__new = function(object_type_frame, predicate_type_frame, action_type_frame) {
	self = sals.object.object__new("planner_domain");
	sals.frame.frame__add_element(self, "object_type_frame",    object_type_frame);
	sals.frame.frame__add_element(self, "predicate_type_frame", predicate_type_frame);
	sals.frame.frame__add_element(self, "action_type_frame",    action_type_frame);
	return self;
    };
    
    sals.planner.planner_domain__new_empty = function() {
	var object_type_frame    = sals.frame.frame({});
	//var predicate_type_frame = ;
	//var action_type_frame    = ;
	return sals.planner.planner_domain__new(object_type_frame, predicate_type_frame, action_type_frame);
    };
    
    sals.planner.planner_domain__is_type = function(exp) {
	return sals.object.object__is_type(exp, "planner_domain");
    };
    
    sals.planner.planner_domain__object_type_frame = function(self) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__get_element(self, "object_type_frame");
    };
    
    sals.planner.planner_domain__set_object_type_frame = function(self, value) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__set_element(self, "object_type_frame", value);
    };
    
    sals.planner.planner_domain__add_object_type = function(self, name, object_type) {
	var object_type_frame = sals.planner.planner_domain__object_type_frame(self);
	if (! sals.frame.frame__contains_key(object_type_frame, name)) {
	    sals.frame.frame__add_element(object_type_frame, name, object_type);
	} else {
	    sals.core.throw_new_error("planner_domain__add_object_type ERROR: object_type (" + name + ") already in planner domain.");
	}
    };
    
    sals.planner.planner_domain__predicate_type_frame = function(self) {
	sals.object.predicate_type__assert("planner_domain", self);
	return sals.frame.frame__get_element(self, "predicate_type_frame");
    };
    
    sals.planner.planner_domain__set_predicate_type_frame = function(self, value) {
	sals.object.predicate_type__assert("planner_domain", self);
	return sals.frame.frame__set_element(self, "predicate_type_frame", value);
    };
    
    sals.planner.planner_domain__add_predicate_type = function(self, name, predicate_type) {
	var predicate_type_frame = sals.planner.planner_domain__predicate_type_frame(self);
	if (! sals.frame.frame__contains_key(predicate_type_frame, name)) {
	    sals.frame.frame__add_element(predicate_type_frame, name, predicate_type);
	} else {
	    sals.core.throw_new_error("planner_domain__add_predicate_type ERROR: predicate_type (" + name + ") already in planner domain.");
	}
    };
    
    sals.planner.planner_domain__action_type_frame = function(self) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__get_element(self, "action_type_frame");
    };
    
    sals.planner.planner_domain__set_action_type_frame = function(self, value) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__set_element(self, "action_type_frame", value);
    };
    
    sals.planner.planner_domain__add_action_type = function(self, name, action_type) {
	var action_type_frame = sals.planner.planner_domain__action_type_frame(self);
	if (! sals.frame.frame__contains_key(action_type_frame, name)) {
	    sals.frame.frame__add_element(action_type_frame, name, action_type);
	} else {
	    sals.core.throw_new_error("planner_domain__add_action_type ERROR: action_type (" + name + ") already in planner domain.");
	}
    };
    
    sals.planner.planner_domain__to_string = function(self) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__to_string(self);
    };
    
})(); // planner_domain END
