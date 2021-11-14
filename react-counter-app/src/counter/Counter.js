import react ,{ useState } from 'react'
import './counter.css'

function Counter() {

	const [value, setValue] = useState(0)

	const increaseVal = () =>{
		setValue(value+1)
	}
	const decreseVal = () =>{
		setValue(value-1)
	}
	const resetVal = () =>{
		setValue(0)
	}

	return (
		<>
			<section>
				<h2>Regular Counter</h2>
				<h1>{value}</h1>

				<button type='button' onClick={increaseVal}>
					Increase
				</button>
				<button type='button' onClick={decreseVal}>
					Decrease
				</button>
				<button type='button' onClick={resetVal}>
					Reset
				</button>
			</section>
		</>
	)
}

export default Counter
