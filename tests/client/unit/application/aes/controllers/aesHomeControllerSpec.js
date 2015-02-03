define(['angularMocks', 'modules/styleguide/capdStyleguideModule'], function(mock){
    describe('aesHomeController', function(){
        var capdDialog

        beforeEach(module('capd.styleguide'))

        beforeEach(inject(function(_capdDialog_){
            capdDialog = _capdDialog_;
        }))

        it('should define name', function(){
            expect(capdDialog).toBeDefined();
        })
    })
})