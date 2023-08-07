// Write your code here
import './index.css'
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinationData} = props
  const updatedData = vaccinationData.map(each => ({
    dose1: each.dose_1,
    dose2: each.dose_2,
    vaccineDate: each.vaccine_date,
  }))
  console.log('my  updateddata', updatedData)
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  console.log(vaccinationData)

  return (
    <div className="first">
      <h1 className="desc_first">Vaccination Coverage</h1>

      <BarChart
        width={1000}
        height={300}
        data={updatedData}
        margin={{
          top: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokewidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Tooltip />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose1"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
          barSize="20%"
        />
        <Bar
          dataKey="dose2"
          name="Dose2"
          fill="#f54394"
          radius={[10, 10, 0, 0]}
          barSize="20%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
