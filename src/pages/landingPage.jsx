import '../css/landing.css';
import 'preline/dist/preline.js';
import Navbar from '../components/navLanding';

function App() {
  return (
    <>
      <div className="LandingPage">
        {/* Section 1 */}
        <header className="LandingPage-header">
          <div className="grid grid-cols-2 gap-1">
            <div className="simanis">
              <h1>SIMANIS</h1>
              <h3>Sistem Informasi Magang ini dirancang untuk memonitoring pelaksanaan program magang yang berada pada BPS Sumatera Barat</h3>
              <div className="grid grid-cols-12 gap-2 mt-6">
                <div className="col-span-4">
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg custom-button">
                    Login
                  </button>
                </div>
                <div className="col-span-4">
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="gambarMagang">
              <img src="./pict1.png" alt="" />
            </div>
          </div>
        </header>

        {/* Section 2 */}
        <section className="LandingPage-section1">
          <div class="grid gap-x-10 gap-y-4 grid-cols-2 mt-20 mb-20">
            <div>
              <img src="./pict2.png" alt="" />
            </div>
            <div>
              <h1>TUJUAN</h1>
              <h3>Mengembangkan Kompetensi Statistik</h3>
              <h4>Memahami proses pengumpulan, pengolahan, analisis, dan penyajian data statistik resmi, seperti data sosial, ekonomi, dan demografi.</h4>
              <h3>Penerapan Teori ke Praktik</h3>
              <h4>Menerapkan teori yang telah dipelajari di perkuliahan, seperti statistik, analisis data, atau metode survei, dalam kegiatan nyata.</h4>
              <h3>Meningkatkan Keterampilan Analitik</h3>
              <h4>Memperdalam kemampuan analisis data melalui penggunaan perangkat lunak statistik seperti SPSS, R, atau Python, serta alat visualisasi data seperti Tableau atau Power BI.</h4>
            </div>
            
          </div>
        </section>

        {/* Section 3 */}
        <section className="LandingPage-section2">
          <div class="grid gap-x-10 gap-y-4 grid-cols-3 mt-20 mb-20">
            <div>
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl mt-20 mb-20">
                      <div className="p-4 md:p-10">
                        <h3 className="text-lg font-bold text-gray-800">
                          Card title
                        </h3>
                        <p className="mt-2 text-gray-500">
                          With supporting text below as a natural lead-in to additional content.
                        </p>
                       
                      </div>
                    </div>
            </div>
            <div>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl mt-20 mb-20">
                      <div className="p-4 md:p-10">
                        <h3 className="text-lg font-bold text-gray-800">
                          Card title
                        </h3>
                        <p className="mt-2 text-gray-500">
                          With supporting text below as a natural lead-in to additional content.
                        </p>
                       
                      </div>
                    </div>
            </div>
            <div>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl mt-20 mb-20">
                      <div className="p-4 md:p-10">
                        <h3 className="text-lg font-bold text-gray-800">
                          Card title
                        </h3>
                        <p className="mt-2 text-gray-500">
                          With supporting text below as a natural lead-in to additional content.
                        </p>
                       
                      </div>
                    </div>
            </div>
            
          </div>
        </section>


          {/* Section 4 */}
          <section className="LandingPage-section3">
          <div className="moto">
            <h1>Ambil Kesempatan dan Kendali Massa Depanmu Sekarang</h1>
          </div>
         
          <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg custom-button">
                    Daftar Sekarang
          </button>

          
        </section>


      </div>
    </>
  );
}

export default App;
