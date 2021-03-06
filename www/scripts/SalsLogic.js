
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
    
    sals.logic.predicate__type = function(self) {
	sals.object.object_type__assert("predicate", self);
	return sals.frame.frame__get_element(self, "type");
    };
    
    sals.logic.predicate__set_type = function(self, value) {
	sals.object.object_type__assert("predicate", self);
	return sals.frame.frame__set_element(self, "type", value);
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
	var type                          = sals.logic.predicate__type(self);
	var verb_transitive               = sals.logic.predicate_type__verb_transitive(type);
	var parameter_frame               = sals.logic.predicate__parameter_frame(self);
	var subject                       = sals.frame.frame_get_element(parameter_frame, "subject");
	var string                        = "" + subject + " " + verb_transitive + " ";
	var parameter_frame__keys         = sals.frame.frame__keys(parameter_frame);
	var parameter_frame__keys__length = sals.primitive.array__length(parameter_frame__keys);
	var parameter_frame__keys__index  = 0;
	while (parameter_frame__keys__index < parameter_frame__keys__length) {
	    (function() {
		var parameter_frame__key   = sals.primitive.array__get_element(parameter_frame__keys, parameter_frame__keys__index);
		var parameter_frame__value = sals.frame.frame__get_element(parameter_frame, parameter_frame__key);
		string = string + " " + parameter_frame__key + " " + parameter_frame__value;
	    })();
	    parameter_frame__keys__index ++;
	}
	return string;
    };
    
    sals.logic.predicate__to_english_string = function(self) {
	var parameter_frame   = sals.logic.predicate__parameter_frame(self);
	var subject           = sals.core.object__to_english_string(sals.frame.frame__get_element(parameter_frame, "subject"));
	var to_english_string = subject;
	var type              = sals.logic.predicate__type(self);
	var verb_transitive   = sals.core.object__to_english_string(sals.logic.predicate_type__verb_transitive(type));
	if (verb_transitive.includes("to be")) {
	    verb_transitive = verb_transitive.split("to be").join("is");
	}
	if (verb_transitive.includes("to have")) {
	    verb_transitive = verb_transitive.split("to have").join("has");
	}
	to_english_string                 = to_english_string + " " + verb_transitive;
	var parameter_frame__keys         = sals.frame.frame__keys(parameter_frame);
	var parameter_frame__keys__length = sals.primitive.array__length(parameter_frame__keys);
	var parameter_frame__keys__index  = 0;
	while (parameter_frame__keys__index < parameter_frame__keys__length) {
	    (function() {
		var parameter_frame__key   = sals.primitive.array__get_element(parameter_frame__keys, parameter_frame__keys__index);
		if (parameter_frame__key !== "subject") {
		    var parameter_frame__value = sals.frame.frame__get_element(parameter_frame, parameter_frame__key);
		    if ((parameter_frame__key === "direct object") || (parameter_frame__key === "second direct object")) {
			to_english_string = to_english_string + " " + sals.core.object__to_english_string(parameter_frame__value);
		    } else {
			to_english_string = to_english_string + "'s " + sals.core.object__to_english_string(parameter_frame__key) + " is " + sals.core.object__to_english_string(parameter_frame__value);
		    }
		}
	    })();
	    parameter_frame__keys__index ++;
	}
	// critics do post-procecssing scan
	(function() { // rewrite "is a apple" to "is an apple" for all vowels.
	    var vowels         = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	    var vowels__length = vowels.length;
	    var vowels__index  = vowels__length - 1;
	    var vowel;
	    var is_a_vowel;
	    while (vowels__index >= 0) {
		vowel = vowels[vowels__index];
		is_a_vowel = "is a " + vowel;
		if (to_english_string.includes(is_a_vowel)) {
		    to_english_string = to_english_string.split(is_a_vowel).join("is an " + vowel);
		}
		vowels__index --;
	    }
	})();
	return to_english_string;
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
	var predicates = sals.frame_array.frame_array__new(0);
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
	sals.frame_array.frame_array__push(predicates, predicate);
    };
    
    sals.logic.predicate_set__to_string = function(self) {
	sals.object.object_type__assert("predicate_set", self);
	return sals.frame.frame__to_string(self);
    };
    
    sals.logic.predicate_set__to_english_string = function(self) {
	sals.object.object_type__assert("predicate_set", self);
	var to_english_string = "";
	var predicates         = sals.logic.predicate_set__predicates(self);
	var predicates__length = sals.primitive.array__length(predicates);
	var predicates__index  = 0;
	while (predicates__index < predicates__length) {
	    (function() {
		var predicate = sals.primitive.array__get_element(predicates, predicates__index);
		to_english_string = to_english_string + ((predicates__index == 0) ? "" : ((predicates__index < (predicates__length - 1)) ? ", " : ", and ")) + sals.logic.predicate__to_english_string(predicate);
	    })();
	    predicates__index ++;
	}
	return to_english_string;
    };
    
})(); // predicate_set END

