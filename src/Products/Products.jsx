import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { alert } from '../functions'
import EdithProducts from './EdithProducts'

export default function Products () {
    const [products, setProducts] = useState([])

    const api = 'https://fakestoreapi.com/products'
    console.log(api)

    const getInfo = async () => {
        const resp = await axios.get(api)
        console.log(resp.data)
        setProducts(resp.data)
    }

    console.log(products)

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <> 
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Cathegory</th>
                        <th>Image</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={product.id}>
                        <td key={product.id}>{product.title}</td>
                        <td key={product.id}>{product.price}</td>
                        <td key={product.id}>{product.category}</td>
                        <td>
                            <img src={product.image} alt={`Imagen de ${product.name}`} width="100" height="100" />
                        </td>
                        <td>
                            <EdithProducts products={products}></EdithProducts>
                        </td>
                    </tr> 
                    ))}
                </tbody>
            </table>   
        </>
    )   
}