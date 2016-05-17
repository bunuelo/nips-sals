
sals.pattern = {};

(function() { // pattern_variable BEGIN
    var object_type = sals.object.object_type__new("pattern_variable");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern_variable__new = function(name) {
	var self = sals.object.object__new("pattern_variable");
	sals.frame.frame__add_element(self, "name", name);
	return self;
    };
    
    sals.pattern.pattern_variable__name = function(self) {
	return sals.frame.frame__get_element(self, "name");
    };
    
    sals.pattern.pattern_variable__set_name = function(self, value) {
	sals.frame.frame__set_element(self, "name", value);
    };
    
    sals.pattern.pattern_variable__to_string = function(self) {
	var array = sals.pattern.pattern_variable__array(self);
	var to_string = "(? " + name + ")";
	return to_string;
    };
    
})(); // pattern_variable END

(function() { // pattern BEGIN
    var object_type = sals.object.object_type__new("pattern");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern__new = function(array) {
	var self = sals.object.object__new("pattern");
	sals.frame.frame__add_element(self, "array", array);
	return self;
    };
    
    sals.pattern.pattern__array = function(self) {
	return sals.frame.frame__get_element(self, "array");
    };
    
    sals.pattern.pattern__set_array = function(self, value) {
	sals.frame.frame__set_element(self, "array", value);
    };
    
    sals.pattern.pattern__to_string = function(self) {
	var array = sals.pattern.pattern__array(self);
	var to_string = "(pattern";
	var array__length = array.length;
	var array__index  = 0;
	while (array__index < array__length) {
	    to_string += " \"" + array[array__index] + "\"";
	    array__index ++;
	}
	to_string += ")";
	return to_string;
    };
    
    sals.pattern.pattern__new_from_string = function(str) {
	var array = new Array(1);
	array[0] = str;
	return sals.pattern.pattern__new(array);
    };
    
})(); // pattern END

(function() { // pattern_and
    var object_type = sals.object.object_type__new("pattern_and");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern_and__new = function(expressions) {
	var self = sals.object.object__new("pattern_and");
	sals.frame.frame__add_element(self, "expressions", expressions);
	return self;
    };
    
    sals.pattern.pattern_and__expressions = function(self) {
	return sals.frame.frame__get_element(self, "expressions");
    };
    
    sals.pattern.pattern_and__set_expressions = function(self, value) {
	sals.frame.frame__set_element(self, "expressions", value);
    };
    
    sals.pattern.pattern_and__to_string = function(self) {
	var expressions         = sals.pattern.pattern_and__expressions(self);
	var to_string           = "(";
	var expressions__length = expressions.length;
	var expressions__index  = 0;
	while (expressions__index < expressions__length) {
	    (function() {
		var expression         = expressions[expressions__index];
		var expression__string = "" + expression;
		to_string += ((expressions__index == 0) ? "" : " && ") + "\"" + expression__string + "\"";
	    })();
	    expressions__index ++;
	}
	to_string += ")";
	return to_string;
    };
    
})(); // pattern_and END

(function() { // pattern_implies
    var object_type = sals.object.object_type__new("pattern_implies");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern_implies__new = function(expressions) {
	var self = sals.object.object__new("pattern_implies");
	sals.frame.frame__add_element(self, "expressions", expressions);
	return self;
    };
    
    sals.pattern.pattern_implies__expressions = function(self) {
	return sals.frame.frame__get_element(self, "expressions");
    };
    
    sals.pattern.pattern_implies__set_expressions = function(self, value) {
	sals.frame.frame__set_element(self, "expressions", value);
    };
    
    sals.pattern.pattern_implies__to_string = function(self) {
	var expressions         = sals.pattern.pattern_implies__expressions(self);
	var to_string           = "(";
	var expressions__length = expressions.length;
	var expressions__index  = 0;
	while (expressions__index < expressions__length) {
	    (function() {
		var expression         = expressions[expressions__index];
		var expression__string = "" + sals.pattern.pattern__to_string(expression);
		to_string += ((expressions__index == 0) ? "" : " && ") + expression__string;
	    })();
	    expressions__index ++;
	}
	to_string += ")";
	return to_string;
    };
    
})(); // pattern_implies END

sals.pattern.test_pattern = function() {
    sals.core.log("test_pattern HERE.");
    var x = sals.pattern.pattern__new_from_string("aristotle is a man");
    var y = sals.pattern.pattern__new_from_string("all mans are mortal");
    var z = sals.pattern.pattern__new_from_string("aristotle is mortal");
    var and = sals.pattern.pattern_and__new([x, y]);
    sals.core.log("and = " + sals.pattern.pattern_and__to_string(and));
    sals.core.log("test_pattern DONE.");
};