import React, { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [producto, setProducto] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://scratchya.com.ar/react/datos.php")
    const data = await response.json()
    setProducto(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
      <table class='tg'>
          <thead>
              <tr>
              <td>Código</td>
              <td>Descripción</td>
              <td>Precio</td>
              </tr>
        </thead>
        <tbody>
          {producto.map(producto => (
            <tr>
              <td>{producto.codigo}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AsyncAwait;