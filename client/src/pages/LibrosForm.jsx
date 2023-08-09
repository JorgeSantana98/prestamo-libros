import { Form, Formik } from "formik";
import { useLibros } from "../context/LibroProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LibrosForm() {
  const { createLibro, getLibro, updateLibro } = useLibros();
  const [libro, setLibro] = useState({
    categoria: "",
    editorial: "",
    nombrePublicacion: "",
    autor: "",
    anioPublicacion: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadLibro = async () => {
      if (params.id) {
        const libros = await getLibro(params.id);
        console.log(libros);
        setLibro({
          categoria: libro.categoria,
          editorial: libro.editorial,
          nombrePublicacion: libro.nom,
          autor: libro.autor,
          anioPublicacion: libro.anioPublicacion,
        });
      }
    };
    loadLibro();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Edit Libro" : "New Libro"}</h1>
      <Formik
        initialValues={libro}
        // enableReinitialize={true} //ojo
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            await updateLibro(params.id, values);
            console.log("update");
            navigate("/")
          } else {
            await createLibro(values); //usamos createLibro de LibroProvider
          }
          // actions.resetForm();
          setLibro({
            categoria: "",
            editorial: "",
            nombrePublicacion: "",
            autor: "",
            anioPublicacion: "",
          });
        }}
      >
        {(
          { handleChange, handleSubmit, values, isSubmitting } //Cada vez que el usuario vaya escribiendo se van llenando los estados de initialValues
        ) => (
          <Form onSubmit={handleSubmit}>
            <label>categoria</label>
            <input
              type="text"
              name="categoria"
              placeholder="categoria"
              onChange={handleChange}
              value={values.categoria}
            />

            <label>editorial</label>
            <input
              type="text"
              name="editorial"
              placeholder="editorial"
              onChange={handleChange}
              value={values.editorial}
            />

            <label>Nombre de Publicacion</label>
            <input
              type="text"
              name="nombrePublicacion"
              placeholder="publicacion"
              onChange={handleChange}
              value={values.nombrePublicacion}
            />

            <label>autor</label>
            <input
              type="text"
              name="autor"
              placeholder="autor"
              onChange={handleChange}
              value={values.autor}
            />

            <label>Año de Publicacion</label>
            <input
              type="text"
              name="anioPublicacion"
              placeholder="año de Publicacion"
              onChange={handleChange}
              value={values.anioPublicacion}
            />
            <button type="submit" disabled={isSubmitting}>
              {/* Si isSubmitting es true muestra el texto "" */}
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LibrosForm;
