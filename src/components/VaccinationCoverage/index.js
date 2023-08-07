// Write your code here
import './index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinationData} = props
  const updatedData = vaccinationData.map(each => ({
    dose1: each.dose_1,
    dose2: each.dose_2,
    vaccineDate: each.vaccine_date,
  }))
  console.log('my  updateddata', updatedData)

  console.log(vaccinationData)

  return (
    <div className="first">
      <h1 className="desc_first">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={100}
          height={300}
          data={updatedData}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokewidth: 1}}
          />
          <YAxis tick={{stroke: 'gray', strokewidth: 0}} />
          <Tooltip />
          <Legend align="center" />
          <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" />
          <Bar dataKey="dose2" name="Dose2" fill="#f54394" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
