const db = require('../../database/models')

const apiProductsControllers = {
    list: (req, res) => {
        db.Product.findAll({ include: { model: db.Image, as: 'images' } })
            
            .then(products => {
                let respuesta = {
                    meta: {
                        status : 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                }
                    res.json(respuesta);
                })
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {include: [{ association: "categories" }, { association: "subcategories" }, { association: "images" }]})
        .then(product => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: product.length,
                    url: '/api/product/:id'
                },
                data: product
            }
            res.json(respuesta);
        });
},
create: (req,res) => {
    Products
    .create(
        {
            name: req.body.name,
            description: req.body.description,
            product_categories_id: req.body.category,
            product_subcategories_id: req.body.subcategory,
            price: req.body.price
        }
    )
    .then(confirm => {
        let respuesta;
        if(confirm){
            respuesta ={
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/products/create'
                },
                data:confirm
            }
        }else{
            respuesta ={
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/products/create'
                },
                data:confirm
            }
        }
        res.json(respuesta);
    })    
    .catch(error => res.send(error))
},
update: (req,res) => {
    let productId = req.params.id;
    Products.update(
        {
            name: req.body.name,
            description: req.body.description,
            product_categories_id: req.body.category,
            product_subcategories_id: req.body.subcategory,
            price: req.body.price
        },
        {
            where: {id: productId}
    })
    .then(confirm => {
        let respuesta;
        if(confirm){
            respuesta ={
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/products/update/:id'
                },
                data:confirm
            }
        }else{
            respuesta ={
                meta: {
                    status: 204,
                    total: confirm.length,
                    url: 'api/products/update/:id'
                },
                data:confirm
            }
        }
        res.json(respuesta);
    })    
    .catch(error => res.send(error))
},
destroy: (req,res) => {
    let productId = req.params.id;
    Products
    .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
    .then(confirm => {
        let respuesta;
        if(confirm){
            respuesta ={
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/products/destroy/:id'
                },
                data:confirm
            }
        }else{
            respuesta ={
                meta: {
                    status: 204,
                    total: confirm.length,
                    url: 'api/products/destroy/:id'
                },
                data:confirm
            }
        }
        res.json(respuesta);
    })    
    .catch(error => res.send(error))
}

}



module.exports = apiProductsControllers


