import React from 'react'
import ProductDetail from './ProductDetail'
import ProductListing from './ProductListing'

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Shopymania</h2>
                 <ProductListing />
                 <ProductDetail/>
            </div>
        </div>
    )
}

export default Header
