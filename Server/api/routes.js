var path        = require('path');
module.exports = function(app) {
  console.log('Connet Route')
  let productsCtrl = require( path.join(__dirname, 'controller/ProductsController'));
    
    app.route('/')
        .get(productsCtrl.get);

    app.route('/subscribe')
        .get(productsCtrl.getpush)
        .post(productsCtrl.postpush);
  };