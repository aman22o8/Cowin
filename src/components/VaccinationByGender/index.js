// Write your code here
import './index.css'
import {PieChart, Pie, Tooltip, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {genderData} = props
  console.log(genderData)

  return (
    <div className="second">
      <h1 className="desc_second">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={genderData}
          startAngle={180}
          endAngle={0}
          innerRadius={50}
          outerRadius={100}
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Tooltip />
        <Legend
          iconType="circle"
          layout="horizontal"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
