import React, {Component} from 'react';
import Api from '../../services/api';


export default class Product extends Component {
    state = {
        product: {},  
    }
    async componentDidMount(){
        const { id } = this.props.match.params;
        const result = await Api.get(`/products/${id}`);
        this.setState({product: result.data});
    }

    render() {
        const { product } = this.state;
        return(
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>
                    URL : <a hred={product.url}>{product.url}</a>
                </p>
            </div>
        );
    }
}