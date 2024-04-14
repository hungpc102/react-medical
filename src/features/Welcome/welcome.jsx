import CreateRecord from "./CreateMedicalRecord/createRecord"
import ListRecord from "./ListMedicalRecord/listRecord";
import './welcome.scss'

const Welcome = () => {
    return (
        <div className="row welcome p-0 m-0">
            <div className="col-7">
                <ListRecord/>
            </div>
            <div className="col-5 d-flex justify-content-center">
                <CreateRecord/>
            </div>
        </div>
    )
}

export default Welcome;