import FormUpdateStaff from "./FormUpdateStaff/formUpdateStaff"
import ShowStaff from "./ShowStaff/showStaff"
import './updateStaff.scss'

const updateStaff = () => {
    return (
        <div className="row m-0 vh-100">
            <div className="col-6" style={{'border-right': 'solid 5px #3aa9cf', 'background-color': '#f2f2f2'}}>
                <ShowStaff/>
            </div>
            <div className="col-6 d-flex justify-content-center" style={{'background-color': '#f2f2f2'}}>
                <FormUpdateStaff/>
            </div>
        </div>
    )
}

export default updateStaff;