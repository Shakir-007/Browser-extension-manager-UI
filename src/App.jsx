import { MdOutlineLightMode } from "react-icons/md";
import "./App.css";


function App() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #040918 0%, #091540 100%)",
        }}
        className="h-max pb-8 flex items-center justify-center"
      >
        <div className="w-5/6  h-full mt-8 ">
          <nav className="  flex items-center justify-between bg-[#1D2230] rounded-xl p-2">
            
            <img src="../public/logo.svg" alt="" className="  brightness-1  invert-[100%]  " />
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-700 cursor-pointer  ">
              <MdOutlineLightMode className="fill-white hover:fill-red-400 " />
            </div>
          </nav>
          <div className="my-10 w-full flex justify-between md:flex-row flex-col md:items-center gap-5"> 
            <div className="text-4xl  text-white font-bold">Extension List</div>
            <div className="flex gap-8">
              <div className="px-5 py-1 flex items-center justify-center rounded-full cursor-pointer hover:text-gray-700 hover:bg-red-500 bg-gray-600 font-semibold text-white">
                All
              </div>
              <div className="px-5 py-1 flex items-center justify-center rounded-full cursor-pointer hover:text-gray-700 hover:bg-red-500 bg-gray-600 font-semibold text-white">
                Active
              </div>
              <div className="px-5 py-1 flex items-center justify-center rounded-full cursor-pointer hover:text-gray-700 hover:bg-red-500 bg-gray-600 font-semibold text-white">
                Inactive
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-5 sm:grid-cols-1">
            <div className="rounded-xl bg-[#1D2230] ">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-devlens.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">DevLens</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Quickly inspect page layouts and visualiza element boundries.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
                

              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-style-spy.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">StyleSpy</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Instantly analyze and copy CSS from any web page element.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-speed-boost.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">SpeedBoost</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Optimizes browser resource usage to accelerate page landing.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-json-wizard.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">JSONWizard</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Formats, validates and prettifies JSON response in-browser.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-tab-master-pro.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">TabMaster Pro</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Organizes browser tabs into groups and sessions.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-viewport-buddy.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">ViewPort Buddy</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Simulates various screen resolutions directly within the browser.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-markup-notes.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">Markup Notes</h1>
                  <p className="text-[#C7C7C7] w-64">
                     Enables annotations and notes directly onto web pages for collaborative debugging.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-grid-guides.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">GridGuides</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Overlay customizable grids alignment guides on any webpage.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-palette-picker.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">Pallette Picker</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Instantly extrcts color palettes from any webpage.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-link-checker.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">LinkChecker</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Scan and highlights broken links on any webpage.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-dom-snapshot.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">DOMSnapshot</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Capture and export DOM structures quickly.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
              
              {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              </div>
            </div>
            <div className="rounded-xl bg-[#1D2230]">
              <div className="flex flex-row m-4">
                <div className="bg-[url('../public/logo-console-plus.svg')] w-24 h-24 bg-no-repeat"></div>
                <div className="ml-3">
                  <h1 className="text-[#F3F9FC] font-bold">ConsolePlus</h1>
                  <p className="text-[#C7C7C7] w-64">
                    Enhanced developer console with advanced filtering and logging.
                  </p>
                </div>
              </div>
              <div className="flex justify-between ">
                <button className="border m-4 rounded-full px-2 py-1 text-white font-semibold hover:bg-blue-600 ">Remove</button>
                
                {/* Slide Button starts here */}
              <label class="inline-flex items-center cursor-pointer mr-3">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 relative transition-all duration-300">
                  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
              {/* Slide Button ends here */}

              

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
