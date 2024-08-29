import DataTable from "../Components/DataTable";
import Header from "./HomeComponents/Header";
import './Home.css'
function Home() {
    return (
        <>
            <div className="container-home">
                {/* <h1>Home Page</h1> */}
                <Header></Header>
                <DataTable></DataTable>
            </div>
        </>
    )
}
export default Home;