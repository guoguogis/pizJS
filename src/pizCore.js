;
define(function(require,exports){
    'use strict'
     /**
     * Constructor: pizJS.Class
     * Base class used to construct all other classes. Includes support for 
     *     multiple inheritance. 
     *     
     * To create a new pizJS-style class, use the following syntax:
     * (code)
     *     var MyClass = pizJS.Class(prototype);
     * (end)
     *
     * To create a new pizJS-style class with multiple inheritance, use the
     *     following syntax:
     * (code)
     *     var MyClass = pizJS.Class(Class1, Class2, prototype);
     * (end)
     * 
     * Note that instanceof reflection will only reveal Class1 as superclass.
     *
     */
    var Class = function() {
        var len = arguments.length;
        var P = arguments[0];
        var F = arguments[len-1];

        var C = typeof F.initialize == "function" ?
            F.initialize :
            function(){ P.prototype.initialize.apply(this, arguments); };

        if (len > 1) {
            var newArgs = [C, P].concat(
            Array.prototype.slice.call(arguments).slice(1, len-1), F);
            window.inherit.apply(null, newArgs);
        } else {
            C.prototype = F;
        }
    
        return C;
    };

    return Class;
});

 