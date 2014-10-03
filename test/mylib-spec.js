define(['jquery', 'addtocart'], function($, addtocart) {

    describe('just checking', function() {

        var $html;

        before(function () {
            $html = window.__html__["stubs/product.html"]
        });

        it("works", function (done) {

            console.log($html);

            done();
        });
    });
});