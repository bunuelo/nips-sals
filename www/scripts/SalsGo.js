
sals.go = {};

(function() { // go_game_board_cell BEGIN
    var object_type = sals.object.object_type__new("go_game_board_cell");
    sals.object_registry.add_type(object_type);
    
    sals.go.go_game_board_cell__size = 16;
    
    sals.go.go_game_board_cell__new = function(state, north, south, east, west) {
	var self = sals.object.object__new("go_game_board_cell");
	sals.frame.frame__add_element(self, "to have state",         state);
	sals.frame.frame__add_element(self, "to be to the south of", north);
	sals.frame.frame__add_element(self, "to be to the north of", south);
	sals.frame.frame__add_element(self, "to be to the west of",  east);
	sals.frame.frame__add_element(self, "to be to the east of",  west);
	return self;
    };
    
    sals.go.go_game_board_cell__state = function(self) {
	return sals.frame.frame__get_element(self, "to have state");
    };
    
    sals.go.go_game_board_cell__set_state = function(self, state) {
	sals.frame.frame__set_element(self, "to have state", state);
    };
    
    sals.go.go_game_board_cell__north = function(self) {
	return sals.frame.frame__get_element(self, "to be to the south of");
    };
    
    sals.go.go_game_board_cell__set_north = function(self, value) {
	sals.frame.frame__set_element(self, "to be to the south of", value);
    };
    
    sals.go.go_game_board_cell__south = function(self) {
	return sals.frame.frame__get_element(self, "to be to the north of");
    };
    
    sals.go.go_game_board_cell__set_south = function(self, value) {
	sals.frame.frame__set_element(self, "to be to the north of", value);
    };
    
    sals.go.go_game_board_cell__east = function(self) {
	return sals.frame.frame__get_element(self, "to be to the west of");
    };
    
    sals.go.go_game_board_cell__set_east = function(self, value) {
	sals.frame.frame__set_element(self, "to be to the west of", value);
    };
    
    sals.go.go_game_board_cell__west = function(self) {
	return sals.frame.frame__get_element(self, "to be to the east of");
    };
    
    sals.go.go_game_board_cell__set_west = function(self, value) {
	sals.frame.frame__set_element(self, "to be to the east of", value);
    };
    
    sals.go.go_game_board_cell__to_html = function(self) {
	var state = sals.go.go_game_board_cell__state(self);
	if (state === null) {
	    return "<img src=\"images/go_empty_cell.png\" width=" + sals.go.go_game_board_cell__size + " height=" + sals.go.go_game_board_cell__size + "/>";
	} else if (state === "white") {
	    return "<img src=\"images/go_stone_white.png\" width=" + sals.go.go_game_board_cell__size + " height=" + sals.go.go_game_board_cell__size + "/>";
	} else if (state === "black") {
	    return "<img src=\"images/go_stone_black.png\" width=" + sals.go.go_game_board_cell__size + " height=" + sals.go.go_game_board_cell__size + "/>";
	} else {
	    return "INVALID";
	}
    };
    
})(); // go_game_board_cell END

