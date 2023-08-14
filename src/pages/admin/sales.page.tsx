import React from 'react';
import DateTimeDisplay from './components/date-time-display.component';

function SalesPage() {

    return (
        
        <div className="flex h-screen w-full flex-col flex-1">
            <main className="relative z-0 flex-1 px-3 bg-dark">
                <div className="grid">
                                   
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2">
                       
                        <div>

                            <div className="col-span-12">
                                <div className="">
                                    <p className="text-xl font-bold text-center">Comandas Recentes</p>
                                    <div className="shadow w-full bg-gray-100 mt-2">
                                        <div className="bg-gray-700 text-xs leading-none py-1 text-center text-white" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out" style={{ backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')" }}>
                            <div className="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                                <div>
                                <h3 className="text-center text-white text-lg">Comanda 1</h3>
                                <h3 className="text-center text-white text-3xl mt-2 font-bold">R$ 27,58</h3>
                                <div className="flex space-x-4 mt-4">
                                    <button className="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-4 rounded font-bold">Transfer</button>
                                    <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-4 rounded font-bold">Request</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out" style={{ backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')" }}>
                            <div className="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                                <div>
                                <div className="text-white text-lg flex space-x-2 items-center">
                                    <div className="bg-white rounded-md p-2 flex items-center">
                                    <i className="fas fa-toggle-off fa-sm text-yellow-300"></i>
                                    </div>
                                    <p>Comanda</p>
                                </div>
                                <h3 className="text-white text-3xl mt-2 font-bold">120</h3>
                                <h3 className="text-white text-lg mt-2 text-yellow-100">4 not confirmed</h3>
                                </div>
                            </div>
                            </div>
                            <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out" style={{ backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')" }}>
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                                <div>
                                <div className="text-white text-lg flex space-x-2 items-center">
                                    <div className="bg-white rounded-md p-2 flex items-center">
                                    <i className="fas fa-clipboard-check fa-sm text-blue-800"></i>
                                    </div>
                                    <p>Comanda</p>
                                </div>
                                <h3 className="text-white text-3xl mt-2 font-bold">72</h3>
                                <h3 className="text-white text-lg mt-2">3.4% <span className="font-semibold text-blue-200">vs last month</span></h3>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div>
                            <div className="col-span-12">
                                <div className="card bg-neutral shadow">
                                    <div className="card-body p-2">

                                        <p className="text-xl font-bold text-center">
                                            Mesas/Comandas
                                        </p>

                                        <DateTimeDisplay />

                                        <div className="divider mt-1 mb-1"></div> 
                                        
                                        <div className="card bg-base-100 shadow-xl hover:bg-base-200 transition-all">
                                            <div className="card-body items-center p-3">
                                                <h2 className="card-title pt-2">
                                                    Comanda/Mesa - #71
                                                </h2>                                                                                                

                                                <div className="divider mt-1 mb-1"></div>
                                                
                                                <p className="text-sm xl:text-xl">Últimos Pedidos:</p>

                                                <div className="card-actions">
                                                    <div className="badge badge-outline max-w-fit lg:max-w-lg overflow-hidden inline-block">
                                                        Combo Whisky Red Label 700ml + Energético Red Bull Que te dá assas
                                                    </div> 
                                                    <div className="badge badge-outline max-w-fit lg:max-w-lg overflow-hidden inline-block">
                                                        Copo Whisky White Horse 700ml
                                                    </div>
                                                    <div className="badge badge-outline max-w-fit lg:max-w-lg overflow-hidden inline-block hidden xl:block">
                                                        Produto 4
                                                    </div>
                                                    <div className="badge badge-outline max-w-fit lg:max-w-lg overflow-hidden inline-block block xl:hidden">
                                                        ...
                                                    </div>
                                                </div>

                                                <h2 className="card-title text-info">
                                                    Total: R$ 570,00
                                                </h2>

                                                <div className="card-actions mt-4">
                                                    <button className="btn btn-outline btn-success inline-flex capitalize tooltip" data-tip="Adicionar Produto">
                                                        <i className="fas fa-plus fa-lg"></i>
                                                        <p className="hidden xl:block">Adicionar Produto</p>
                                                    </button>
                                                    <button className="btn btn-outline btn-info tooltip inline-flex capitalize" data-tip="Visualizar Comanda">
                                                        <i className="fas fa-eye fa-lg"></i>
                                                        <div className="hidden xl:block">Visualizar Comanda</div>
                                                    </button>
                                                </div>

                                                <div className="card-actions pt-2 pb-2 tooltip" data-tip="Atualizado ás: 20:24:10">
                                                    <div className="badge badge-outline badge-info">
                                                        <div className="pl-2 pr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        </div>
                                                        Última atualizada por: Rick Sanches
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-1 md:grid-cols-3">
                                            <div className="p-4 text-center hover:bg-base-100 transition-all">
                                                <p className="text-xl font-bold text-info">8</p>
                                                <p className="text font-bold text-info">Disponíveis</p>
                                            </div>
                                            <div className="p-4 text-center hover:bg-base-100 transition-all">
                                                <p className="text-xl font-bold text-base-content">15</p>
                                                <p className="text font-bold text-base-content">Em Andamento</p>
                                            </div>
                                            <div className="p-4 text-center hover:bg-base-100 transition-all">
                                                <p className="text-xl font-bold text-success">8</p>
                                                <p className="text font-bold text-success">Fechadas</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </main>
        </div>
        
    );
}

export default SalesPage