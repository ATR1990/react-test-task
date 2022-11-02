import counter from './store/counter'
import {observer} from "mobx-react-lite";

export const Counter = observer(() => {
	return (
		<>
			{"Count = " + counter.count}
			<div>
				<button onClick={() => counter.increment()}>+</button>
				<button onClick={() => counter.decrement()}>-</button>
			</div>
		</>
	)
})