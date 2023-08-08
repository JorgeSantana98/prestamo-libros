import { Form, Formik } from "formik";

function LibrosForm() {
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
        onSubmit={(values)=>{
          console.log(values)
        }}
      >
        {(
          { handleChange } //Cada vez que el usuario vaya escribiendo se van llenando los estados de initialValues
        ) => (
          <Form>
            <label>categoria</label>
            <input
              type="text"
              name="categoria"
              placeholder="categoria"
              onChange={handleChange}
            />

            <label>editorial</label>
            <input
              type="text"
              name="editorial"
              placeholder="editorial"
              onChange={handleChange}
            />

            <label>Nombre de Publicacion</label>
            <input
              type="text"
              name="nombrePublicacion"
              placeholder="publicacion"
              onChange={handleChange}
            />

            <label>autor</label>
            <input
              type="text"
              name="autor"
              placeholder="autor"
              onChange={handleChange}
            />

            <label>Año de Publicacion</label>
            <input
              type="text"
              name="anioPublicacion"
              placeholder="año de Publicacion"
              onChange={handleChange}
            />

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LibrosForm;
