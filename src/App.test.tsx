import { render, RenderResult } from '@testing-library/react'
import App from './App'

describe(`App`, () => {
    let container: RenderResult

    beforeEach(() => {
        container = render(<App />)
    })

    test(`matches previous screenshot`, () => {
        expect(container.baseElement).toMatchSnapshot();
    })

})