import { useState } from 'react'
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


	const compIncreaseVal = () =>{
		setTimeout(()=>{
			setValue((preVal)=>{
				return preVal+1
			})
		},2000)
	}
	const compDecreseVal = () =>{
		setTimeout(()=>{
			setValue((preVal)=>{
				return preVal-1
			})
		},2000)
	}
	const compResetVal = () =>{
		setTimeout(()=>{
			setValue((preVal)=>{
				return 0
			})
		},2000)
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
			<section>
				<h2>Complex Counter</h2>
				<h1>{value}</h1>

				<button type='button' onClick={compIncreaseVal}>
					CompIncrease
				</button>
				<button type='button' onClick={compDecreseVal}>
					CompDecrease
				</button>
				<button type='button' onClick={compResetVal}>
					CompReset
				</button>
			</section>
		</>
	)
}

export default Counter