(function() { // go_game_board BEGIN
    var object_type = sals.object.object_type__new("go_game_board");
    sals.object_registry.add_type(object_type);
        
    sals.go.go_game_board__new = function(width, height) {
	var self = sals.object.object__new("go_game_board");
	var rows = sals.frame.frame__new();
	for (var y = 0; y < height; y ++) {
	    var row = sals.frame.frame__new();
	    for (var x = 0; x < width; x ++) {
		var go_game_board_cell = sals.go.go_game_board_cell__new(null, null, null, null, null);
		sals.frame.frame__add_element(row, x, go_game_board_cell);
	    }
	    sals.frame.frame__add_element(rows, y, row);
	}
	for (var y = 0; y < height; y ++) {
	    var row = sals.frame.frame__get_element(rows, y);
	    for (var x = 0; x < width; x ++) {
		var go_game_board_cell        = sals.frame.frame__get_element(row, x);
		var go_game_board_cell__north = null;
		var go_game_board_cell__south = null;
		var go_game_board_cell__east  = null;
		var go_game_board_cell__west  = null;
		if (y > 0) {
		    var north_row = sals.frame.frame__get_element(rows, y - 1);
		    go_game_board_cell__north = sals.frame.frame__get_element(north_row, x);
		}
		if (y < height - 1) {
		    var south_row = sals.frame.frame__get_element(rows, y + 1);
		    go_game_board_cell__south = sals.frame.frame__get_element(south_row, x);
		}
		if (x < width - 1) {
		    go_game_board_cell__east = sals.frame.frame__get_element(row, x + 1);
		}
		if (x > 0) {
		    go_game_board_cell__west = sals.frame.frame__get_element(row, x - 1);
		}
		sals.go.go_game_board_cell__set_north(go_game_board_cell, go_game_board_cell__north);
		sals.go.go_game_board_cell__set_south(go_game_board_cell, go_game_board_cell__south);
		sals.go.go_game_board_cell__set_east( go_game_board_cell, go_game_board_cell__east);
		sals.go.go_game_board_cell__set_west( go_game_board_cell, go_game_board_cell__west);
	    }
	}
	sals.frame.frame__add_element(self, "rows", rows);
	return self;
    };
    
    sals.go.go_game_board__height = function(self) {
	var rows            = sals.frame.frame__get_element(self, "rows");
	var rows__key_count = sals.frame.frame__key_count(rows);
	return rows__key_count;
    };
    
    sals.go.go_game_board__width = function(self) {
	var rows                 = sals.frame.frame__get_element(self, "rows");
	var first_row            = sals.frame.frame__get_element(rows,  0);
	var first_row__key_count = sals.frame.frame__key_count(first_row);
	return first_row__key_count;
    };
    
    sals.go.go_game_board__get_cell = function(self, x, y) {
	var rows = sals.frame.frame__get_element(self, "rows");
	var row  = sals.frame.frame__get_element(rows, y);
	var cell = sals.frame.frame__get_element(row,  x);
	return cell;
    };
    
    sals.go.go_game_board__to_graph = function(self) {
	var graph = sals.graph.graph__new();
	sals.graph.graph__add_frame_recursively(graph, self);
	return graph;
    };
    
    sals.go.go_game_board__to_html = function(self) {
	var width  = sals.go.go_game_board__width(self);
	var height = sals.go.go_game_board__height(self);
	var html = "HERE: " + width + "x" + height + "<table cellspacing=1 cellpadding=0>";
	for (var y = 0; y < height; y ++) {
	    html += "<tr>";
	    for (var x = 0; x < width; x ++) {
		html += "<td>";
		var cell = sals.go.go_game_board__get_cell(self, x, y);
		html += sals.go.go_game_board_cell__to_html(cell);
		html += "</td>";
	    }
	    html += "</tr>";
	}
	html += "</table>";
	return html;
    };
    
    sals.go.go_game_board__to_predicate_set = function(self) {
	var graph         = sals.go.go_game_board__to_graph(self);
	var predicate_set = sals.graph.graph__to_predicate_set(graph);
	return predicate_set;
    };
    
    sals.go.go_game_board__to_english_string = function(self) {
	var predicate_set = sals.go.go_game_board__to_predicate_set(self);
	return sals.logic.predicate_set__to_english_string(predicate_set);
    };
    
    sals.go.go_game_board__to_english_sentence = function(self) {
	return sals.logic.english_string__sentencify(sals.go.go_game_board__to_english_string(self));
    };
    
    sals.go.go_game_board__log = function(self) {
	console.log("go_game_board = " + sals.go.go_game_board__to_english_sentence(self));
    };
    
    sals.go.go_game_board__step = function(self) {
	//sals.core.log("go_game_board__step: here.");
	var did_something    = false;
	var width            = sals.go.go_game_board__width(self);
	var height           = sals.go.go_game_board__height(self);
	var height_minus_one = height - 1;
	var x                = width - 1;
	var y;
	var left_signal;
	var up_signal;
	var right_signal;
	var down_signal;
	while (x >= 0) {
	    y = height_minus_one;
	    while (y >= 0) {
		var cell        = sals.go.go_game_board__get_cell(self, x, y);
		var cell__state = sals.go.go_game_board_cell__state(cell);
		if (cell__state === null) {
		    var random_index = (sals.math.random() * 2)
		    cell__state = "white";
		} else if ((cell__state == "white") ||
			   (cell__state == "black")) {
		    if (x >= 1) {
			left_signal = (sals.go.go_game_board_cell__state(sals.go.go_game_board__get_cell(self, x - 1, y)) == "white");
		    } else {
			left_signal = false;
		    }
		    if (y >= 1) {
			up_signal = (sals.go.go_game_board_cell__state(sals.go.go_game_board__get_cell(self, x, y - 1)) == "white");
		    } else {
			up_signal = false;
		    }
		    if (x < (width - 1)) {
			right_signal = (sals.go.go_game_board_cell__state(sals.go.go_game_board__get_cell(self, x + 1, y)) == "white");
		    } else {
			right_signal = false;
		    }
		    if (y < (height - 1)) {
			down_signal = (sals.go.go_game_board_cell__state(sals.go.go_game_board__get_cell(self, x, y + 1)) == "white");
		    } else {
			down_signal = false;
		    }
		    if (((up_signal && down_signal) && (! (left_signal && right_signal))) ||
			((left_signal && right_signal) && (! (up_signal && down_signal)))) {
			cell__state = "black";
		    } else if ((up_signal && down_signal && left_signal && right_signal) ||
			       ((! up_signal) && (! down_signal) && (! left_signal) && (! right_signal))) {
			cell__state = null;
		    } else {
			cell__state = "white";
		    }
		}
		sals.go.go_game_board_cell__set_state(cell, cell__state);
		y --;
	    }
	    x --;
	}
	return did_something;
    };
    
})(); // go_game_board END

