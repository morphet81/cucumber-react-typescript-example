import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw'
import { setupServer } from 'msw/node'

const apiURL = (path: string) => process.env.REACT_APP_SERVICE_URL + path

const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
]

const mockServer = setupServer(...handlers)
export { mockServer, rest, apiURL }