import React, { useState } from 'react';
function RegistroPaciente() {
  const [nombre, setNombre] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [eps, setEps] = useState('');
  const [grupoSanguineo, setGrupoSanguineo] = useState('');
  const [genero, setGenero] = useState('');
  const [edad, setEdad] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const handleRegistroClick = () => {
    // Lógica para guardar los datos
    console.log('Nombre:', nombre);
    console.log('Tipo de Documento:', tipoDocumento);
    console.log('Número de Documento:', numeroDocumento);
    console.log('Dirección:', direccion);
    console.log('Celular:', celular);
    console.log('Correo Electrónico:', correo);
    console.log('EPS:', eps);
    console.log('Grupo Sanguíneo:', grupoSanguineo);
    console.log('Género:', genero);
    console.log('Edad:', edad);
    console.log('Fecha de Nacimiento:', fechaNacimiento);
  };
  return (
    <div>
      <form>
      <div>
      <div style={{ textAlign: 'center' }}>
        <h4 className="font-bold p-6 text-lg text-center" style={{ fontWeight: 'bold' }}>Crear Paciente</h4>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="tipoDocumento">
              Tipo de Documento
            </label>
            <select
              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              name="tipoDocumento"
              id="tipoDocumento"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
            >
              <option value="">Seleccione su tipo de documento</option>
              <option value="Registro civil">Registro civil</option>
              <option value="Tarjeta de identidad">Tarjeta de identidad</option>
              <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
              <option value="Cédula de extranjería">Cédula de extranjería</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="numeroDocumento">
              Número de Documento
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              type="text"
              name="numeroDocumento"
              id="numeroDocumento"
              placeholder="Documento de identidad"
              value={numeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="direccion">
              Dirección
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              type="text"
              name="direccion"
              id="direccion"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="celular">
              Celular
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              type="text"
              name="celular"
              id="celular"
              placeholder="Número de celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
          <div className="md:w-1/2 px-3 ">
            <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="correo">
              Correo
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              type="email"
              name="correo"
              id="correo"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
        </div>
        <div> <br /></div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="eps">
              EPS
            </label>
            <select
              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              name="eps"
              id="eps"
              value={eps}
              onChange={(e) => setEps(e.target.value)}
            >
              <option value="">Seleccione una EPS</option>
              <option value="Sura">Sura</option>
              <option value="Comeva">Comeva</option>
              <option value="Nueva EPS">Nueva EPS</option>
              <option value="Savia Salud">Savia Salud</option>
            </select>
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="grupoSanguineo">
              Grupo sanguíneo
            </label>
            <select
              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              name="grupoSanguineo"
              id="grupoSanguineo"
              value={grupoSanguineo}
              onChange={(e) => setGrupoSanguineo(e.target.value)}
            >
              <option value="">Seleccione el grupo sanguíneo</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="genero">
              Género
            </label>
            <select
              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              name="genero"
              id="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="">Seleccione un Género</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Indefinido">Indefinido</option>
            </select>
          </div>
        </div>
        <div> <br /> </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="edad">
              Edad
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              type="text"
              name="edad"
              id="edad"
              placeholder="Edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block tracking-wide text-grey-darker text-sm font-bold mb-2" htmlFor="fechaNacimiento">
              Fecha de Nacimiento
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              type="date"
              name="fechaNacimiento"
              id="fechaNacimiento"
              placeholder="Fecha de Nacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>
        </div>
        <div><br /></div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4" type="button" onClick={handleRegistroClick}>Guardar</button>
        </div>
      </div>
    </div>
      </form>
    </div>
  );
}
export default RegistroPaciente;
