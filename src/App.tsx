// import {useRef} from "react"

// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
import {Counter} from "./Counter"
import {Todo} from "./Todo";

/*const options: Highcharts.Options = {
    title: {
        text: 'My chart'
    },
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }]
}*/

// export const App = (props: HighchartsReact.Props) => {
export const App = () => {
    // const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

    return (
      <>
          <Counter />
          <Todo />
      </>
       /* <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartComponentRef}
                {...props}
            />
        </>*/
    )
}