// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiConstant = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {initialState: {}, apiStatus: apiConstant.initial}

  componentDidMount() {
    this.getallData()
  }

  getallData = async () => {
    this.setState({apiStatus: apiConstant.progress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({initialState: data, apiStatus: apiConstant.success})
    } else {
      this.setState({apiStatus: apiConstant.failure})
    }
  }

  rendersuccess = () => {
    const {initialState} = this.state
    // console.log(initialState)
    const sevenDaysData = initialState.last_7_days_vaccination
    const forStraightPieGender = initialState.vaccination_by_gender
    const forPieAge = initialState.vaccination_by_age
    console.log(sevenDaysData)
    return (
      <>
        <VaccinationCoverage vaccinationData={sevenDaysData} />
        <VaccinationByGender genderData={forStraightPieGender} />
        <VaccinationByAge ageData={forPieAge} />
      </>
    )
  }

  renderfailure = () => (
    <>
      <img
        className="error_image"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="error_msg">Something went wrong</h1>
    </>
  )

  renderprogress = () => (
    <div className="loading-view" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  rendermyprocess = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstant.success:
        return this.rendersuccess()
      case apiConstant.failure:
        return this.renderfailure()
      case apiConstant.progress:
        return this.renderprogress()
      default:
        return null
    }
  }

  render() {
    // const {initialState} = this.state
    // console.log(initialState)
    // const sevenDaysData = initialState.last_7_days_vaccination
    // const forStraightPieGender = initialState.vaccination_by_gender
    // const forPieAge = initialState.vaccination_by_age
    // console.log(sevenDaysData)
    return (
      <div>
        <div className="bg_container">
          <div className="header_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="cowin_logo"
            />
            <p className="cowin">Co-Win</p>
          </div>
          <h1 className="dash_board">CoWIN Vaccination in India</h1>
          <div className="myData">{this.rendermyprocess()}</div>
        </div>
      </div>
    )
  }
}

export default CowinDashboard
