import FormUpdateStaff from "./FormUpdateStaff/formUpdateStaff"
import ShowStaff from "./ShowStaff/showStaff"
import './updateStaff.scss'

const updateStaff = () => {
    return (
        <div className="row update-staff p-0 m-4 mx-3">
            <div className="col-6">
                <ShowStaff/>
            </div>
            <div className="col-6">
                <FormUpdateStaff/>
            </div>
        </div>
    )
}

export default updateStaff;