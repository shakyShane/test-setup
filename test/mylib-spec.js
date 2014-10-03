define(['jquery', 'addtocart'], function($, addtocart) {

    describe('Add to cart', function() {

        var $html;

        before(function () {
            $html = $(window.__html__["stubs/markup.html"]);
        });

        it("can be instanitated", function (done) {
            assert.isFunction(addtocart.init);
            done();
        });
    });
});