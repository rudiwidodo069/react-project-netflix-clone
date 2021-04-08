import React from 'react';

// custom css
import './footer.css';

// footer component json
import FooterComponentJson from './footer.component.json';

export default function index() {
    return (
        <div className="bg-black bg-opacity-90 pt-3">
            <div className="bg-black">
                <div className="xs:px-5 md:container mx-auto">
                    <div className="pt-20 pb-10">
                        <div className="text-gray-400 text-opacity-80 flex">
                            <p>Questions? Call</p>
                            <a href="tel:007-803-321-2130" className="ml-2">007-803-321-2130</a>
                        </div>
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-3">
                            <div className="xs:text-sm text-gray-400 text-opacity-80 mt-4">
                                <ul className="list-none">
                                    {
                                        FooterComponentJson.satu.map(value => {
                                            return (
                                                <li key={value.id} className="my-1">{value.title}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="xs:text-sm md:row-start-1 md:col-start-2 sm:row-start-2 sm:col-start-1 xs:row-start-2 xs:col-start-1 text-gray-400 text-opacity-80 mt-4">
                                <ul className="list-none">
                                    {
                                        FooterComponentJson.dua.map(value => {
                                            return (
                                                <li key={value.id} className="my-1">{value.title}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="xs:text-sm text-gray-400 text-opacity-80 mt-4">
                                <ul className="list-none">
                                    {
                                        FooterComponentJson.tiga.map(value => {
                                            return (
                                                <li key={value.id} className="my-1">{value.title}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="xs:text-sm md:row-start-1 md:col-start-4 sm:row-start-2 sm:col-start-2 xs:row-start-2 xs:col-start-2  text-gray-400 text-opacity-80 mt-4">
                                <ul className="list-none">
                                    {
                                        FooterComponentJson.empat.map(value => {
                                            return (
                                                <li key={value.id} className="my-1">{value.title}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <select name="language" id="language" className="w-44 h-14 my-5 bg-transparent text-gray-500 text-opacity-80 text-xl ring-1 ring-gray-500 outline-none px-3">
                                <option value="english">English</option>
                            </select>
                        </div>
                        <div className="text-gray-500 text-opacity-80 text-lg">
                            <p>Netflix indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
