import "./input.css";
import navbar_ele from "./Data/nav_data";

function App() {
  /* const [navbar , updatenavbar] = useState(navbar_ele) */

  return (
    <div className=" font-serif">
      <nav className=" m-4 flex flex-row flex-wrap justify-between items-center">
        <div className=" ml-3 pl-8">
          <a
            className=" inline-flex"
            style={{ textDecoration: "none" }}
            href=""
          >
            <div className=" inline-flex">
              <img
                className=" p-2"
                style={{ width: "90px", height: "90px" }}
                src="NSS1.png"
                alt=""
              />
            </div>
            <div className=" pt-6 p-3 inline-flex align-middle flex-col">
              <p className=" text-3xl" style={{ unicodeBidi: "isolate" }}>
                National Service Scheme
              </p>
              <p className="text-sm " style={{ unicodeBidi: "isolate" }}>
                Puducherry Technological University, Puducherry
              </p>
            </div>
          </a>
        </div>
        <div className="text-lg">
          {navbar_ele.map((ele) => (
            <span className=" p-3">
              <button
                className={`p-3 rounded-xl bg-slate-300 border border-black hover:bg-${ele.color}-400`}
              >
                {ele.title}
              </button>
            </span>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
