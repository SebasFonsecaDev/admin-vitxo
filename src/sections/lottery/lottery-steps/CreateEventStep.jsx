import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import IconUploadFile  from "./../../../assets/icons/iconUploadFile.svg";
import CheckCircleIcon from "./../../../assets/icons/checkFile.svg";

export const CreateEventStep = () => {

    const [icon, setIcon] = useState(IconUploadFile); 
    const [productOptions, setProductOptions] = useState([]);
    const [msjError, setMsjError] = useState("");

    const initialValues = {
        nombreEvento: "",
        tipoEvento: "",
        categoriaProducto: "",
        tipoProducto: "",
        marcaProducto: "",
        referenciaProducto : "",
        proveedorProducto: "",
        descripcionEvento: "",
        documentosEventos: null,
      };
    
      const validationSchemas = Yup.object({
        nombreEvento: Yup.string().required('Nombre del evento es requerido'),
        tipoEvento: Yup.string().required('Tipo del evento es requerido'),
        categoriaProducto: Yup.string().required('La categoria es requerida'),
        tipoProducto: Yup.string().required('El tipo del producto es requerido'),
        marcaProducto: Yup.string().required('El marca del producto es requerido'),
        referenciaProducto: Yup.string().required('La referencia del producto es requerida'),
        proveedorProducto: Yup.string().required('El proveedor del producto es requerido'),
        descripcionEvento: Yup.string().required('La descripción del producto es requerido'),
        documentosEventos: Yup.mixed()
        .required("Es necesario subir un archivo")
      });
    
      const handleCategoryChange = (event, setFieldValue) => {
        const category = event.target.value;
        setFieldValue("categoriaProducto", category);
        setFieldValue("tipoProducto", "");
    
        let options = [];
        switch (category) {
          case "Tecnología":
            options = ["Celular", "Televisor", "Computador", "Parlantes", "Consolas"];
            break;
          case "Vehículos":
            options = ["Moto", "Carro", "Moto acuática"];
            break;
          case "Inmuebles":
            options = ["Inmueble"];
            break;
          case "Otros":
            options = ["Diseño de sonrisa", "Reloj", "Gafas", "Viajes"];
            break;
          default:
            options = [];
        }
        setProductOptions(options);
      };

      const handleSubmit = (values) => { 
        console.log(values);
      }

  return (
    <div className="container">
        <h2 className="text-center text-dark-blue fw-bolder">
          Ingresa la información parcial de tu evento
        </h2>
        <div className="my-4 container col-12 col-md-10 pt-4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, setFieldValue }) => (
              <Form>
                <div className="col-12">
                  <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="nombreEvento"
                    placeholder="Nombre del Evento/Sorteo"
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <label htmlFor="tipoEvento" className="text-vitxo mb-1">
                      Tipo de evento
                    </label>
                    <div className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3">
                        <Field
                        as="select"
                        className="w-100 border-0 bg-transparent grey-dark focus-none fs-5"
                        name="tipoEvento"
                        >
                            <option className="grey-dark" value="" disabled>
                                Tipo de evento
                            </option>
                            <option>
                                Evento
                            </option>
                            <option>
                                Sorteo
                            </option>
                            <option>
                                Otros
                            </option>
                        </Field>
                    </div>
                    <ErrorMessage name="tipoEvento" component="div" className="alert alert-danger " />
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-center d-flex flex-column">
                    <label htmlFor="categoriaProducto" className="text-vitxo mb-1 w-100">
                      Categoría
                    </label>
                    <div className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3">
                        <Field
                        as="select"
                        className="w-100 border-0 bg-transparent grey-dark focus-none fs-5"
                        name="categoriaProducto"
                        onChange={(event) => handleCategoryChange(event, setFieldValue)}
                        >
                          <option value="" disabled>
                            Seleccione una categoria
                          </option>
                          <option>
                              Vehículos
                          </option>
                          <option>
                            Tecnología
                          </option>
                          <option>
                            Inmuebles
                          </option>
                          <option>
                            Otros
                          </option>
                        </Field>
                    </div>
                    <ErrorMessage name="categoriaProducto" component="div" className="alert alert-danger w-100 text-center" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <label htmlFor="tipoProducto" className="text-vitxo mb-1">
                      Tipo de producto
                    </label>
                    <div className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3">
                        <Field
                        as="select"
                        className="w-100 border-0 bg-transparent grey-dark focus-none fs-5"
                        name="tipoProducto"
                        >
                          <option value="" disabled>
                            Seleccione un tipo de producto
                          </option>
                          {productOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </Field>
                    </div>
                    <ErrorMessage name="tipoProducto" component="div" className="alert alert-danger" />
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-center d-flex flex-column">
                    <label htmlFor="marcaProducto" className="text-vitxo mb-1 w-100">
                      Marca
                    </label>
                    <div className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3">
                        <Field
                        as="select"
                        className="w-100 border-0 bg-transparent grey-dark focus-none fs-5"
                        name="marcaProducto"
                        >¿
                          <option>
                            Otros
                          </option>
                        </Field>
                    </div>
                    <ErrorMessage name="marcaProducto" component="div" className="alert alert-danger w-100 text-center " />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <label htmlFor="referenciaProducto" className="text-vitxo mb-1">
                      Referencia
                    </label>
                    <div className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3">
                        <Field
                        as="select"
                        className="w-100 border-0 bg-transparent grey-dark focus-none fs-5"
                        name="referenciaProducto"
                        >
                          <option>
                            Otros
                          </option>
                        </Field>
                    </div>
                    <ErrorMessage name="referenciaProducto" component="div" className="alert alert-danger" />
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-center d-flex flex-column">
                    <label htmlFor="proveedorProducto" className="text-vitxo mb-1 w-100">
                      Proveedor
                    </label>
                    <div className="w-100 py-3 px-3 fs-5 border-0 rounded-4 grey-dark bg-white mb-3">
                        <Field
                        as="select"
                        className="w-100 border-0 bg-transparent grey-dark focus-none fs-5"
                        name="proveedorProducto"
                        >¿
                          <option>
                            Otros
                          </option>
                        </Field>
                    </div>
                    <ErrorMessage name="proveedorProducto" component="div" className="alert alert-danger w-100 text-center" />
                  </div>
                </div>
                <div className="col-12">
                  <Field
                    className="w-100 py-3 px-3 mb-3 fs-5 border-0 rounded-4 grey-dark"
                    type="text"
                    name="descripcionEvento"
                    placeholder="Descripción"
                  />
                </div>
                <div className="bg-white py-5 rounded-4">
                  <label htmlFor="fileUploadDocumentosEventos" className="w-100 cursor-pointer">
                    <div className="text-center d-flex flex-column mx-auto">
                      <h4 className="text-dark-blue text-fs-large ">
                        Certificado de producto
                      </h4>
                      <span className="bg-danger bg-opacity-10 px-1 py-1 col-3 rounded mx-auto text-light-red text-fs-medium">
                        Agregar archivos
                      </span>
                      <img className="img-profile-testimonials mx-auto mt-2 " src={icon} alt="Icon upload" />
                      <span className="grey-medium text-fs-medium">
                        Solo se aceptan archivos PDF, Peso máximo 5MB.
                      </span>
                    </div>
                  </label>
                  <input
                    type="file"
                    id="fileUploadDocumentosEventos"
                    name="documentosEventos"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      if (file) {
                        if (file.type !== "application/pdf") {
                          setMsjError("Debes seleccionar un archivo PDF");
                          setFieldValue("documentosEventos", null);
                          setIcon(IconUploadFile);
                        } else if (file.size > 5 * 1024 * 1024) {
                          setMsjError("El tamaño del archivo es demasiado grande (max 5MB)");
                          setFieldValue("documentosEventos", null);
                          setIcon(IconUploadFile);
                        } else {
                          setMsjError("");
                          setFieldValue("documentosEventos", file);
                          setIcon(CheckCircleIcon);
                        }
                      } else {
                        setMsjError("");
                        setFieldValue("documentosEventos", null);
                        setIcon(IconUploadFile);
                      }
                    }}
                    className="file-input"
                    accept="application/pdf"
                    style={{ display: "none" }}
                  />
                </div>                 
                {msjError && (
                <div className="col-12 col-md-6 mx-auto text-center alert alert-danger mt-3">
                  {msjError}
                </div>
                )}
                <ErrorMessage name="documentosEventos" component="div" className="mt-3 alert alert-danger col-12 col-md-6 mx-auto text-center" />
                <div className="col-6 mx-auto">
                  <button type="submit" className="button-blue fs-5 w-100 mt-4">
                    Continuar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
  )
}
