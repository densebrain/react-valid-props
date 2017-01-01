
import filterProps from './react-valid-props'
import assert from 'assert'

const props = {
	myBadKeyHere: '1234',
	className: 'good-stuff'
}

const dataProps = {
	dataTest: '1234'
}

describe('react-valid-props',() => {
	it('filters invalid react props',() => {
		assert(Object.keys(props).length === 2,'just a check')

		const newProps = filterProps(props)
		assert(Object.keys(newProps).length === 1,'bad key gone')
		assert(newProps.className === props.className,'class name still here')
	})
	it('data prop filter',() => {
		assert(Object.keys(dataProps).length === 1,'just a check')
		
		const newProps = filterProps(props)
		assert(Object.keys(newProps).length === 1,'double check')
		
	})
})
