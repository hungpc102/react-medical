import CreateRecord from "./CreateMedicalRecord/createRecord"
import ListRecord from "./ListMedicalRecord/listRecord";

const Welcome = () => {
    return (
        <div className="row m-0 vh-100" style={{}}>
            <div className="col-7" style={{'border-right': 'solid 5px #3aa9cf', 'background-color': '#f2f2f2'}}>
                <ListRecord/>
            </div>
            <div className="col-5 d-flex justify-content-center" style={{'background-color': '#f2f2f2'}}>
                <CreateRecord/>
            </div>
        </div>
    )
}

export default Welcome;