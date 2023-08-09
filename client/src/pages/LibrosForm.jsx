import { Form, Formik } from "formik";
import { useLibros } from "../context/LibroProvider";

function LibrosForm() {

  const {createLibro} = useLibros()
  return (
    <div>
      <Formik
        initialValues={{
          categoria: "",
          editorial: "",
          nombrePublicacion: "",
          autor: "",
          anioPublicacion: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          createLibro(values); //usamos createLibro de LibroProvider
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => ( //Cada vez que el usuario vaya escribiendo se van llenando los estados de initialValues
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
