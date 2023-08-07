// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {ageData} = props
  console.log(ageData)

  return (
    <div className="third">
      <h1 className="desc_third">Vaccination by Age</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={ageData}
          startAngle={0}
          endAngle={360}
          outerRadius={100}
          dataKey="count"
        >
          <Cell name="18-42" fill="#5a8dee" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend iconType="circle" layout="horizontal" align="center" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
