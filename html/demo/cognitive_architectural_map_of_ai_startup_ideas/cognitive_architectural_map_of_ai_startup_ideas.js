console.log("Loading cognitive_architectural_map_of_ai_startup_ideas.js");

if (typeof(sals["demo"]) == "undefined") {
    sals.demo = {};
}

sals.demo.ai_startup_idea = {};

sals.demo.ai_startup_idea.new_ai_startup_idea_dom_element = function(width, height) {
    var markets = [
	"Cloud Service\nProduct Market",
	"Education\nProduct Market",
	"Medicine\nProduct Market",
	"Consumer\nProduct Market",
    ];
    var emotion_machine_layers = [
	"Emotion Machine\nBuilt-In Reactive Layer",
	"Emotion Machine\nLearned Reactive Layer",
	"Emotion Machine\nDeliberative Layer",
	"Emotion Machine\nReflective Layer",
	"Emotion Machine\nSelf-Reflective Layer",
	"Emotion Machine\nSelf-Conscious Layer"
    ];
    var node_emotion_machine_layer_map = {};
    var graph = sals.graph.graph__new();
    (function() {
	for (var index = 0; index < emotion_machine_layers.length; index ++) {
	    var emotion_machine_layer = emotion_machine_layers[index];
	    var emotion_machine_layer__node = sals.graph.graph_node__new(emotion_machine_layer);
	    node_emotion_machine_layer_map[emotion_machine_layer] = emotion_machine_layer__node;
	    sals.graph.graph__add_node(graph, emotion_machine_layer__node);
	}
	for (var index = 0; index < emotion_machine_layers.length - 1; index ++) {
	    var lower_emotion_machine_layer       = emotion_machine_layers[index];
	    var lower_emotion_machine_layer__node = node_emotion_machine_layer_map[lower_emotion_machine_layer];
	    var upper_emotion_machine_layer       = emotion_machine_layers[index + 1];
	    var upper_emotion_machine_layer__node = node_emotion_machine_layer_map[upper_emotion_machine_layer];
	    var edge                              = sals.graph.graph_edge__new("Up One\nEmotion Machine Layer", lower_emotion_machine_layer__node, upper_emotion_machine_layer__node);
	    sals.graph.graph__add_edge(graph, edge);
	}
    })();
    (function() {
	for (var index = 0; index < markets.length; index ++) {
	    var market       = markets[index];
	    var market__node = sals.graph.graph_node__new(market);
	    sals.graph.graph__add_node(graph, market__node);
	}
    })();
    var node_a = sals.graph.graph_node__new("A");
    sals.graph.graph__add_node(graph, node_a);
    var node_b = sals.graph.graph_node__new("B");
    sals.graph.graph__add_node(graph, node_b);
    var edge_c_a_b = sals.graph.graph_edge__new("C", node_a, node_b);
    sals.graph.graph__add_edge(graph, edge_c_a_b);
    return sals.vis.graph__to_vis_graph_dom_element(graph, width, height);
};

window.onload = function() {
    console.log("Executing window.onload");
    var success_callback = function() {
	try {
	    var width  = 640;
	    var height = 320;
	    var element = sals.demo.ai_startup_idea.new_ai_startup_idea_dom_element(width, height);
	    document.body.appendChild(element);
	} catch (error) {
	    sals.core.log_error(error);
	}
    };
    try {
	sals.core.initialize(success_callback);
    } catch (error) {
	sals.core.log_error(error);
    }
};
