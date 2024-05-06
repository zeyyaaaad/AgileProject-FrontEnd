import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import{ Navbar, Footer, Sidebar, ThemeSettings} from './components';
import {Line, FleetUp, Vehicles, Calendar, Employees, Kanban, ColorPicker, ColorMapping } from './pages';

import { useStateContext } from './contexts/ContextProvider';
import './App.css'

const App = () => {
    const { activeMenu } = useStateContext();
   
    return (
    <div>
        <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                <TooltipComponent content= "Setting" position="Top">
                    <button type="button"
                    className="text-3xl p-3
                    hover:drop-shadow-xl
                    hover:bg-light-gray text-white"
                    style={{background: '#16a34a',
                    borderRadius: '50%'}}>
                        <FiSettings />

                    </button>
                </TooltipComponent> 

            </div>
            {activeMenu ? (
                <div className="w-72 fixed sidebar
                dark:bg-secondary-dark-bg
                bg-white">
                    <Sidebar />
                </div>
            ) : ( 
              <div className="w-0 dark:bg-secondary-bg">
                <Sidebar /> 
              </div> 
            )}
            <div className = {

            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 
                'md:ml-72' : 'flex-2'}`
            }>
                <div className="fixed md:static bg-main-bg dark:main-dark-bg navbar w-full">
                    <Navbar />
                </div>
                </div>   

                <div>
                   <Routes>
                    {/*  Dashboard  */}
                    <Route path="/" element={<FleetUp />} />
                    <Route path="/fleetup" element={<FleetUp  />}  />

                     {/*  Pages */}
                     
                     <Route path="/employees" element={<Employees />}  />
                     <Route path="/vehicles" element={<Vehicles />}  />

                     {/*  Apps */}
                     <Route path="/calendar" element={<Calendar />}  />
                     <Route path="/kanban" element={<Kanban />}  />
                     <Route path="/colorpicker" element={<ColorPicker />}  />

                      {/*  Charts */}
                      <Route path="/line" element={<Line />}  />
                      
                      <Route path="/colormapping" element={<ColorMapping />}  />
                   </Routes>
                    </div>   

        </div>
        </BrowserRouter>
    </div>
  )
}

export default App