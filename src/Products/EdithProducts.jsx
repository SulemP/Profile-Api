import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import MyModal from './../components/Modal/MyModal'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function EdithProducts (props){
  const {products} = props
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    name:'',
    price:'',
    cathegory:'',
    image:'',
  })

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

  console.log(products)
  console.log(form)

  async function editarProducto(id, datosActualizados) {
    try {
      const url = `https://api.escuelajs.co/api/v1/products/${id}`;

      const response = await fetch(url, {
        method: 'PUT', // Utilizamos el método HTTP PUT para editar el producto
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosActualizados), // Convertimos los datos a formato JSON
      });

      if (!response.ok) {
        throw new Error('Error al editar el producto.');
      }

      const data = await response.json();
      return data; // Retorna los datos del producto editado si la solicitud es exitosa
    } catch (error) {
      console.error('Error al editar el producto:', error);
      throw error;
    }
  }

  const editProduc = () => {
  }

    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>

          <MyModal
            show={show}
            handleClose={handleClose}
            primaryButtonText="Understood"
            modalTitle="Edit product"
          >
            <div>
              <input type="text" value={form.name} onChange={(e) => setForm(e.target.value)} />
          </div>

          </MyModal>
        </>
    )
}