(function () { // go_game BEGIN
    var object_type = sals.object.object_type__new("go_game");
    sals.object_registry.add_type(object_type);
    
    sals.go.go_game__new = function(width, height) {
	var self          = sals.object.object__new("go_game");
	var go_game_board = sals.go.go_game_board__new(width, height);
	sals.frame.frame__add_element(self, "board", go_game_board);
	return self;
    };
    
    sals.go.go_game__board = function(self) {
	return sals.frame.frame__get_element(self, "board");
    };
    
    sals.go.go_game__step = function(self) {
	var board = sals.go.go_game__board(self);
	return sals.go.go_game_board__step(board);
    };
    
    sals.go.go_game__to_dom_element_content = function(self) {
	var board             = sals.go.go_game__board(self);
	var go_game_table__tr = document.createElement("tr");
	(function() {
	    var board__html                            = sals.go.go_game_board__to_html(board);
	    var go_game_table__tr__game_board_td       = document.createElement("td");
	    go_game_table__tr__game_board_td.innerHTML = board__html;
	    go_game_table__tr.appendChild(go_game_table__tr__game_board_td);
	})();
	(function() {
	    var textarea_td = document.createElement("td");
	    textarea_td.innerHTML = "<textarea rows=32 cols=80>" + sals.go.go_game_board__to_english_sentence(board) + "</textarea>";
	    go_game_table__tr.appendChild(textarea_td);
	})();
	(function() {
	    var textarea_td = document.createElement("td");
	    textarea_td.innerHTML = "<textarea rows=32 cols=80>" + sals.frame.frame__to_string(board) + "</textarea>";
	    go_game_table__tr.appendChild(textarea_td);
	})();
	//(function() {
	//    var board__graph                   = sals.go.go_game_board__to_graph(board);
	//    var visgraph                       = sals.vis.sals_vis_graph__new(512, 512, board__graph);
	//    var go_game_table__tr__visgraph_td = document.createElement("td");
	//    go_game_table__tr__visgraph_td.appendChild(visgraph);
	//    go_game_table__tr.appendChild(go_game_table__tr__visgraph_td);
	//})();
	//(function() {
	//	var sals_three                       = sals.three.sals_three__new(256, 512);
	//	var sals_three__dom_element          = sals.three.sals_three__dom_element(sals_three);
	//	var go_game_table__tr__sals_three_td = document.createElement("td");
	//	go_game_table__tr__sals_three_td.appendChild(sals_three__dom_element);
	//	go_game_table__tr.appendChild(go_game_table__tr__sals_three_td);
	//})();
	var go_game_table = document.createElement("table");
	go_game_table.appendChild(go_game_table__tr);
	return go_game_table;
    };
    
    sals.go.go_game__to_dom_element = function(self) {
	var dom_element__content = sals.go.go_game__to_dom_element_content(self);
	var dom_element          = document.createElement("div");
	dom_element.appendChild(dom_element__content);
	return dom_element;
    };
    
    sals.go.go_game__update_dom_element = function(self, dom_element) {
	var dom_element__content = sals.go.go_game__to_dom_element_content(self);
	while (dom_element.firstChild) {
	    dom_element.removeChild(dom_element.firstChild);
	}
	dom_element.appendChild(dom_element__content);
    };
    
})(); // go_game END

// sals render test

sals.go.go_game_element = function() {
    var go_game        = sals.go.go_game__new(4, 4);
    var go_game__board = sals.go.go_game__board(go_game);
    var white_cell     = sals.go.go_game_board__get_cell(go_game__board, 0, 0);
    sals.go.go_game_board_cell__set_state(white_cell, "white");
    var black_cell = sals.go.go_game_board__get_cell(go_game__board, 1, 1);
    sals.go.go_game_board_cell__set_state(black_cell, "black");
    sals.logic.test_logic();
    sals.pattern.test_pattern();
    sals.go.go_game_board__log(self);
    return sals.go.go_game__to_dom_element(go_game);
};


