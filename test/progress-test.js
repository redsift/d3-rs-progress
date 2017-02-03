var tape = require("@redsift/tape-reel")("<div id='test'></div>"),
    d3 = require("d3-selection"),
    progress = require("../");

// This test should be on all brick compatable charts
tape("html() empty state", function(t) {
    var host = progress.html();
    var el = d3.select('#test');
    el.call(host);
    
    t.equal(el.selectAll('svg').size(), 1);
        
    t.end();
});