(function() { // general English helper functions
    
    sals.logic.english_string__sentencify = function(english_string) {
	var english_string__ch0 = english_string[0];
	english_string__ch0 = english_string__ch0.toUpperCase();
	return (english_string__ch0 + english_string.substring(1, english_string.length) + ".");
    };
    
})();

sals.logic.test_logic = function() {
    console.log("test_logic here.");
    var predicate_set  = sals.logic.predicate_set__new_empty();
    (function() { // the green block to be on the table
	var predicate_type = sals.logic.predicate_type__new("to be", sals.frame.frame({"subject" : "a physical object", "on" : sals.logic.parameter_type__new("a physical object")}));
	var predicate      = sals.logic.predicate__new(predicate_type, sals.frame.frame({"subject" : "the green block", "on" : "the table"}));
	sals.logic.predicate_set__add_predicate(predicate_set, predicate)
    })();
    (function() { // black stone 1 to be immediately above black stone 2
	var predicate_type = sals.logic.predicate_type__new("to be", sals.frame.frame({"subject" : "a stone", "immediately above" : sals.logic.parameter_type__new("a stone")}));
	var predicate      = sals.logic.predicate__new(predicate_type, sals.frame.frame({"subject" : "black stone 1", "immediately above" : "black stone 2"}));
	sals.logic.predicate_set__add_predicate(predicate_set, predicate)
    })();
    (function() { // black stone 1 to be immediately below black stone 2
	var predicate_type = sals.logic.predicate_type__new("to be", sals.frame.frame({"subject" : "a stone", "immediately below" : sals.logic.parameter_type__new("a stone")}));
	var predicate      = sals.logic.predicate__new(predicate_type, sals.frame.frame({"subject" : "black stone 1", "immediately below" : "black stone 2"}));
	sals.logic.predicate_set__add_predicate(predicate_set, predicate)
    })();
    (function() { // black stone 1 to be immediately to the right of black stone 2
	var predicate_type = sals.logic.predicate_type__new("to be", sals.frame.frame({"subject" : "a stone", "immediately to the right of" : sals.logic.parameter_type__new("a stone")}));
	var predicate      = sals.logic.predicate__new(predicate_type, sals.frame.frame({"subject" : "black stone 1", "immediately to the right of" : "black stone 2"}));
	sals.logic.predicate_set__add_predicate(predicate_set, predicate)
    })();
    (function() { // black stone 1 to be immediately to the left of black stone 2
	var predicate_type = sals.logic.predicate_type__new("to be", sals.frame.frame({"subject" : "a stone", "immediately to the left of" : sals.logic.parameter_type__new("a stone")}));
	var predicate      = sals.logic.predicate__new(predicate_type, sals.frame.frame({"subject" : "black stone 1", "immediately to the left of" : "black stone 2"}));
	sals.logic.predicate_set__add_predicate(predicate_set, predicate)
    })();
    console.log("test_logic: predicate_set = " + sals.logic.english_string__sentencify(sals.logic.predicate_set__to_english_string(predicate_set)));
};

