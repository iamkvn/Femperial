import React, { Component } from 'react'
import util from '../util';

export class Products extends Component {
    render() {
        const productsItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className='thumbnail text-center'>
                    <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
                        <img src={`/products/${product.image}`}  alt={product.title}></img>
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <div>
                        <b>{util.formatCurrency(product.price)}</b>
                        <button className="btn btn-primary" 
                        onClick={(e) => this.props.handleAddToCart(e, product)}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        )
        )
        return (
            <div className="row">
                {productsItems}
            </div>
        )
    }
}

export default Products


