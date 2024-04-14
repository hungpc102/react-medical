import FormUpdateDoctor from "./FormUpdateDoctor/formUpdateDoctor"
import ShowDoctor from "./ShowDoctor/showDoctor"
import './updateDoctor.scss'

const UpdateDoctor = () => {
    return (
        <div className="row update-doctor p-0 m-4 mx-3">
            <div className="col-6">
                <ShowDoctor/>
            </div>
            <div className="col-6">
                <FormUpdateDoctor/>
            </div>
        </div>
    )
}

export default UpdateDoctor;