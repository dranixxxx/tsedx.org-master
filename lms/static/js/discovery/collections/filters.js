(function(define) {
    define(['backbone'], function(Backbone, Filter) {
        'use strict';

        return Backbone.Collection.extend({
            model: Filter,
            getTerms: function() {
                return this.reduce(function(terms, filter) {
                    terms[filter.id] = filter.get('query');
                    return terms;
                }, {});
            }
        });
    });
}(define || RequireJS.define));
