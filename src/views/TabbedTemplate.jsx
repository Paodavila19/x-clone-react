import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import RegistroPaciente from './RegistroPaciente';
import Mascotas from './Mascotas';
import BancoDeOrganos from './BancoDeOrganos';
import BancoDeSangre from './BancoDeSangre';
import Citas from './Citas';
import logo from "../assets/images/logo_ppal.png"
/* Aqui agregamos la importacion del archivo que llamamos o vamos a usar para el contenido de pestañas*/
function TabbedTemplate() {
  const { logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('inicio');
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-white w-64 p-6 fixed h-full">
      <div className="flex flex-col items-center mb-7"> {/* Cambio a flex-col y agrego items-center */}
    <img src={logo} alt="Logo de la plataforma" className="w-22.5 mb-1" /> {/* Agrego mb-2 para espacio entre imagen y texto */}
    <h1 className="text-blue-700 text-xl font-bold">laboratorio clinico</h1> {/* Elimino ml-2 */}
  </div>
        <ul className="text-blue-500">
          <li className="mb-3">
            <button
              className={`text-blue-500 hover:bg-blue-100 py-2 px-4 w-full text-left focus:outline-none ${activeTab === 'formulario' ? 'bg-blue-100' : ''}`}
              onClick={() => changeTab('formulario')}
            >
              Formulario
            </button>
          </li>
          <li className="mb-2.5">
            <button
              className={`text-blue-500 hover:bg-blue-100 py-2 px-4 w-full text-left focus:outline-none ${activeTab === 'Mascotas' ? 'bg-blue-100' : ''}`}
              onClick={() => changeTab('Mascotas')}
            >
              Mascotas donantes
            </button>
          </li>
          <li className="mb-2.5">
            <button
              className={`text-blue-500 hover:bg-blue-100 py-2 px-4 w-full text-left focus:outline-none ${activeTab === 'Citas' ? 'bg-blue-100' : ''}`}
              onClick={() => changeTab('Citas')}
            >
              Registros
            </button>
          </li>
          <li className="mb-2.5">
            <button
              className={`text-blue-500 hover:bg-blue-100 py-2 px-4 w-full text-left focus:outline-none ${activeTab === 'Bancodeorganos' ? 'bg-blue-100' : ''}`}
              onClick={() => changeTab('Bancodeorganos')}
            >
              Banco de Órganos
            </button>
          </li>
          <li className="mb-2.5">
            <button
              className={`text-blue-500 hover:bg-blue-100 py-2 px-4 w-full text-left focus:outline-none ${activeTab === 'Bancodesangre' ? 'bg-blue-100' : ''}`}
              onClick={() => changeTab('Bancodesangre')}
            >
              Banco de Sangre
            </button>
          </li>
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full mb-4"
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="p-2 mt-0 bg-blue-50 ml-64">
          {activeTab === 'formulario' && <RegistroPaciente/>}
          {activeTab === 'Mascotas' && <Mascotas/>}
          {activeTab === 'Citas' && <Citas/>}
          {activeTab === 'Bancodeorganos' && <BancoDeOrganos/>}
          {activeTab === 'Bancodesangre' && <BancoDeSangre/>}
        </div>
      </div>
    </div>
  );
  
}
export default TabbedTemplate;
