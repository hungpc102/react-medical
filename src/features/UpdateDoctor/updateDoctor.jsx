import FormUpdateDoctor from "./FormUpdateDoctor/formUpdateDoctor"
import ShowDoctor from "./ShowDoctor/showDoctor"
import './updateDoctor.scss'

const UpdateDoctor = () => {
    return (
        <div className="row m-0 vh-100 py-5" style={{'background-color': '#f2f2f2'}}>
            <div className="col-6" style={{'border-right': 'solid 5px #3aa9cf', 'background-color': '#f2f2f2'}}>
                <ShowDoctor/>
            </div>
            <div className="col-6 d-flex justify-content-center" style={{'background-color': '#f2f2f2'}}>
                <FormUpdateDoctor/>
            </div>
        </div>
    )
}

export default UpdateDoctor;